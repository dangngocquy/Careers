import React, { useState, useRef, useEffect } from 'react';

const SearchHome = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('Tất cả');
    const dropdownRef = useRef(null);
    const locationRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const dropdown = dropdownRef.current;
        const locationElement = locationRef.current;

        const updateDropdownPosition = () => {
            const rect = locationElement.getBoundingClientRect();
            dropdown.style.position = 'fixed';
            dropdown.style.top = `${rect.bottom}px`;
            dropdown.style.left = `${rect.left}px`;
            dropdown.style.width = `${rect.width}px`;
        };

        if (dropdown && locationElement) {
            if (isDropdownOpen) {
                dropdown.style.display = 'block';
                updateDropdownPosition();
                setTimeout(() => {
                    dropdown.style.opacity = '1';
                    dropdown.style.transform = 'translateY(9px)';
                }, 10);
                document.body.style.overflowY = 'scroll';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
            } else {
                dropdown.style.opacity = '0';
                dropdown.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    dropdown.style.display = 'none';
                }, 300);
                document.body.style.position = '';
                document.body.style.overflowY = '';
            }

            window.addEventListener('resize', updateDropdownPosition);
            return () => {
                window.removeEventListener('resize', updateDropdownPosition);
                document.body.style.position = '';
                document.body.style.overflowY = '';
            };
        }
    }, [isDropdownOpen]);


    return (
        <>
                        <div className="search-container">
                            <div className="search-box" data-cy="search-container">
                                <div className="main-job__search-container">
                                    <div className="main-job__search-wapper--backgound">
                                        <div className="main-job__search-wapper">
                                            <div className="main-job__search-input">
                                                <div className="text-small">Bạn đang tìm kiếm</div>
                                                <input placeholder="Việc làm, vị trí ứng tuyển..." value="" />
                                            </div>
                                            <div className="main-job__search-address" onClick={toggleDropdown} ref={locationRef}>
                                                <div className="mr-2">
                                                    <div className="text-small">Nơi bạn muốn làm việc</div>
                                                    <div><span>{selectedLocation}</span></div>
                                                </div>
                                                <span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18 9.70504L16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504Z" fill="#9E9E9E"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="main-job__search-btn-box">
                                                <div className="main-job__search-btn" style={{ background: 'rgb(174, 143, 61)', color: 'rgb(255, 255, 255)' }}>
                                                    <span className="mr-2">
                                                        <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18.0918 16.9084L15.0002 13.8417C16.2002 12.3454 16.7814 10.4461 16.6242 8.53446C16.4669 6.62279 15.5832 4.84403 14.1548 3.56391C12.7263 2.2838 10.8617 1.59963 8.94427 1.6521C7.02686 1.70457 5.20243 2.48968 3.84612 3.84599C2.4898 5.20231 1.70469 7.02674 1.65222 8.94414C1.59976 10.8615 2.28392 12.7262 3.56403 14.1546C4.84415 15.5831 6.62292 16.4668 8.53458 16.6241C10.4462 16.7813 12.3455 16.2001 13.8418 15L16.9085 18.0667C16.986 18.1448 17.0781 18.2068 17.1797 18.2491C17.2812 18.2914 17.3902 18.3132 17.5002 18.3132C17.6102 18.3132 17.7191 18.2914 17.8206 18.2491C17.9222 18.2068 18.0144 18.1448 18.0918 18.0667C18.242 17.9113 18.326 17.7037 18.326 17.4875C18.326 17.2714 18.242 17.0638 18.0918 16.9084ZM9.16683 15C8.01311 15 6.88529 14.6579 5.926 14.0169C4.96672 13.376 4.21904 12.4649 3.77753 11.399C3.33602 10.3331 3.2205 9.16024 3.44558 8.02868C3.67066 6.89713 4.22624 5.85773 5.04204 5.04192C5.85785 4.22611 6.89725 3.67054 8.0288 3.44546C9.16036 3.22038 10.3332 3.3359 11.3992 3.77741C12.4651 4.21892 13.3761 4.9666 14.0171 5.92588C14.658 6.88517 15.0002 8.01298 15.0002 9.16671C15.0002 10.7138 14.3856 12.1975 13.2916 13.2915C12.1977 14.3855 10.7139 15 9.16683 15Z" fill="white"></path>
                                                        </svg>
                                                    </span>
                                                    <span>Tìm kiếm</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            <div
                ref={dropdownRef}
                className="custom-dropdown__content"
                style={{
                    display: 'none',
                    opacity: 0,
                    transform: 'translateY(-20px)',
                    transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'absolute',
                    zIndex: 1000,
                    backgroundColor: 'white',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '4px',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    transformOrigin: '125px -9px'
                }}
            >
                <div className="custom-dropdown__search-container">
                    <div className="custom-dropdown__search-wapper">
                        <div className="custom-dropdown__search-icon">
                            <svg width="18px" height="18px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.0918 16.9084L15.0002 13.8417C16.2002 12.3454 16.7814 10.4461 16.6242 8.53446C16.4669 6.62279 15.5832 4.84403 14.1548 3.56391C12.7263 2.2838 10.8617 1.59963 8.94427 1.6521C7.02686 1.70457 5.20243 2.48968 3.84612 3.84599C2.4898 5.20231 1.70469 7.02674 1.65222 8.94414C1.59976 10.8615 2.28392 12.7262 3.56403 14.1546C4.84415 15.5831 6.62292 16.4668 8.53458 16.6241C10.4462 16.7813 12.3455 16.2001 13.8418 15L16.9085 18.0667C16.986 18.1448 17.0781 18.2068 17.1797 18.2491C17.2812 18.2914 17.3902 18.3132 17.5002 18.3132C17.6102 18.3132 17.7191 18.2914 17.8206 18.2491C17.9222 18.2068 18.0144 18.1448 18.0918 18.0667C18.242 17.9113 18.326 17.7037 18.326 17.4875C18.326 17.2714 18.242 17.0638 18.0918 16.9084ZM9.16683 15C8.01311 15 6.88529 14.6579 5.926 14.0169C4.96672 13.376 4.21904 12.4649 3.77753 11.399C3.33602 10.3331 3.2205 9.16024 3.44558 8.02868C3.67066 6.89713 4.22624 5.85773 5.04204 5.04192C5.85785 4.22611 6.89725 3.67054 8.0288 3.44546C9.16036 3.22038 10.3332 3.3359 11.3992 3.77741C12.4651 4.21892 13.3761 4.9666 14.0171 5.92588C14.658 6.88517 15.0002 8.01298 15.0002 9.16671C15.0002 10.7138 14.3856 12.1975 13.2916 13.2915C12.1977 14.3855 10.7139 15 9.16683 15Z" fill="#545454" />
                            </svg>
                        </div>
                        <input className="custom-dropdown__input" placeholder="Tìm kiếm" />
                    </div>
                </div>
                {['Tất cả', 'Thành phố Hà Nội', 'Tỉnh Bắc Ninh', 'Thành phố Hải Phòng', 'Tỉnh Hưng Yên', 'Tỉnh Thanh Hóa', 'Tỉnh Nghệ An', 'Tỉnh Thừa Thiên Huế', 'Thành phố Đà Nẵng', 'Tỉnh Khánh Hòa', 'Tỉnh Tây Ninh', 'Tỉnh Bình Dương', 'Tỉnh Đồng Nai', 'Tỉnh Bà Rịa - Vũng Tàu', 'Thành phố Hồ Chí Minh', 'Tỉnh Tiền Giang', 'Tỉnh Kiên Giang', 'Thành phố Cần Thơ'].map((location, index) => (
                    <div
                        key={index}
                        className={`custom-dropdown__item ${selectedLocation === location ? 'active' : ''}`}
                        onClick={() => handleLocationSelect(location)}
                    >
                        <span>{location}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SearchHome;