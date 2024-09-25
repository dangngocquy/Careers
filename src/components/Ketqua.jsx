import React from 'react'

function Ketqua() {
    return (
        <div className="job-result__container ">
            <div className="job-result__wapper">
                <div className="application-result__container application-result__container--new">
                    <div className="application-result__header">
                        <h1 className="job-result__title">Kết quả ứng tuyển</h1>
                        <div className="application-result__sub-title">Hồ sơ ứng tuyển của bạn vẫn đang trong quá trình tuyển dụng. Bộ phận tuyển dụng sẽ liên hệ với bạn trong thời gian sớm nhất. Chúc bạn một ngày tốt lành!</div>
                    </div>
                    <div className="application-result__info">
                        <div className="application-result__info-detail application-result__info-detail--name">
                            <div className="application-result__info-name">Tên ứng viên</div>
                            <div className="application-result__info-content">Đặng Ngọc Quý</div>
                        </div>
                        <div className="application-result__info-detail">
                            <div className="application-result__info-name">CMND/CCCD</div>
                            <div className="application-result__info-content">075200022566</div>
                        </div>
                        <div className="application-result__info-detail">
                            <div className="application-result__info-name">Số điện thoại</div>
                            <div className="application-result__info-content">0582941486</div>
                        </div>
                    </div>
                    <div className="application-result__body">
                        <div className="application-result__body-title">Lịch sử ứng tuyển</div>
                        <div className="application-result__table mb-hidden">
                            <div className="application-result__table-header">
                                <div className="col-3 p-0 application-result__table-header-item">Vị trí ứng tuyển</div>
                                <div className="col-3 p-0 application-result__table-header-item">Ngày ứng tuyển</div>
                                <div className="col-3 p-0 application-result__table-header-item">Vòng tuyển dụng</div>
                                <div className="col-3 p-0 application-result__table-header-item">Kết quả</div>
                            </div>
                            <div className="application-result__table-body">
                                <div className="application-result__table-body-row">
                                    <div className="col-3 p-0 application-result__table-body-row-item job-name">Nhân viên Bảo trì - Lắp đặt Camera</div>
                                    <div className="col-3 p-0 application-result__table-body-row-item">15/04/2024</div>
                                    <div className="col-3 p-0 application-result__table-body-row-item">
                                        <ul className="rc-candidate-round onsite">
                                            <li className=" active round-status__progress"><span className="mr-2 rc-round-btn">1</span></li>
                                            <li className><span className="mr-2 rc-round-btn">2</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-3 p-0 application-result__table-body-row-item status">
                                        <div className="app-status__receive">Đã tiếp nhận</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-result__list">
                            <div className="application-result__list-item">
                                <div className="application-result__list-item-job-name">
                                    <div className="application-result__info-name">Việc làm ứng tuyển</div>
                                    <div className="application-result__info-content">Nhân viên Bảo trì - Lắp đặt Camera</div>
                                </div>
                                <div className="application-result__list-item-job-apply-date">
                                    <div className="application-result__info-name">Ngày ứng tuyển</div>
                                    <div className="application-result__info-content">15/04/2024</div>
                                </div>
                                <div className="application-result__list-item-job-status">
                                    <div className="application-result__info-name">Kết quả</div>
                                    <div className="app-status__receive">Đã tiếp nhận</div>
                                </div>
                                <div className="application-result__list-item-job-round">
                                    <div className="application-result__info-name">Vòng tuyển dụng</div>
                                    <div className="application-result__info-content">
                                        <ul className="rc-candidate-round large onsite">
                                            <li className=" active round-status__progress"><span className="mr-2 rc-round-btn">1</span></li>
                                            <li className><span className="mr-2 rc-round-btn">2</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="job-result-form__btn-more">Tra cứu kết quả khác</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Ketqua;