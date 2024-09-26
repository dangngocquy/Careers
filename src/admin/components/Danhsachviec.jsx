import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input, Button, message, Drawer, DatePicker, Tag, Empty, Select, Row, Col, Modal, Checkbox, Space, Pagination } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { auth, db } from '../../config';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

const { Option } = Select;
const { confirm } = Modal;

const Danhsachviec = () => {
    const [form] = Form.useForm();
    const [jobs, setJobs] = useState([]);
    const [editingJob, setEditingJob] = useState(null);
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [editorData, setEditorData] = useState('');
    const [requirementsData, setRequirementsData] = useState('');
    const [locations, setLocations] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [isPriority, setIsPriority] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [priorityFilter, setPriorityFilter] = useState('all');
    const [workBlockFilter, setWorkBlockFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const navigate = useNavigate();
    const storage = getStorage();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                fetchJobs();
                fetchProvinces();
            } else {
                navigate('/login');
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const filterJobs = useCallback(() => {
        let filtered = jobs.filter(job =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (priorityFilter !== 'all') {
            filtered = filtered.filter(job =>
                priorityFilter === 'priority' ? job.isPriority : !job.isPriority
            );
        }

        if (workBlockFilter !== 'all') {
            filtered = filtered.filter(job => job.workBlock === workBlockFilter);
        }

        setFilteredJobs(filtered);
    }, [jobs, searchTerm, priorityFilter, workBlockFilter]);

    useEffect(() => {
        filterJobs();
    }, [filterJobs]);

    const handleSearch = (value) => {
        setSearchTerm(value);
    };

    const handlePriorityFilterChange = (value) => {
        setPriorityFilter(value);
    };

    const handleWorkBlockFilterChange = (value) => {
        setWorkBlockFilter(value);
    };
    const fetchProvinces = async () => {
        try {
            const response = await axios.get('https://raw.githubusercontent.com/ThangLeQuoc/vietnamese-provinces-database/refs/heads/master/json/full_json_generated_data_vn_units.json');
            setProvinces(response.data);
        } catch (error) {
            console.error("Error fetching provinces:", error);
            message.error("Failed to fetch provinces.");
        }
    };

    const fetchJobs = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'jobs'));
            const jobList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setJobs(jobList);
        } catch (error) {
            console.error("Error fetching jobs:", error);
            message.error("Failed to fetch job listings.");
        }
    };

    const onFinish = async (values) => {
        try {
            if (!locations.length) {
                message.error("Vui lòng chọn ít nhất một địa điểm");
                return;
            }

            const jobTitleQuery = query(collection(db, 'jobs'), where('title', '==', values.title));
            const jobTitleSnapshot = await getDocs(jobTitleQuery);
            if (!jobTitleSnapshot.empty && (!editingJob || editingJob.title !== values.title)) {
                message.error("Tên công việc đã tồn tại");
                return;
            }

            const jobData = {
                ...values,
                description: editorData,
                requirements: requirementsData,
                locations: locations,
                deadline: values.deadline.format('DD/MM/YYYY'),
                isPriority: isPriority,
            };

            confirm({
                title: editingJob ? 'Xác nhận chỉnh sửa' : 'Xác nhận thêm mới',
                icon: <ExclamationCircleOutlined />,
                content: editingJob ? 'Bạn có chắc chắn muốn chỉnh sửa tin tuyển dụng này?' : 'Bạn có chắc chắn muốn thêm tin tuyển dụng mới?',
                onOk: async () => {
                    if (editingJob) {
                        await updateJob(editingJob.id, jobData);
                    } else {
                        await addJob(jobData);
                    }
                    form.resetFields();
                    setEditorData('');
                    setRequirementsData('');
                    setLocations([]);
                    setIsDrawerVisible(false);
                    fetchJobs();
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        } catch (error) {
            console.error("Error saving job:", error);
            message.error("Failed to save job listing.");
        }
    };

    const addJob = async (jobData) => {
        await addDoc(collection(db, 'jobs'), jobData);
        message.success("Thêm tin thành công");
    };

    const updateJob = async (jobId, jobData) => {
        const jobRef = doc(db, 'jobs', jobId);
        await updateDoc(jobRef, jobData);
        message.success("Sửa tin thành công");
    };

    const deleteJob = async (jobId) => {
        confirm({
            title: 'Xác nhận xóa',
            icon: <ExclamationCircleOutlined />,
            content: 'Bạn có chắc chắn muốn xóa tin tuyển dụng này?',
            onOk: async () => {
                try {
                    await deleteDoc(doc(db, 'jobs', jobId));
                    message.success("Xóa tin thành công");
                    fetchJobs();
                } catch (error) {
                    console.error("Error deleting job:", error);
                    message.error("Failed to delete job listing.");
                }
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const uploadAdapter = (loader) => {
        return {
            upload: () => {
                return new Promise((resolve, reject) => {
                    loader.file.then(async (file) => {
                        try {
                            const storageRef = ref(storage, `CAREERS/${file.name}`);
                            await uploadBytes(storageRef, file);
                            const downloadURL = await getDownloadURL(storageRef);
                            resolve({ default: downloadURL });
                        } catch (error) {
                            reject(error);
                        }
                    });
                });
            }
        };
    };

    const editorConfiguration = {
        extraPlugins: [MyCustomUploadAdapterPlugin],
        toolbar: {
            items: [
                'heading',
                '|',
                'bold',
                'italic',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'imageUpload',
                'blockQuote',
                'insertTable',
                'undo',
                'redo'
            ]
        },
        image: {
            toolbar: [
                'imageStyle:inline',
                'imageStyle:block',
                'imageStyle:side',
                '|',
                'toggleImageCaption',
                'imageTextAlternative'
            ]
        }
    };

    function MyCustomUploadAdapterPlugin(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return uploadAdapter(loader);
        };
    }

    const editJob = (job) => {
        setEditingJob(job);
        form.setFieldsValue({
            ...job,
            deadline: job.deadline ? moment(job.deadline, 'DD/MM/YYYY') : null
        });
        setEditorData(job.description);
        setRequirementsData(job.requirements);
        setLocations(job.locations || []);
        setIsPriority(job.isPriority || false);
        setIsDrawerVisible(true);
    };

    const handleProvinceChange = (value) => {
        setSelectedProvince(value);
        const selectedProvinceData = provinces.find(province => province.Code === value);
        setDistricts(selectedProvinceData ? selectedProvinceData.District : []);
        setSelectedDistrict(null);
    };

    const handleDistrictChange = (value) => {
        setSelectedDistrict(value);
    };

    const addLocation = () => {
        if (selectedProvince) {
            const provinceData = provinces.find(p => p.Code === selectedProvince);
            let locationName = provinceData.Name;

            if (selectedDistrict) {
                const districtData = districts.find(d => d.Code === selectedDistrict);
                locationName = `${provinceData.Name} (${districtData.Name})`;
            }

            if (!locations.includes(locationName)) {
                setLocations([...locations, locationName]);
            }
        }
    };

    const removeLocation = (locationToRemove) => {
        setLocations(locations.filter(location => location !== locationToRemove));
    };

    const handlePageChange = (page, pageSize) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    const paginatedJobs = filteredJobs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <>
            <title>Đăng tuyển</title>
            <Space style={{ marginBottom: 16 }} size="middle">
                <Input.Search
                    placeholder="Tìm kiếm công việc"
                    onSearch={handleSearch}
                    style={{ width: 200 }}
                />
                <Select
                    style={{ width: 120 }}
                    placeholder="Ưu tiên"
                    onChange={handlePriorityFilterChange}
                    value={priorityFilter}
                >
                    <Option value="all">Tất cả</Option>
                    <Option value="priority">Ưu tiên</Option>
                    <Option value="normal">Bình thường</Option>
                </Select>
                <Select
                    style={{ width: 150 }}
                    placeholder="Khối làm việc"
                    onChange={handleWorkBlockFilterChange}
                    value={workBlockFilter}
                >
                    <Option value="all">Tất cả</Option>
                    <Option value="office">Khối văn phòng</Option>
                    <Option value="store">Khối cửa hàng</Option>
                </Select>
                <Button type="primary" onClick={() => setIsDrawerVisible(true)}>
                    Đăng tuyển ngay
                </Button>
            </Space>
            {filteredJobs.slice().reverse().length > 0 ? (
                <div className="job-detail__relation-jobs">
                    <h2 className="job-detail__relation-jobs-title">Công việc đã đăng</h2>

                    {paginatedJobs.slice().reverse().map((job) => (
                        <div className="job-list__item" key={job.id}>
                            <div
                                className={`job-list__item-unit job-list__item-unit--${job.workBlock === 'store' ? 'store' : 'office'}`}
                            >
                                {job.workBlock === 'store' ? 'Khối cửa hàng' : 'Khối văn phòng'}
                            </div>
                            <div className="job-list__item-body">
                                <div className="job-list__item-left">
                                    <div className="job-list__item-name"> {job.isPriority && (
                                        <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.3337 8.41667C18.417 8 18.0837 7.5 17.667 7.5L12.917 6.83333L10.7503 2.5C10.667 2.33333 10.5837 2.25 10.417 2.16667C10.0003 1.91667 9.50033 2.08333 9.25033 2.5L7.16699 6.83333L2.41699 7.5C2.16699 7.5 2.00033 7.58333 1.91699 7.75C1.58366 8.08333 1.58366 8.58333 1.91699 8.91667L5.33366 12.25L4.50033 17C4.50033 17.1667 4.50033 17.3333 4.58366 17.5C4.83366 17.9167 5.33366 18.0833 5.75033 17.8333L10.0003 15.5833L14.2503 17.8333C14.3337 17.9167 14.5003 17.9167 14.667 17.9167C14.7503 17.9167 14.7503 17.9167 14.8337 17.9167C15.2503 17.8333 15.5837 17.4167 15.5003 16.9167L14.667 12.1667L18.0837 8.83333C18.2503 8.75 18.3337 8.58333 18.3337 8.41667Z" fill="#FC625D" />
                                        </svg>
                                    )}
                                        {job.title}</div>
                                    <div className="job-list__item-left-info">
                                        <span className="mr-2">
                                            <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.33326 6.99988H7.99992C8.17673 6.99988 8.3463 6.92965 8.47133 6.80462C8.59635 6.6796 8.66659 6.51003 8.66659 6.33322C8.66659 6.1564 8.59635 5.98684 8.47133 5.86181C8.3463 5.73679 8.17673 5.66655 7.99992 5.66655H7.33326V5.33322C7.33326 5.15641 7.26302 4.98684 7.13799 4.86181C7.01297 4.73679 6.8434 4.66655 6.66659 4.66655C6.48978 4.66655 6.32021 4.73679 6.19519 4.86181C6.07016 4.98684 5.99992 5.15641 5.99992 5.33322V5.69988C5.59487 5.78213 5.23483 6.01195 4.98969 6.34473C4.74456 6.6775 4.63182 7.08949 4.67335 7.50072C4.71489 7.91194 4.90775 8.29306 5.21448 8.57009C5.52121 8.84712 5.91994 9.0003 6.33326 8.99988H6.99992C7.08833 8.99988 7.17311 9.035 7.23563 9.09751C7.29814 9.16003 7.33326 9.24481 7.33326 9.33322C7.33326 9.42162 7.29814 9.50641 7.23563 9.56892C7.17311 9.63143 7.08833 9.66655 6.99992 9.66655H5.33326C5.15645 9.66655 4.98688 9.73679 4.86185 9.86181C4.73683 9.98684 4.66659 10.1564 4.66659 10.3332C4.66659 10.51 4.73683 10.6796 4.86185 10.8046C4.98688 10.9296 5.15645 10.9999 5.33326 10.9999H5.99992V11.3332C5.99992 11.51 6.07016 11.6796 6.19519 11.8046C6.32021 11.9296 6.48978 11.9999 6.66659 11.9999C6.8434 11.9999 7.01297 11.9296 7.13799 11.8046C7.26302 11.6796 7.33326 11.51 7.33326 11.3332V10.9666C7.73831 10.8843 8.09835 10.6545 8.34349 10.3217C8.58862 9.98893 8.70136 9.57694 8.65983 9.16572C8.61829 8.75449 8.42543 8.37337 8.1187 8.09634C7.81197 7.81931 7.41324 7.66613 6.99992 7.66655H6.33326C6.24485 7.66655 6.16007 7.63143 6.09755 7.56892C6.03504 7.50641 5.99992 7.42162 5.99992 7.33322C5.99992 7.24481 6.03504 7.16003 6.09755 7.09751C6.16007 7.035 6.24485 6.99988 6.33326 6.99988ZM13.9999 7.99988H11.9999V1.99988C12.0004 1.88241 11.9698 1.7669 11.9113 1.66505C11.8527 1.56319 11.7683 1.47862 11.6666 1.41988C11.5652 1.36137 11.4503 1.33057 11.3333 1.33057C11.2162 1.33057 11.1013 1.36137 10.9999 1.41988L8.99992 2.56655L6.99992 1.41988C6.89858 1.36137 6.78361 1.33057 6.66659 1.33057C6.54957 1.33057 6.4346 1.36137 6.33326 1.41988L4.33326 2.56655L2.33326 1.41988C2.23191 1.36137 2.11695 1.33057 1.99992 1.33057C1.8829 1.33057 1.76794 1.36137 1.66659 1.41988C1.56485 1.47862 1.48044 1.56319 1.42191 1.66505C1.36337 1.7669 1.33279 1.88241 1.33326 1.99988V12.6665C1.33326 13.197 1.54397 13.7057 1.91904 14.0808C2.29412 14.4558 2.80282 14.6665 3.33326 14.6665H12.6666C13.197 14.6665 13.7057 14.4558 14.0808 14.0808C14.4559 13.7057 14.6666 13.197 14.6666 12.6665V8.66655C14.6666 8.48974 14.5964 8.32017 14.4713 8.19515C14.3463 8.07012 14.1767 7.99988 13.9999 7.99988ZM3.33326 13.3332C3.15645 13.3332 2.98688 13.263 2.86185 13.138C2.73683 13.0129 2.66659 12.8434 2.66659 12.6665V3.15322L3.99992 3.91322C4.10282 3.96696 4.21718 3.99502 4.33326 3.99502C4.44934 3.99502 4.5637 3.96696 4.66659 3.91322L6.66659 2.76655L8.66659 3.91322C8.76948 3.96696 8.88384 3.99502 8.99992 3.99502C9.116 3.99502 9.23036 3.96696 9.33326 3.91322L10.6666 3.15322V12.6665C10.6684 12.894 10.709 13.1194 10.7866 13.3332H3.33326ZM13.3333 12.6665C13.3333 12.8434 13.263 13.0129 13.138 13.138C13.013 13.263 12.8434 13.3332 12.6666 13.3332C12.4898 13.3332 12.3202 13.263 12.1952 13.138C12.0702 13.0129 11.9999 12.8434 11.9999 12.6665V9.33322H13.3333V12.6665Z" fill="#30C894" />
                                            </svg>
                                        </span>
                                        <span>{job.salary}</span>
                                    </div>
                                    <div className="job-list__item-left-info">
                                        <span className="mr-2">
                                            <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.0001 2.98644C10.9392 1.92558 9.50041 1.32959 8.00012 1.32959C6.49982 1.32959 5.06098 1.92558 4.00012 2.98644C2.93925 4.04731 2.34326 5.48615 2.34326 6.98644C2.34326 8.48673 2.93925 9.92558 4.00012 10.9864L7.51345 14.5064C7.57542 14.5689 7.64916 14.6185 7.7304 14.6524C7.81164 14.6862 7.89877 14.7036 7.98678 14.7036C8.07479 14.7036 8.16193 14.6862 8.24317 14.6524C8.32441 14.6185 8.39814 14.5689 8.46011 14.5064L12.0001 10.9531C13.0565 9.89666 13.65 8.46381 13.65 6.96978C13.65 5.47574 13.0565 4.0429 12.0001 2.98644ZM11.0468 9.99978L8.00012 13.0598L4.95345 9.99978C4.35155 9.39732 3.94177 8.62994 3.77591 7.79464C3.61006 6.95933 3.69557 6.09361 4.02165 5.3069C4.34773 4.52019 4.89973 3.84781 5.60787 3.37476C6.31601 2.90171 7.14851 2.64923 8.00012 2.64923C8.85173 2.64923 9.68422 2.90171 10.3924 3.37476C11.1005 3.84781 11.6525 4.52019 11.9786 5.3069C12.3047 6.09361 12.3902 6.95933 12.2243 7.79464C12.0585 8.62994 11.6487 9.39732 11.0468 9.99978ZM6.00012 4.93978C5.46193 5.47963 5.15971 6.21082 5.15971 6.97311C5.15971 7.7354 5.46193 8.4666 6.00012 9.00644C6.39996 9.40697 6.90917 9.6805 7.46388 9.79271C8.01859 9.90493 8.59408 9.85083 9.11816 9.63721C9.64224 9.42359 10.0916 9.05996 10.4098 8.59194C10.728 8.12392 10.9009 7.57236 10.9068 7.00644C10.9098 6.62858 10.837 6.25395 10.6927 5.9047C10.5484 5.55546 10.3356 5.23868 10.0668 4.97311C9.80256 4.70283 9.4875 4.48747 9.13973 4.33942C8.79196 4.19137 8.41834 4.11356 8.04038 4.11046C7.66242 4.10736 7.28758 4.17904 6.93743 4.32137C6.58728 4.4637 6.26873 4.67386 6.00012 4.93978ZM9.12678 8.05978C8.87414 8.31627 8.54026 8.47705 8.1822 8.51461C7.82414 8.55218 7.46416 8.4642 7.16379 8.26573C6.86342 8.06725 6.64131 7.77061 6.53545 7.4265C6.42959 7.08239 6.44655 6.7122 6.58342 6.37921C6.72029 6.04623 6.96858 5.77112 7.28584 5.60093C7.6031 5.43075 7.96962 5.37605 8.32274 5.44619C8.67586 5.51633 8.99366 5.70695 9.22179 5.98546C9.44992 6.26398 9.57423 6.61309 9.57345 6.97311C9.56375 7.38462 9.39111 7.77546 9.09345 8.05978H9.12678Z" fill="#333333" />
                                            </svg>
                                        </span>
                                        <span>
                                            {job.locations.slice().reverse().map((location, index) => {
                                                const [city, district] = location.split(' (');
                                                return (
                                                    <span key={index}>
                                                        <b>{city}</b>
                                                        {district && ` (${district.slice(0, -1)})`}
                                                        {index < job.locations.length - 1 ? ', ' : ''}
                                                    </span>
                                                );
                                            })}
                                        </span>
                                    </div>
                                    <div className="job-list__item-mb-deadline">
                                        <span className="mr-2">
                                            <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.6668 2.66667H11.3335V2C11.3335 1.82319 11.2633 1.65362 11.1382 1.5286C11.0132 1.40357 10.8436 1.33334 10.6668 1.33334C10.49 1.33334 10.3204 1.40357 10.1954 1.5286C10.0704 1.65362 10.0002 1.82319 10.0002 2V2.66667H6.00016V2C6.00016 1.82319 5.92992 1.65362 5.8049 1.5286C5.67988 1.40357 5.51031 1.33334 5.3335 1.33334C5.15669 1.33334 4.98712 1.40357 4.86209 1.5286C4.73707 1.65362 4.66683 1.82319 4.66683 2V2.66667H3.3335C2.80306 2.66667 2.29436 2.87738 1.91928 3.25246C1.54421 3.62753 1.3335 4.13624 1.3335 4.66667V12.6667C1.3335 13.1971 1.54421 13.7058 1.91928 14.0809C2.29436 14.456 2.80306 14.6667 3.3335 14.6667H12.6668C13.1973 14.6667 13.706 14.456 14.081 14.0809C14.4561 13.7058 14.6668 13.1971 14.6668 12.6667V4.66667C14.6668 4.13624 14.4561 3.62753 14.081 3.25246C13.706 2.87738 13.1973 2.66667 12.6668 2.66667ZM13.3335 12.6667C13.3335 12.8435 13.2633 13.0131 13.1382 13.1381C13.0132 13.2631 12.8436 13.3333 12.6668 13.3333H3.3335C3.15669 13.3333 2.98712 13.2631 2.86209 13.1381C2.73707 13.0131 2.66683 12.8435 2.66683 12.6667V8H13.3335V12.6667ZM13.3335 6.66667H2.66683V4.66667C2.66683 4.48986 2.73707 4.32029 2.86209 4.19526C2.98712 4.07024 3.15669 4 3.3335 4H4.66683V4.66667C4.66683 4.84348 4.73707 5.01305 4.86209 5.13807C4.98712 5.2631 5.15669 5.33334 5.3335 5.33334C5.51031 5.33334 5.67988 5.2631 5.8049 5.13807C5.92992 5.01305 6.00016 4.84348 6.00016 4.66667V4H10.0002V4.66667C10.0002 4.84348 10.0704 5.01305 10.1954 5.13807C10.3204 5.2631 10.49 5.33334 10.6668 5.33334C10.8436 5.33334 11.0132 5.2631 11.1382 5.13807C11.2633 5.01305 11.3335 4.84348 11.3335 4.66667V4H12.6668C12.8436 4 13.0132 4.07024 13.1382 4.19526C13.2633 4.32029 13.3335 4.48986 13.3335 4.66667V6.66667Z" fill="#333333" />
                                            </svg>
                                        </span>
                                        <span>Hạn nộp: {job.deadline}</span>
                                    </div>
                                </div>
                                <div className="job-list__item-right">
                                    <div className="job-list__item-deadline">Hạn nộp 30/09/2024</div>
                                    <div className="job-list__item-actions">
                                        <Button
                                            icon={<EditOutlined />}
                                            onClick={() => editJob(job)}
                                            style={{ marginRight: '8px' }}
                                        >Chỉnh sửa tin</Button>
                                        <Button icon={<DeleteOutlined />} onClick={() => deleteJob(job.id)} >Xóa</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={filteredJobs.length}
                        onChange={handlePageChange}
                        showSizeChanger
                        align="end"
                        style={{ paddingRight: 16, paddingTop: 16 }}
                        showQuickJumper
                    />
                </div>
            ) : (
                <Empty description="Không có công việc nào" image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}


            <Drawer
                title={editingJob ? "Sửa tin tuyển dụng" : "Thêm tin tuyển dụng"}
                placement="right"
                onClose={() => {
                    setIsDrawerVisible(false);
                    setEditingJob(null);
                    setEditorData('');
                    setRequirementsData('');
                    setLocations([]);
                    form.resetFields();
                }}
                visible={isDrawerVisible}
                width={1080}
            >
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item name="title" label="Tên công việc" rules={[{ required: true, message: "Tên công việc cần đăng tuyển" }]}>
                        <Input placeholder='Nhập tên công việc' />
                    </Form.Item>
                    <Form.Item name="salary" label="Mức lương" rules={[{ required: true, message: "Vui lòng nhập mức lương" }]}>
                        <Input placeholder='Nhập mức lương' />
                    </Form.Item>
                    <Form.Item name="workBlock" label="Khối làm việc" rules={[{ required: true, message: "Vui lòng chọn khối làm việc" }]}>
                        <Select placeholder="Chọn khối làm việc">
                            <Option value="office">Khối văn phòng</Option>
                            <Option value="store">Khối cửa hàng</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Địa điểm" required>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Select
                                    placeholder="Chọn Tỉnh/Thành phố"
                                    onChange={handleProvinceChange}
                                    value={selectedProvince}
                                    style={{ width: '100%' }}
                                >
                                    {provinces.map(province => (
                                        <Option key={province.Code} value={province.Code}>{province.Name}</Option>
                                    ))}
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select
                                    placeholder="Chọn Quận/Huyện"
                                    onChange={handleDistrictChange}
                                    value={selectedDistrict}
                                    style={{ width: '100%' }}
                                    disabled={!selectedProvince}
                                >
                                    {districts.map(district => (
                                        <Option key={district.Code} value={district.Code}>{district.Name}</Option>
                                    ))}
                                </Select>
                            </Col>
                        </Row>
                        <Button type="primary" onClick={addLocation} icon={<PlusOutlined />} style={{ marginTop: '8px' }}>
                            Thêm địa điểm
                        </Button>
                    </Form.Item>
                    <div style={{ marginTop: '16px' }}>
                        {locations.map(location => (
                            <Tag
                                key={location}
                                closable
                                onClose={() => removeLocation(location)}
                                style={{ marginBottom: '8px' }}
                            >
                                {location}
                            </Tag>
                        ))}
                    </div>
                    <Form.Item name="deadline" label="Hạn nộp" rules={[{ required: true, message: "Hạn đăng tuyển" }]}>
                        <DatePicker
                            style={{ width: '100%' }}
                            placeholder='Hạn nộp'
                            format="DD/MM/YYYY"
                        />
                    </Form.Item>
                    <Form.Item label="Mô tả công việc" required>
                        <CKEditor
                            editor={ClassicEditor}
                            data={editorData}
                            config={editorConfiguration}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setEditorData(data);
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="Yêu cầu công việc">
                        <CKEditor
                            editor={ClassicEditor}
                            data={requirementsData}
                            config={editorConfiguration}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setRequirementsData(data);
                            }}
                        />
                    </Form.Item>
                    <Space direction='horizontal'>
                        <Form.Item>
                            <Checkbox
                                checked={isPriority}
                                onChange={(e) => setIsPriority(e.target.checked)}
                            >
                                Tin ưu tiên
                            </Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                {editingJob ? "Xác nhận chỉnh sửa" : "Xác nhận thêm mới"}
                            </Button>
                        </Form.Item>
                    </Space>
                </Form>
            </Drawer>
        </>
    );
};

export default Danhsachviec;