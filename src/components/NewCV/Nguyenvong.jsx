import React, { useState } from 'react';
import { Form, Radio, Input } from 'antd';

function Nguyenvong({ form }) {
    const [activeShift, setActiveShift] = useState('Có');
    const [activeHoliday, setActiveHoliday] = useState('Có');
    const [activeWeekend, setActiveWeekend] = useState('Có');
    const [activeNight, setActiveNight] = useState('Có');

    const handleShiftChange = (e) => {
        const value = e.target.value;
        setActiveShift(value);
        form.setFieldsValue({ shift: value });
    };

    const handleHolidayChange = (e) => {
        const value = e.target.value;
        setActiveHoliday(value);
        form.setFieldsValue({ canWorkHolidays: value });
    };

    const handleWeekendChange = (e) => {
        const value = e.target.value;
        setActiveWeekend(value);
        form.setFieldsValue({ canWorkWeekends: value });
    };

    const handleNightChange = (e) => {
        const value = e.target.value;
        setActiveNight(value);
        form.setFieldsValue({ canWorkNights: value });
    };

    return (
        <>
            <h2 className="apply-form__group-name">Nguyện vọng làm việc của bạn</h2>
            <div className="apply-form__group-body row no-gutters">
                <div className="apply-form__control col-12 p-0">
                    <Form.Item name="expectedSalary" label="Thu nhập mong muốn (VND)" rules={[{ required: true, message: 'Vui lòng nhập thu nhập mong muốn' }]}>
                        <Input size='large' type="number" min={0} style={{ width: '100%' }} placeholder='Nhập thu nhập mong muốn' />
                    </Form.Item>
                </div>

                <div className="apply-form__control col-12 p-0">
                    <Form.Item name="shift" style={{ padding: 0 }} label="Bạn có sẵn sàng làm việc xoay ca không? (Ca sáng, ca tối)">
                        <div className="row no-gutters">
                            <div className="apply-form__control col-12 col-lg-6 p-0 pr-12px pr-mb-0">
                                <div className={`custom-radio__container ${activeShift === 'Có' ? 'custom-radio__container--active' : ''}`}>
                                    <Radio.Group onChange={handleShiftChange} value={activeShift}>
                                        <Radio value="Có" style={{ padding: '9px' }}>
                                            <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Có</span>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className="apply-form__control mt-0 mt-mb-10px col-12 col-lg-6 p-0 pl-12px pl-mb-0">
                                <div className={`custom-radio__container ${activeShift === 'Không' ? 'custom-radio__container--active' : ''}`}>
                                    <Radio.Group onChange={handleShiftChange} value={activeShift}>
                                        <Radio value="Không" style={{ padding: '9px' }}>
                                            <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Không</span>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Form.Item>
                </div>

                <div className="apply-form__control col-12 p-0">
                    <Form.Item name="canWorkHolidays" style={{ padding: 0 }} label="Bạn có thể làm việc vào các ngày Lễ/Tết không?">
                        <div className="row no-gutters">
                            <div className="apply-form__control col-12 col-lg-6 p-0 pr-12px pr-mb-0">
                                <div className={`custom-radio__container ${activeHoliday === 'Có' ? 'custom-radio__container--active' : ''}`}>
                                    <Radio.Group onChange={handleHolidayChange} value={activeHoliday}>
                                        <Radio value="Có" style={{ padding: '9px' }}>
                                            <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Có</span>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className="apply-form__control mt-0 mt-mb-10px col-12 col-lg-6 p-0 pl-12px pl-mb-0">
                                <div className={`custom-radio__container ${activeHoliday === 'Không' ? 'custom-radio__container--active' : ''}`}>
                                    <Radio.Group onChange={handleHolidayChange} value={activeHoliday}>
                                        <Radio value="Không" style={{ padding: '9px' }}>
                                            <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Không</span>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Form.Item>
                </div>

                <div className="apply-form__control col-12 p-0">
                    <Form.Item name="canWorkWeekends" style={{ padding: 0 }} label="Bạn có sẵn sàng làm việc cuối tuần không?">
                        <div className="row no-gutters">
                            <div className="apply-form__control col-12 col-lg-6 p-0 pr-12px pr-mb-0">
                                <div className={`custom-radio__container ${activeWeekend === 'Có' ? 'custom-radio__container--active' : ''}`}>
                                    <Radio.Group onChange={handleWeekendChange} value={activeWeekend}>
                                        <Radio value="Có" style={{ padding: '9px' }}>
                                            <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Có</span>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className="apply-form__control mt-0 mt-mb-10px col-12 col-lg-6 p-0 pl-12px pl-mb-0">
                                <div className={`custom-radio__container ${activeWeekend === 'Không' ? 'custom-radio__container--active' : ''}`}>
                                    <Radio.Group onChange={handleWeekendChange} value={activeWeekend}>
                                        <Radio value="Không" style={{ padding: '9px' }}>
                                            <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Không</span>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Form.Item>
                </div>

                <div className="apply-form__control col-12 p-0">
                    <Form.Item name="canWorkNights" style={{ padding: 0 }} label="Bạn có sẵn sàng làm việc ca tối không?">
                        <div className="row no-gutters">
                            <div className="apply-form__control col-12 col-lg-6 p-0 pr-12px pr-mb-0">
                                <div className={`custom-radio__container ${activeNight === 'Có' ? 'custom-radio__container--active' : ''}`}>
                                    <Radio.Group onChange={handleNightChange} value={activeNight}>
                                        <Radio value="Có" style={{ padding: '9px' }}>
                                            <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Có</span>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className="apply-form__control mt-0 mt-mb-10px col-12 col-lg-6 p-0 pl-12px pl-mb-0">
                                <div className={`custom-radio__container ${activeNight === 'Không' ? 'custom-radio__container--active' : ''}`}>
                                    <Radio.Group onChange={handleNightChange} value={activeNight}>
                                        <Radio value="Không" style={{ padding: '9px' }}>
                                            <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Không</span>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Form.Item>
                </div>
            </div>
        </>
    );
}

export default Nguyenvong;
