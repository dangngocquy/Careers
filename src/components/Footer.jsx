import React from 'react';

const Footer = () => {
    return (

        <div className="footer__container  false" style={{ color: 'rgb(255, 255, 255)', background: 'rgb(20, 20, 20)' }}>
            <div className="footer__wapper">
                <div className="footer__top">
                    <div className="footer__top-branch">
                        <div className="footer__top-item">
                            <div className="footer__address-title">Trụ sở chính tại Hồ Chí Minh</div>
                            <div className="footer__sub-info" style={{ color: 'rgb(255, 255, 255)' }}>204C Nguyễn Văn Hưởng, Thảo Điền, Quận 2, TP. Hồ Chí Minh</div>
                            <div className="footer__address-link" style={{ color: 'rgb(229, 121, 5)' }}>Xem bản đồ</div>
                            <div className="footer__sub-info" style={{ color: 'rgb(255, 255, 255)' }}>Số điện thoại tuyển dụng:
                                (012)3456789 - Ext: 066</div>
                            <div className="footer__sub-info" style={{ color: 'rgb(255, 255, 255)' }}>Email: tuyendung@niso.com.vn
                            </div>
                        </div>
                    </div>
                    <div className="footer__top-more"><a href="/viec-lam-cua-hang/store">Việc làm cửa hàng</a><a
                        href="/viec-lam-van-phong/office">Việc làm văn phòng</a><a href="/tra-cuu-ket-qua">Tra cứu kết quả</a>
                    </div>
                </div>
                <div className="footer__center">
                    <div className="footer__center-item img-niso"><img src="https://firebasestorage.googleapis.com/v0/b/nisosurvey-c32e4.appspot.com/o/CAREERS%2FArtboard%20610x.png?alt=media&token=4e1b10ae-397b-429f-ad54-14a33838c8fb" alt="Logo" /></div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottom-title" style={{ color: 'rgb(255, 255, 255)' }}>Theo dõi chúng tôi để nhận tin mới
                    </div>
                    <div className="footer__bottom-content">
                        <div className="footer__social-link"><img className="footer__social-img"
                            src="https://hrw.hstatic.net/200000000005/24/recruitment/997f7a5e46354fa8a246598710020302.png"
                            alt="icon link" /></div>
                        <div className="footer__social-link"><img className="footer__social-img"
                            src="https://hrw.hstatic.net/200000000005/24/recruitment/374c1b9b38414987997292ca992640ef.png"
                            alt="icon link" /></div>
                        <div className="footer__social-link"><img className="footer__social-img"
                            src="https://hrw.hstatic.net/200000000005/24/recruitment/4641de59157c49d0903e65c2dbf07a8d.png"
                            alt="icon link" /></div>
                        <div className="footer__social-link"><img className="footer__social-img"
                            src="https://hrw.hstatic.net/200000000005/24/recruitment/f581cb52aaad4f369be97ccfbd6d8fa2.png"
                            alt="icon link" /></div>
                    </div>
                </div>
            </div>
            <div className="footer-mb__wrapper">
                <div className="footer__tab">
                    <div className="footer__tab-item " onClick={() => window.location.href = 'viec-lam-cua-hang/store'}><span className="footer__tab-item-icon"><svg width="20px" height="20px"
                        viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.2503 6.33332L16.5837 2.16666C16.5003 1.83332 16.167 1.66666 15.8337 1.66666H4.16699C3.83366 1.66666 3.50033 1.83332 3.41699 2.16666L1.75033 6.33332C1.66699 6.41666 1.66699 6.58332 1.66699 6.66666C1.66699 7.83332 2.33366 8.91666 3.33366 9.49999V17.5C3.33366 18 3.66699 18.3333 4.16699 18.3333H15.8337C16.3337 18.3333 16.667 18 16.667 17.5V9.49999C17.667 8.91666 18.3337 7.83332 18.3337 6.66666C18.3337 6.58332 18.3337 6.41666 18.2503 6.33332ZM15.0003 16.6667H12.5003V12.5C12.5003 12 12.167 11.6667 11.667 11.6667H8.33366C7.83366 11.6667 7.50033 12 7.50033 12.5V16.6667H5.00033V9.99999C6.00033 9.99999 6.83366 9.58332 7.50033 8.83332C8.66699 10.25 10.7503 10.4167 12.167 9.16666C12.3337 9.08332 12.417 8.91666 12.5003 8.83332C13.167 9.58332 14.0003 9.99999 15.0003 9.99999V16.6667Z"
                            fill="currentColor"></path>
                    </svg></span>Việc làm cửa hàng</div>
                    <div className="footer__tab-item " onClick={() => window.location.href = '/viec-lam-van-phong/office'}><span className="footer__tab-item-icon"><svg width="20px" height="20px"
                        viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.0003 16.6667H17.167V2.49999C17.167 1.99999 16.8337 1.66666 16.3337 1.66666H4.66699C4.16699 1.66666 3.83366 1.99999 3.83366 2.49999V16.6667H3.00033C2.50033 16.6667 2.16699 17 2.16699 17.5C2.16699 18 2.50033 18.3333 3.00033 18.3333H18.0003C18.5003 18.3333 18.8337 18 18.8337 17.5C18.8337 17 18.5003 16.6667 18.0003 16.6667ZM8.00033 4.99999H8.83366C9.33366 4.99999 9.66699 5.33332 9.66699 5.83332C9.66699 6.33332 9.33366 6.66666 8.83366 6.66666H8.00033C7.50033 6.66666 7.16699 6.33332 7.16699 5.83332C7.16699 5.33332 7.50033 4.99999 8.00033 4.99999ZM7.16699 9.16666C7.16699 8.66666 7.50033 8.33332 8.00033 8.33332H8.83366C9.33366 8.33332 9.66699 8.66666 9.66699 9.16666C9.66699 9.66666 9.33366 9.99999 8.83366 9.99999H8.00033C7.50033 9.99999 7.16699 9.66666 7.16699 9.16666ZM13.0003 16.6667H8.00033V12.5C8.00033 12 8.33366 11.6667 8.83366 11.6667H12.167C12.667 11.6667 13.0003 12 13.0003 12.5V16.6667ZM13.0003 9.99999H12.167C11.667 9.99999 11.3337 9.66666 11.3337 9.16666C11.3337 8.66666 11.667 8.33332 12.167 8.33332H13.0003C13.5003 8.33332 13.8337 8.66666 13.8337 9.16666C13.8337 9.66666 13.5003 9.99999 13.0003 9.99999ZM13.0003 6.66666H12.167C11.667 6.66666 11.3337 6.33332 11.3337 5.83332C11.3337 5.33332 11.667 4.99999 12.167 4.99999H13.0003C13.5003 4.99999 13.8337 5.33332 13.8337 5.83332C13.8337 6.33332 13.5003 6.66666 13.0003 6.66666Z"
                            fill="currentColor"></path>
                    </svg></span>Việc làm văn phòng</div>
                    <div className="footer__tab-item "><span className="footer__tab-item-icon"><svg width="20px" height="20px"
                        viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.0918 16.9084L15.0002 13.8417C16.2002 12.3454 16.7814 10.4461 16.6242 8.53446C16.4669 6.62279 15.5832 4.84403 14.1548 3.56391C12.7263 2.2838 10.8617 1.59963 8.94427 1.6521C7.02686 1.70457 5.20243 2.48968 3.84612 3.84599C2.4898 5.20231 1.70469 7.02674 1.65222 8.94414C1.59976 10.8615 2.28392 12.7262 3.56403 14.1546C4.84415 15.5831 6.62292 16.4668 8.53458 16.6241C10.4462 16.7813 12.3455 16.2001 13.8418 15L16.9085 18.0667C16.986 18.1448 17.0781 18.2068 17.1797 18.2491C17.2812 18.2914 17.3902 18.3132 17.5002 18.3132C17.6102 18.3132 17.7191 18.2914 17.8206 18.2491C17.9222 18.2068 18.0144 18.1448 18.0918 18.0667C18.242 17.9113 18.326 17.7037 18.326 17.4875C18.326 17.2714 18.242 17.0638 18.0918 16.9084ZM9.16683 15C8.01311 15 6.88529 14.6579 5.926 14.0169C4.96672 13.376 4.21904 12.4649 3.77753 11.399C3.33602 10.3331 3.2205 9.16024 3.44558 8.02868C3.67066 6.89713 4.22624 5.85773 5.04204 5.04192C5.85785 4.22611 6.89725 3.67054 8.0288 3.44546C9.16036 3.22038 10.3332 3.3359 11.3992 3.77741C12.4651 4.21892 13.3761 4.9666 14.0171 5.92588C14.658 6.88517 15.0002 8.01298 15.0002 9.16671C15.0002 10.7138 14.3856 12.1975 13.2916 13.2915C12.1977 14.3855 10.7139 15 9.16683 15Z"
                            fill="currentColor"></path>
                    </svg></span>Tra cứu kết quả</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;