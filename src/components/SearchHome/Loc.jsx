import React, { useState, useRef, useEffect } from 'react';

const JobSearch = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('Tất cả');
    const [isLocationDrawerOpen, setIsLocationDrawerOpen] = useState(false);
    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
    const [selectedStore, setSelectedStore] = useState('Tất cả');
    const dropdownRef = useRef(null);
    const locationRef = useRef(null);

    const toggleDropdown = () => {
        if (window.innerWidth > 768) {
            setIsDropdownOpen(!isDropdownOpen);
        } else {
            setIsLocationDrawerOpen(!isLocationDrawerOpen);
        }
    };

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setIsDropdownOpen(false);
        setIsLocationDrawerOpen(false);
    };

    const handleStoreSelect = (store) => {
        setSelectedStore(store);
        setIsFilterDrawerOpen(false);
    };

    useEffect(() => {
        const dropdown = dropdownRef.current;
        const locationElement = locationRef.current;

        const updateDropdownPosition = () => {
            if (window.innerWidth > 768 && dropdown && locationElement) {
                const rect = locationElement.getBoundingClientRect();
                dropdown.style.position = 'fixed';
                dropdown.style.top = `${rect.bottom}px`;
                dropdown.style.left = `${rect.left}px`;
                dropdown.style.width = `${rect.width}px`;
            }
        };

        if (dropdown && locationElement) {
            if (isDropdownOpen && window.innerWidth > 768) {
                dropdown.style.display = 'block';
                updateDropdownPosition();
                setTimeout(() => {
                    dropdown.style.opacity = '1';
                    dropdown.style.transform = 'translateY(9px)';
                }, 10);
            } else {
                dropdown.style.opacity = '0';
                dropdown.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    dropdown.style.display = 'none';
                }, 300);
            }

            window.addEventListener('resize', updateDropdownPosition);
            return () => {
                window.removeEventListener('resize', updateDropdownPosition);
            };
        }
    }, [isDropdownOpen]);

    const locations = ['Tất cả', 'Thành phố Hà Nội', 'Tỉnh Bắc Ninh', 'Thành phố Hải Phòng', 'Tỉnh Hưng Yên', 'Tỉnh Thanh Hóa', 'Tỉnh Nghệ An', 'Tỉnh Thừa Thiên Huế', 'Thành phố Đà Nẵng', 'Tỉnh Khánh Hòa', 'Tỉnh Tây Ninh', 'Tỉnh Bình Dương', 'Tỉnh Đồng Nai', 'Tỉnh Bà Rịa - Vũng Tàu', 'Thành phố Hồ Chí Minh', 'Tỉnh Tiền Giang', 'Tỉnh Kiên Giang', 'Thành phố Cần Thơ'];
    const stores = ['Tất cả', 'Cửa hàng 1', 'Cửa hàng 2', 'Cửa hàng 3'];

    return (
        <>
            <div className="job-list__search">
                <div className="job-list__search-box mb-hidden" style={{ backgroundImage: 'url("/dist/ClientApp/assets/svg/_Pattern.svg")' }}>
                    <div data-cy="job-search-container">
                        <div className="main-job__search-container ">
                            <div className="main-job__search-wapper--backgound">
                                <div className="main-job__search-wapper">
                                    <div className="main-job__search-input">
                                        <div className="text-small">Bạn đang tìm kiếm</div>
                                        <input placeholder="Việc làm, vị trí ứng tuyển..." defaultValue="" />
                                    </div>
                                    <div className="main-job__search-address" onClick={toggleDropdown} ref={locationRef}>
                                        <div className="mr-2">
                                            <div className="text-small">Nơi bạn muốn làm việc</div>
                                            <div><span>{selectedLocation}</span></div>
                                        </div>
                                        <span>
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 9.70504L16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504Z" fill="#9E9E9E" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="main-job__search-btn-box">
                                        <div className="main-job__search-btn" style={{ background: '#ae8f3d', color: 'rgb(255, 255, 255)' }}>
                                            <span className="mr-2">
                                                <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.0918 16.9084L15.0002 13.8417C16.2002 12.3454 16.7814 10.4461 16.6242 8.53446C16.4669 6.62279 15.5832 4.84403 14.1548 3.56391C12.7263 2.2838 10.8617 1.59963 8.94427 1.6521C7.02686 1.70457 5.20243 2.48968 3.84612 3.84599C2.4898 5.20231 1.70469 7.02674 1.65222 8.94414C1.59976 10.8615 2.28392 12.7262 3.56403 14.1546C4.84415 15.5831 6.62292 16.4668 8.53458 16.6241C10.4462 16.7813 12.3455 16.2001 13.8418 15L16.9085 18.0667C16.986 18.1448 17.0781 18.2068 17.1797 18.2491C17.2812 18.2914 17.3902 18.3132 17.5002 18.3132C17.6102 18.3132 17.7191 18.2914 17.8206 18.2491C17.9222 18.2068 18.0144 18.1448 18.0918 18.0667C18.242 17.9113 18.326 17.7037 18.326 17.4875C18.326 17.2714 18.242 17.0638 18.0918 16.9084ZM9.16683 15C8.01311 15 6.88529 14.6579 5.926 14.0169C4.96672 13.376 4.21904 12.4649 3.77753 11.399C3.33602 10.3331 3.2205 9.16024 3.44558 8.02868C3.67066 6.89713 4.22624 5.85773 5.04204 5.04192C5.85785 4.22611 6.89725 3.67054 8.0288 3.44546C9.16036 3.22038 10.3332 3.3359 11.3992 3.77741C12.4651 4.21892 13.3761 4.9666 14.0171 5.92588C14.658 6.88517 15.0002 8.01298 15.0002 9.16671C15.0002 10.7138 14.3856 12.1975 13.2916 13.2915C12.1977 14.3855 10.7139 15 9.16683 15Z" fill="white" />
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
                <div className="job-list__search-box-mb">
                    <div className="job-list__search-input-mb"><input placeholder="Việc làm, vị trí ứng..." defaultValue="" /></div>
                    <div className="job-list__search-select-mb" onClick={toggleDropdown}>
                        <div className="job-list__search-select-mb-value text-ellipsis">{selectedLocation}</div>
                        <span>
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 9.70504L16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504Z" fill="#9E9E9E" />
                            </svg>
                        </span>
                    </div>
                    <div className="job-list__search-filter-mb" onClick={() => setIsFilterDrawerOpen(true)}>
                        <span>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.2725 8C10.2725 7.44772 10.7202 7 11.2725 7L22.2725 7C22.8247 7 23.2725 7.44772 23.2725 8C23.2725 8.55229 22.8247 9 22.2725 9L11.2725 9C10.7202 9 10.2725 8.55228 10.2725 8Z" fill="#141414" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.27246 17C1.27246 16.4477 1.72018 16 2.27246 16H13.2725C13.8247 16 14.2725 16.4477 14.2725 17C14.2725 17.5523 13.8247 18 13.2725 18H2.27246C1.72018 18 1.27246 17.5523 1.27246 17Z" fill="#141414" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.72727 6C3.77333 6 3 6.77333 3 7.72727C3 8.68122 3.77333 9.45455 4.72727 9.45455C5.68122 9.45455 6.45455 8.68122 6.45455 7.72727C6.45455 6.77333 5.68122 6 4.72727 6ZM1 7.72727C1 5.66876 2.66876 4 4.72727 4C6.78579 4 8.45455 5.66876 8.45455 7.72727C8.45455 9.78579 6.78579 11.4545 4.72727 11.4545C2.66876 11.4545 1 9.78579 1 7.72727Z" fill="#141414" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.9997 15C19.0458 15 18.2725 15.7733 18.2725 16.7273C18.2725 17.6812 19.0458 18.4545 19.9997 18.4545C20.9537 18.4545 21.727 17.6812 21.727 16.7273C21.727 15.7733 20.9537 15 19.9997 15ZM16.2725 16.7273C16.2725 14.6688 17.9412 13 19.9997 13C22.0582 13 23.727 14.6688 23.727 16.7273C23.727 18.7858 22.0582 20.4545 19.9997 20.4545C17.9412 20.4545 16.2725 18.7858 16.2725 16.7273Z" fill="#141414" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>

            {/* Desktop Dropdown */}
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
                {locations.map((location, index) => (
                    <div
                        key={index}
                        className={`custom-dropdown__item ${selectedLocation === location ? 'active' : ''}`}
                        onClick={() => handleLocationSelect(location)}
                    >
                        <span>{location}</span>
                    </div>
                ))}
            </div>

            {/* Location Drawer */}
            <div
                role="presentation"
                className={`MuiDrawer-root MuiDrawer-modal job-list__drawer-custom ${isLocationDrawerOpen ? 'open' : ''}`}
                style={{
                    position: 'fixed',
                    zIndex: 1300,
                    inset: '0px',
                    visibility: isLocationDrawerOpen ? 'visible' : 'hidden',
                    transition: 'visibility 0.3s'
                }}
            >
                <div
                    className="MuiBackdrop-root"
                    aria-hidden="true"
                    style={{
                        opacity: isLocationDrawerOpen ? 1 : 0,
                        transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onClick={() => setIsLocationDrawerOpen(false)}
                />
                <div tabIndex={0} data-test="sentinelStart" />
                <div
                    className="MuiPaper-root MuiDrawer-paper MuiDrawer-paperAnchorBottom MuiPaper-elevation16"
                    tabIndex={-1}
                    style={{
                        transform: `translateY(${isLocationDrawerOpen ? '0%' : '100%'})`,
                        transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1)',
                    }}
                >
                    <div className="job-list__drawer-container">
                        <div className="job-list__drawer-unit-container">
                            <div className="job-list__drawer-filter-store">
                                <div className="job-list__drawer-filter-title">
                                    <span>Chọn Tỉnh/Thành phố</span>
                                </div>
                                <div className="job-list__drawer-filter-list">
                                    {locations.map((location, index) => (
                                        <div
                                            key={index}
                                            className={`job-list__filter-item ${selectedLocation === location ? 'active' : ''}`}
                                            onClick={() => handleLocationSelect(location)}
                                        >
                                            {location}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div tabIndex={0} data-test="sentinelEnd" />
            </div>

            {/* Filter Drawer */}
            <div
                role="presentation"
                className={`MuiDrawer-root MuiDrawer-modal job-list__drawer-custom ${isFilterDrawerOpen ? 'open' : ''}`}
                style={{
                    position: 'fixed',
                    zIndex: 1300,
                    inset: '0px',
                    visibility: isFilterDrawerOpen ? 'visible' : 'hidden',
                    transition: 'visibility 0.3s'
                }}
            >
                <div
                    className="MuiBackdrop-root"
                    aria-hidden="true"
                    style={{
                        opacity: isFilterDrawerOpen ? 1 : 0,
                        transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onClick={() => setIsFilterDrawerOpen(false)}
                />
                <div tabIndex={0} data-test="sentinelStart" />
                <div
                    className="MuiPaper-root MuiDrawer-paper MuiDrawer-paperAnchorBottom MuiPaper-elevation16"
                    tabIndex={-1}
                    style={{
                        transform: `translateY(${isFilterDrawerOpen ? '0%' : '100%'})`,
                        transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1)',
                    }}
                >
                    <div className="job-list__drawer-container">
                        <div className="job-list__drawer-unit-container">
                            <div className="job-list__drawer-filter-store">
                                <div className="job-list__drawer-filter-title">
                                    <span>Chọn Tỉnh/Thành phố</span>
                                </div>
                                <div className="job-list__drawer-filter-list">
                                    {stores.map((store, index) => (
                                        <div
                                            key={index}
                                            className={`job-list__filter-item ${selectedStore === store ? 'active' : ''}`}
                                            onClick={() => handleStoreSelect(store)}
                                        >
                                            {store}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div tabIndex={0} data-test="sentinelEnd" />
            </div>
        </>
    );
};

export default JobSearch;