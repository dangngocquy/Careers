import React, { useState } from 'react';
import { Form, Input, DatePicker, Switch, Radio, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FcCancel, FcUpload } from "react-icons/fc";

const { TextArea } = Input;

const Kinhnghiem = ({ form }) => {
    const [experiences, setExperiences] = useState([{}]);
    const [activeGender, setActiveGender] = useState('Nam');
    const [hasCv, setHasCv] = useState('Có CV');
    const [fileList, setFileList] = useState([]);

    const handleGenderChange = (e) => {
        const value = e.target.value;
        setActiveGender(value);
        form.setFieldsValue({ gender: value });
    };

    const handleCvChange = (e) => {
        const value = e.target.value;
        setHasCv(value);
        form.setFieldsValue({ hoso: value });
        if (value === 'Không có CV') {
            setFileList([]);
            form.setFieldsValue({ cvFile: null });
        }
    };

    const addExperience = () => {
        setExperiences([...experiences, {}]);
    };

    const removeExperience = (index) => {
        if (experiences.length > 1) {
            const newExperiences = experiences.filter((_, i) => i !== index);
            setExperiences(newExperiences);
            const currentExperiences = form.getFieldValue('experiences') || [];
            const updatedExperiences = currentExperiences.filter((_, i) => i !== index);
            form.setFieldsValue({ experiences: updatedExperiences });
        }
    };

    const props = {
        name: 'file',
        multiple: false,
        accept: '.pdf,.doc,.docx',
        maxCount: 1,
        fileList: fileList,
        beforeUpload: (file) => {
            const isValidFileType = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type);
            if (!isValidFileType) {
                message.error('Chỉ chấp nhận file PDF, DOC, hoặc DOCX!');
                return Upload.LIST_IGNORE;
            }
            const isLessThan3MB = file.size / 1024 / 1024 < 3;
            if (!isLessThan3MB) {
                message.error('File phải nhỏ hơn 3MB!');
                return Upload.LIST_IGNORE;
            }
            setFileList([file]);
            return false;
        },
        onRemove: () => {
            setFileList([]);
            form.setFieldsValue({ cvFile: null });
        },
    };

    return (
        <>
            <h2 className="apply-form__group-name">Kinh nghiệm làm việc</h2>
            <div className="apply-form__group-body row no-gutters">
                <Form.Item name="hasExperience" style={{ padding: 0 }}>
                    <div className="row no-gutters">
                        <div className="apply-form__control col-12 col-lg-6 p-0 pr-12px pr-mb-0">
                            <div className={`custom-radio__container ${activeGender === 'Có kinh nghiệm' ? 'custom-radio__container--active' : ''}`}>
                                <Radio.Group onChange={handleGenderChange} value={activeGender}>
                                    <Radio value="Có kinh nghiệm" style={{ padding: '9px' }} >
                                        <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Có kinh nghiệm</span>
                                    </Radio>
                                </Radio.Group>
                            </div>
                        </div>
                        <div className="apply-form__control mt-0 mt-mb-10px col-12 col-lg-6 p-0 pl-12px pl-mb-0">
                            <div className={`custom-radio__container ${activeGender === 'Không có kinh nghiệm' ? 'custom-radio__container--active' : ''}`}>
                                <Radio.Group onChange={handleGenderChange} value={activeGender}>
                                    <Radio value="Không có kinh nghiệm" style={{ padding: '9px' }}>
                                        <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Không có kinh nghiệm</span>
                                    </Radio>
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                </Form.Item>
                <div className="apply-form__control col-12 p-0">
                    <div className="apply-form__exp-list">
                        {experiences.map((_, index) => (
                            <div className="apply-form__exp-item" key={index}>
                                <div
                                    title={`Kinh nghiệm ${index + 1}`}
                                    className='row no-gutters'
                                >
                                    <div className="apply-form__control col-12 p-0">
                                        <Form.Item
                                            name={['experiences', index, 'position']}
                                            label="Vị trí đảm nhiệm"
                                            rules={[{ required: true, message: 'Vui lòng nhập vị trí đảm nhiệm' }]}
                                        >
                                            <Input placeholder="Nhập vị trí đảm nhiệm" size='large' />
                                        </Form.Item>
                                    </div>
                                    <div className="apply-form__control col-12 p-0">
                                        <Form.Item
                                            name={['experiences', index, 'company']}
                                            label="Công ty/Doanh nghiệp"
                                            rules={[{ required: true, message: 'Vui lòng nhập tên công ty hoặc doanh nghiệp' }]}
                                        >
                                            <Input placeholder="Nhập tên công ty hoặc doanh nghiệp" size='large' />
                                        </Form.Item>
                                    </div>
                                    <div className="apply-form__control col-12 p-0">
                                        <div className="switch-control">
                                            <div className="switch-control__title">Hiện đang làm việc tại đây</div>
                                            <span className="MuiSwitch-root jss19">
                                                <Form.Item
                                                    name={['experiences', index, 'currentlyWorking']}
                                                    valuePropName="checked"
                                                >
                                                    <Switch />
                                                </Form.Item>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="apply-form__control col-6 p-0 pr-12px pr-mb-4px">
                                        <Form.Item
                                            name={['experiences', index, 'startDate']}
                                            label="Từ ngày"
                                            rules={[{ required: true, message: 'Vui lòng chọn ngày bắt đầu' }]}
                                        >
                                            <DatePicker format="MM/YYYY" picker="month" placeholder='MM/YYYY' size='large' style={{ width: '100%' }} />
                                        </Form.Item>
                                    </div>
                                    <div className="apply-form__control col-6 p-0 pr-12px pr-mb-4px">
                                        <Form.Item
                                            noStyle
                                            shouldUpdate={(prevValues, currentValues) => {
                                                const prev = prevValues.experiences?.[index]?.currentlyWorking;
                                                const current = currentValues.experiences?.[index]?.currentlyWorking;
                                                return prev !== current;
                                            }}
                                        >
                                            {({ getFieldValue }) =>
                                                !getFieldValue(['experiences', index, 'currentlyWorking']) && (
                                                    <Form.Item
                                                        name={['experiences', index, 'endDate']}
                                                        label="Đến ngày"
                                                        rules={[{ required: true, message: 'Vui lòng chọn ngày kết thúc' }]}
                                                    >
                                                        <DatePicker format="MM/YYYY" picker="month" placeholder='MM/YYYY' size='large' style={{ width: '100%' }} />
                                                    </Form.Item>
                                                )
                                            }
                                        </Form.Item>
                                    </div>
                                    <div className="apply-form__control col-12 p-0">
                                        <Form.Item
                                            name={['experiences', index, 'description']}
                                            label="Mô tả việc làm"
                                        >
                                            <TextArea rows={4} placeholder="Nhập mô tả công việc" />
                                        </Form.Item>
                                    </div>
                                    {experiences.length > 1 && (
                                        <div className="experience__btn-remove" onClick={() => removeExperience(index)} style={{ padding: 0 }}>
                                            <span><FcCancel size={20} /></span>
                                            <span>Xóa kinh nghiệm làm việc</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Form.Item>
                        <div className='experience__add-btn' onClick={addExperience}>
                            <span className="mr-2" style={{ height: '16px' }} >
                                <PlusOutlined />
                            </span>
                            Thêm kinh nghiệm làm việc
                        </div>
                    </Form.Item>
                    <div className="apply-form__group-body--line"></div>
                    <Form.Item name="hoso" label="CV ứng tuyển" style={{ padding: 0 }}>
                        <div className="row no-gutters">
                            <div className="apply-form__control col-12 col-lg-6 p-0 pr-12px pr-mb-0">
                                <div className={`custom-radio__container ${hasCv === 'Có CV' ? 'custom-radio__container--active' : ''}`}>
                                    <Radio.Group onChange={handleCvChange} value={hasCv}>
                                        <Radio value="Có CV" style={{ padding: '9px' }} >
                                            <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Có CV</span>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className="apply-form__control mt-0 mt-mb-10px col-12 col-lg-6 p-0 pl-12px pl-mb-0">
                                <div className={`custom-radio__container ${hasCv === 'Không có CV' ? 'custom-radio__container--active' : ''}`}>
                                    <Radio.Group onChange={handleCvChange} value={hasCv}>
                                        <Radio value="Không có CV" style={{ padding: '9px' }}>
                                            <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Không có CV</span>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Form.Item>
                    {hasCv === 'Có CV' && (
                        <>
                            {fileList.length === 0 && (
                                <div className='upload-cv__container'>
                                    <Form.Item name="cvFile">
                                        <Upload.Dragger {...props}>
                                            <p className="ant-upload-drag-icon">
                                                <FcUpload size={42} />
                                            </p>
                                            <p className="ant-upload-text">Nhấp hoặc kéo file vào khu vực này để tải lên</p>
                                            <p className="ant-upload-hint">
                                                Hỗ trợ tải lên một file duy nhất. Chỉ chấp nhận file PDF, DOC, DOCX có dung lượng tối đa 3MB.
                                            </p>
                                        </Upload.Dragger>
                                    </Form.Item>
                                </div>
                            )}

                            {fileList.length > 0 && (
                                <div className="upload-cv__container">
                                    <div className="upload-cv__proview-container">
                                        <div className="upload-cv__proview-info">
                                            <div className="upload-cv__proview-icon">
                                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="48" height="48" rx="8" fill="#EAFAF4"></rect>
                                                    <path d="M27 20H31.4L26 14.6V19C26 19.6 26.4 20 27 20ZM27 22C25.3 22 24 20.7 24 19V14H19C17.3 14 16 15.3 16 17V31C16 32.7 17.3 34 19 34H29C30.7 34 32 32.7 32 31V22H27Z" fill="#30C894"></path>
                                                </svg>
                                            </div>
                                            <div className="upload-cv__proview-detail">
                                                <div className="upload-cv__proview-name">{fileList[0].name}</div>
                                                <div className="upload-cv__proview-size">{(fileList[0].size / 1024).toFixed(2)} KB</div>
                                            </div>
                                        </div>
                                        <div className="upload-cv__proview-remove">
                                            <span onClick={() => setFileList([])}>
                                                <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.6667 4.99984H13.3333V4.1665C13.3333 3.50346 13.0699 2.86758 12.6011 2.39874C12.1323 1.9299 11.4964 1.6665 10.8333 1.6665H9.16667C8.50363 1.6665 7.86774 1.9299 7.3989 2.39874C6.93006 2.86758 6.66667 3.50346 6.66667 4.1665V4.99984H3.33333C3.11232 4.99984 2.90036 5.08764 2.74408 5.24392C2.5878 5.4002 2.5 5.61216 2.5 5.83317C2.5 6.05418 2.5878 6.26615 2.74408 6.42243C2.90036 6.57871 3.11232 6.6665 3.33333 6.6665H4.16667V15.8332C4.16667 16.4962 4.43006 17.1321 4.8989 17.6009C5.36774 18.0698 6.00363 18.3332 6.66667 18.3332H13.3333C13.9964 18.3332 14.6323 18.0698 15.1011 17.6009C15.5699 17.1321 15.8333 16.4962 15.8333 15.8332V6.6665H16.6667C16.8877 6.6665 17.0996 6.57871 17.2559 6.42243C17.4122 6.26615 17.5 6.05418 17.5 5.83317C17.5 5.61216 17.4122 5.4002 17.2559 5.24392C17.0996 5.08764 16.8877 4.99984 16.6667 4.99984ZM8.33333 4.1665C8.33333 3.94549 8.42113 3.73353 8.57741 3.57725C8.73369 3.42097 8.94565 3.33317 9.16667 3.33317H10.8333C11.0543 3.33317 11.2663 3.42097 11.4226 3.57725C11.5789 3.73353 11.6667 3.94549 11.6667 4.1665V4.99984H8.33333V4.1665ZM13.3333 15.8332H6.66667C6.44565 15.8332 6.23369 15.7454 6.07741 15.5891C5.92113 15.4329 5.83333 15.2209 5.83333 14.9998V6.6665H14.1667V14.9998C14.1667 15.2209 14.0789 15.4329 13.9226 15.5891C13.7663 15.7454 13.5543 15.8332 13.3333 15.8332Z" fill="#30C894"></path>
                                                    <path d="M7.5 9.1665C7.279 9.1665 7.06704 9.2543 6.91076 9.41058C6.75448 9.56686 6.66667 9.77882 6.66667 9.99984C6.66667 10.2209 6.75448 10.4329 6.91076 10.5891C7.06704 10.7454 7.279 10.8332 7.5 10.8332H12.5C12.721 10.8332 12.933 10.7454 13.0892 10.5891C13.2455 10.4329 13.3333 10.2209 13.3333 9.99984C13.3333 9.77882 13.2455 9.56686 13.0892 9.41058C12.933 9.2543 12.721 9.1665 12.5 9.1665H7.5Z" fill="#30C894"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Kinhnghiem;