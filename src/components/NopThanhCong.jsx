import React from 'react'

function Nopthanhcong({ Congviec }) {
    return (
        <div className="apply-form__container ">
            <div className="apply-form__wapper">
                <div className="apply-form__success-container">
                    <div className="apply-form__success-body">
                        <div className="apply-form__success-icon">
                            <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 10L4 28.001V62H60V28.001L32 10Z" fill="#CA4E4A" />
                                <path d="M16 0C14.465 0 12.929 0.586 11.758 1.758C10.586 2.929 10 4.465 10 6V49H54V0H16Z" fill="#EFF4F7" />
                                <path d="M54 0H16C19.313 0 22 2.686 22 6H60C60 2.686 57.313 0 54 0Z" fill="#CFD3D6" />
                                <path d="M32 47L4 28.001V62H60V28.001L32 47Z" fill="#FD817D" />
                                <path d="M4 62H60L32 44L4 62Z" fill="#FC625D" />
                                <path d="M60 62C60 62.512 59.805 63.023 59.414 63.414C59.023 63.805 58.512 64 58 64H6C5.488 64 4.977 63.805 4.586 63.414C4.195 63.023 4 62.512 4 62H60Z" fill="#FC625D" />
                                <path d="M25.0325 13.4074C24.9628 13.3371 24.8798 13.2813 24.7884 13.2432C24.697 13.2052 24.599 13.1855 24.5 13.1855C24.401 13.1855 24.303 13.2052 24.2116 13.2432C24.1202 13.2813 24.0372 13.3371 23.9675 13.4074L18.38 19.0024L16.0325 16.6474C15.9601 16.5775 15.8746 16.5225 15.781 16.4856C15.6874 16.4487 15.5874 16.4306 15.4867 16.4323C15.3861 16.4341 15.2868 16.4556 15.1945 16.4957C15.1022 16.5358 15.0187 16.5938 14.9487 16.6661C14.8788 16.7385 14.8238 16.824 14.7869 16.9176C14.75 17.0113 14.7319 17.1113 14.7337 17.2119C14.7354 17.3125 14.757 17.4118 14.7971 17.5042C14.8372 17.5965 14.8951 17.68 14.9675 17.7499L17.8475 20.6299C17.9172 20.7002 18.0002 20.756 18.0916 20.7941C18.183 20.8321 18.281 20.8517 18.38 20.8517C18.479 20.8517 18.577 20.8321 18.6684 20.7941C18.7598 20.756 18.8428 20.7002 18.9125 20.6299L25.0325 14.5099C25.1086 14.4397 25.1694 14.3544 25.2109 14.2596C25.2525 14.1647 25.2739 14.0622 25.2739 13.9586C25.2739 13.8551 25.2525 13.7526 25.2109 13.6577C25.1694 13.5629 25.1086 13.4776 25.0325 13.4074Z" fill="#26A076" />
                                <path d="M30 11H50" stroke="#CFD3D6" strokeWidth={2} strokeMiterlimit={10} />
                                <path d="M30 15H50" stroke="#CFD3D6" strokeWidth={2} strokeMiterlimit={10} />
                                <path d="M30 19H50" stroke="#CFD3D6" strokeWidth={2} strokeMiterlimit={10} />
                                <path d="M30 23H50" stroke="#CFD3D6" strokeWidth={2} strokeMiterlimit={10} />
                                <path d="M14 27H50" stroke="#CFD3D6" strokeWidth={2} strokeMiterlimit={10} />
                                <path d="M14 31H50" stroke="#CFD3D6" strokeWidth={2} strokeMiterlimit={10} />
                                <path d="M22 35H42" stroke="#CFD3D6" strokeWidth={2} strokeMiterlimit={10} />
                            </svg>
                        </div>
                        <div className="apply-form__success-title">Bạn đã nộp hồ sơ ứng tuyển cho vị trí {Congviec}</div>
                        <div />
                        <div className="apply-form__success-btn-other" onClick={() => window.location.href = `/`}>Xem các vị trí khác</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nopthanhcong;
