import React from 'react'
import { Input } from 'antd';

function Tracuu() {
    return (
        <div className="job-result__container ">
            <div className="job-result__wapper">
                <div className="job-result-search__header">
                    <h1 className="job-result__title">Tra cứu kết quả ứng tuyển</h1>
                    <div className="job-result__sub-title">Anh/chị vui lòng nhập số CMND/CCCD hoặc Số điện thoại để tra cứu kết quả ứng tuyển </div>
                </div>
                <div className="job-result-search__form">
                <div className="job-result-form__control col-12 p-0">
                        <div className="input-title">CMND/CCCD</div>
                        <Input
                            placeholder="Nhập số CMND/CCCD"
                            autoComplete="off"
                            className="job-result-input"
                            size='large'
                        />
                    </div>
                    <div className="job-result-form__control col-12 p-0">
                        <div className="input-title">Số điện thoại</div>
                        <Input
                            placeholder="Nhập số điện thoại"
                            autoComplete="off"
                            className="job-result-input"
                            size='large'
                        />
                    </div>
                    <div className="job-result-form__btn-submit">Tra cứu kết quả</div>
                </div>
            </div>
        </div>
    );
}

export default Tracuu;
