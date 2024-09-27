import React, { useState, useEffect } from 'react';
import { Form, Select, Input } from 'antd';
import axios from 'axios';

const { Option } = Select;

function Diachilienhe({ form }) {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    useEffect(() => {
        fetchProvinces();
    }, []);

    const fetchProvinces = async () => {
        try {
            const response = await axios.get('https://raw.githubusercontent.com/sunrise1002/hanhchinhVN/refs/heads/master/dist/tree.json');
            if (response.data && typeof response.data === 'object') {
                setProvinces(Object.entries(response.data));
            } else {
                console.error('Invalid data format received from API');
                setProvinces([]);
            }
        } catch (error) {
            console.error('Error fetching provinces:', error);
            setProvinces([]);
        }
    };

    const onProvinceChange = (value) => {
        const selectedProv = provinces.find(([code]) => code === value);
        if (selectedProv) {
            setSelectedProvince(selectedProv[1]);
            setDistricts(Object.entries(selectedProv[1]['quan-huyen']));
            setWards([]);
            form.setFieldsValue({ district: undefined, ward: undefined });
        }
    };

    const onDistrictChange = (value) => {
        const selectedDist = districts.find(([code]) => code === value);
        if (selectedDist) {
            setSelectedDistrict(selectedDist[1]);
            setWards(Object.entries(selectedDist[1]['xa-phuong']));
            form.setFieldsValue({ ward: undefined });
        }
    };

    return (
        <>
            <h2 className="apply-form__group-name">Địa chỉ liên hệ</h2>
            <div className="apply-form__group-body row no-gutters">
                <div className="apply-form__control col-12 p-0">
                    <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                        <Form.Item name="province" label="Tỉnh/thành phố" rules={[{ required: true, message: 'Vui lòng chọn tỉnh/thành phố' }]}>
                            <Select onChange={onProvinceChange} size='large' placeholder="Chọn tỉnh/thành phố" showSearch>
                                {provinces.map(([code, province]) => (
                                    <Option key={code} value={code}>{province.name}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
                </div>
                <div className="apply-form__control col-12 col-lg-6 p-0 pr-12px pr-mb-0">
                    <div className="apply-form__control col-12 p-0">
                        <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                            <Form.Item name="district" label="Quận/huyện" rules={[{ required: true, message: 'Vui lòng chọn quận/huyện' }]}>
                                <Select onChange={onDistrictChange} disabled={!selectedProvince} size='large' placeholder="Chọn quận/huyện" showSearch>
                                    {districts.map(([code, district]) => (
                                        <Option key={code} value={code}>{district.name}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="apply-form__control col-12 col-lg-6 p-0 pr-12px pr-mb-0">
                    <div className="apply-form__control col-12 p-0">
                        <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                            <Form.Item name="ward" label="Phường/xã" rules={[{ required: true, message: 'Vui lòng chọn phường/xã' }]}>
                                <Select disabled={!selectedDistrict} size='large' placeholder="Chọn phường/xã" showSearch>
                                    {wards.map(([code, ward]) => (
                                        <Option key={code} value={code}>{ward.name}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="apply-form__control col-12 p-0">
                    <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                        <Form.Item name="address" label="Địa chỉ" rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}>
                            <Input size='large' placeholder='Nhập số nhà, tên đường...' />
                        </Form.Item>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Diachilienhe;