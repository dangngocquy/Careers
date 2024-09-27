import React, { useState } from 'react';
import { Form, Input, DatePicker, Upload, Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function Thongtincanhan({ form }) {
    const [activeGender, setActiveGender] = useState('Nam');
    const [fileList, setFileList] = useState([]);

    const handleGenderChange = (e) => {
        const value = e.target.value;
        setActiveGender(value);
        form.setFieldsValue({ gender: value });
    };

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Tải lên</div>
        </div>
    );

    return (
        <>
            <h2 className="apply-form__group-name">Thông tin cá nhân</h2>
            <div className="apply-form__group-body row no-gutters">
                <div className="apply-form__control col-12 p-0">
                    <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                        <Form.Item name="fullName" rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]} label="Họ và tên">
                            <Input size='large' placeholder='Nhập họ tên' />
                        </Form.Item>
                    </div>
                </div>
                <div className="apply-form__control col-12 p-0">
                    <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                        <Form.Item name="birthDate" rules={[{ required: true, message: 'Vui lòng chọn ngày sinh' }]} label="Ngày sinh">
                            <DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} placeholder='DD/MM/YYYY' size='large' />
                        </Form.Item>
                    </div>
                </div>
                <div className="apply-form__control col-12 p-0">
                    <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                        <Form.Item name="idNumber" label="CMND/CCCD" rules={[{ required: true, message: 'Vui lòng nhập số CMND/CCCD' }]}>
                            <Input size='large' placeholder='Nhập số CMND/CCCD' />
                        </Form.Item>
                    </div>
                </div>
                <div className="apply-form__control col-12 p-0">
                    <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                        <Form.Item name="phone" label="Điện thoại" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}>
                            <Input size='large' placeholder='Nhập số điện thoại' />
                        </Form.Item>
                    </div>
                </div>
                <div className="apply-form__control col-12 p-0">
                    <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                        <Form.Item name="email" label="Email (Bạn vui lòng nhập email để nhận kết quả phỏng vấn)" rules={[{ type: 'email', message: 'Email không hợp lệ' }]}>
                            <Input size='large' placeholder='Nhập email' />
                        </Form.Item>
                    </div>
                </div>
                <div className="apply-form__control col-12 col-lg-6 p-0 pr-12px pr-mb-0">
                    <Form.Item name="gender" label="Giới tính">
                        <div className="row no-gutters">
                            <div className="col-6 p-0 pr-4px">
                                <div className={`custom-radio__container ${activeGender === 'Nam' ? 'custom-radio__container--active' : ''}`}>
                                    <Radio.Group onChange={handleGenderChange} value={activeGender}>
                                        <Radio value="Nam" style={{ padding: '9px' }} >
                                            <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Nam</span>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className="col-6 p-0 pl-4px">
                                <div className={`custom-radio__container ${activeGender === 'Nữ' ? 'custom-radio__container--active' : ''}`}>
                                    <Radio.Group onChange={handleGenderChange} value={activeGender}>
                                        <Radio value="Nữ" style={{ padding: '9px' }}>
                                            <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Nữ</span>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Form.Item>
                </div>
                <div className="apply-form__control col-12 p-0">
                    <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                        <Form.Item name="height" label="Chiều cao (cm)" rules={[{ required: true, message: 'Vui lòng nhập chiều cao' }]}>
                            <Input size='large' type="number" min={1} addonAfter='cm' />
                        </Form.Item>
                    </div>
                </div>
                <div className="apply-form__control col-12 p-0">
                    <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                        <Form.Item name="weight" label="Cân nặng (kg)" rules={[{ required: true, message: 'Vui lòng nhập cân nặng' }]}>
                            <Input size='large' type="number" min={1} addonAfter='kg' />
                        </Form.Item>
                    </div>
                </div>
                <div className="apply-form__control col-12 p-0">
                    <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                        <Form.Item
                            name="avatar"
                            label="Ảnh chân dung"
                            extra="(*) Ảnh rõ mặt, không chỉnh sửa. Hỗ trợ định dạng *.png,*.jpg và tối đa 5MB."
                        >
                            <Upload
                                listType="picture-circle"
                                fileList={fileList}
                                onChange={handleChange}
                                beforeUpload={() => false}
                            >
                                {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                        </Form.Item>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Thongtincanhan;