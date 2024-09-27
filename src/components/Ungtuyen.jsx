import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../config';
import { Form, Button } from 'antd';
import Loading from './Loading';
import NotFound from './NotFound';
import Nopthanhcong from './NopThanhCong';
import Thongtincanhan from './NewCV/Thongtincanhan';
import Diachilienhe from './NewCV/Diachilienhe';
import Nguyenvong from './NewCV/Nguyenvong';
import Kinhnghiem from './NewCV/Kinhnghiem';
import { toast } from 'react-toastify';

function Ungtuyen() {
    const { title } = useParams();
    const [form] = Form.useForm();
    const [jobData, setJobData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);


    const fetchJobData = useCallback(async () => {
        try {
            const jobsRef = collection(db, 'jobs');
            const q = query(jobsRef, where('title', '==', title));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setJobData(querySnapshot.docs[0].data());
            } else {
                setError(<NotFound />);
            }
        } catch (err) {
            setError('Error fetching job data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [title]);

    useEffect(() => {
        fetchJobData();
    }, [fetchJobData]);

    const onFinish = async () => {
        setSubmitting(true);
        try {
            const formValues = await form.validateFields();

            if (!formValues.fullName || !formValues.email || !formValues.phone) {
                toast.error('Vui lòng điền đầy đủ thông tin bắt buộc!');
                setSubmitting(false);
                return;
            }

            let avatarUrl = null;
            if (formValues.avatar && formValues.avatar.length > 0 && formValues.avatar[0].response) {
                avatarUrl = formValues.avatar[0].response.url;
            }

            const formattedValues = {
                ...formValues,
                birthDate: formValues.birthDate ? formValues.birthDate.toDate() : null,
                avatar: avatarUrl,
                Vitriungtuyen: jobData.title,
                appliedAt: new Date(),
            };

            Object.keys(formattedValues).forEach(key =>
                (formattedValues[key] === undefined || formattedValues[key] === null) && delete formattedValues[key]
            );

            await addDoc(collection(db, 'CV'), formattedValues);
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting application:', error);
            toast.error('Có lỗi xảy ra khi nộp hồ sơ. Vui lòng thử lại.');
        } finally {
            setSubmitting(false);
        }
    };


    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;
    if (!jobData) return <NotFound />;
    if (submitted) return <Nopthanhcong Congviec={jobData.title} />;

    return (
        <div className="apply-form__container">
            <div className="apply-form__wapper">
                <div className="apply-form__body">
                    <div className="apply-form__main">
                        <h1 className="apply-form__title">Thông tin ứng tuyển</h1>
                        <Form form={form} layout="vertical" onFinish={onFinish}>
                            <Thongtincanhan form={form} />
                            <Diachilienhe
                                form={form}
                            />
                            {/* đang lỗi */}
                            <Kinhnghiem form={form} />
                            {/* đang lỗi */}
                            <Nguyenvong form={form} />
                            <div className='apply-form__btn-submit-container'>
                                <div className='apply-form__btn-apply'>
                                    <Form.Item>
                                        <Button
                                            type='link'
                                            htmlType="submit"
                                            style={{ width: '100%', color: '#ffffff', fontWeight: '600' }}
                                            disabled={submitting}
                                            loading={submitting}
                                        >
                                            Nộp hồ sơ
                                        </Button>
                                    </Form.Item>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="apply-form__apply-container">
                    <div className="apply-form__apply-wapper">
                        <div className="job-detail__name-apply">{jobData.title}</div>
                        <div className="apply-form__apply-info">
                            <span className="mr-2">
                                h
                            </span>
                            <span>{jobData.salary}</span>
                        </div>
                        <div className="apply-form__apply-info">
                            <span className="mr-2">
                                h
                            </span>
                            <span>
                                {jobData.locations.slice().reverse().map((location, index) => {
                                    const [city, district] = location.split(' (');
                                    return (
                                        <span key={index}>
                                            <b>{city}</b>
                                            {district && ` (${district.slice(0, -1)})`}
                                            {index < jobData.locations.length - 1 ? ', ' : ''}
                                        </span>
                                    );
                                })}
                            </span>
                        </div>
                        <div className="apply-form__apply-info">
                            <span className="mr-2">
                                h
                            </span>
                            <span>Hạn nộp {jobData.deadline}</span>
                        </div>
                        <div className="apply-form__btn-apply" onClick={() => window.location.href = `/viec-lam-${jobData.workBlock ? 'cua-hang' : 'van-phong'}/${jobData.workBlock}/${jobData.title}`}>Xem chi tiết công việc</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ungtuyen;