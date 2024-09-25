import React from 'react';
import './css/Home.css';
import SearchHome from './SearchHome/SearchHome';
import { useNavigate } from 'react-router-dom';
import Hot from './SearchHome/Hot';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <title>Tuyển dụng NISO</title>
            <div className="main-job__container">
                <div className="main-job__wapper" style={{ color: 'rgb(255, 255, 255)' }}>
                    <div className="main-job__wapper--backgound background_niso_null">
                        <SearchHome />
                        <Hot />
                    </div>
                </div>
            </div>
            {/* Body */}
            <div className="rc-grid__container "
                style={{ width: '100%', height: 'auto', background: 'rgb(250, 250, 250)', color: 'rgb(33, 33, 33)' }}>
                <div className="rc-grid__wapper">
                    <div className="unit-tag__container">
                        <div className="unit-tag__item-inside " style={{ color: 'rgb(255, 255, 255)', background: '#ae8f3d' }}>
                            <div className="unit-tag__image"><img
                                src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/444782268_766970705621006_6085544657706420616_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFdy9kJey_B8d8899JH9FrNClQy69uCdiAKVDLr24J2IOL0fTafl5_-_8nK1gQuEAPK4m0oebkwuhHueqd694-T&_nc_ohc=fJC5T7oBuPwQ7kNvgE5ylZX&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYB8IpnTNSrkp6lHd6wcsVR-IIVpb_ZP8_6B1OWOJ5SoCA&oe=66FA3F94"
                                alt="Ảnh khối tuyển dụng" width="100%" height="100%" /></div>
                            <div className="unit-tag__body">
                                <div className="unit-tag__title">Khối cửa hàng</div>
                                <div className="unit-tag__jobs">
                                    <div className="unit-tag__job-item text-ellipsis" title="Store Manager (Quản lý Cửa hàng)"
                                        style={{ color: '#ffffff' }}>Store Manager (Quản lý Cửa hàng)</div>
                                    <div className="unit-tag__job-item text-ellipsis" title="Giám sát ca" style={{ color: '#ffffff' }}>
                                        Giám sát ca</div>
                                    <div className="unit-tag__job-item text-ellipsis" title="Barista" style={{ color: '#ffffff' }}>
                                        Barista</div>
                                </div>
                                <div className="unit-tag__btn-more" onClick={() => navigate('/viec-lam-cua-hang')}>Xem tất cả công việc khối cửa hàng</div>
                            </div>
                        </div>
                    </div>
                    <div className="unit-tag__container">
                        <div className="unit-tag__item-inside " style={{ color: 'rgb(255, 255, 255)', background: '#8a6a16' }}>
                            <div className="unit-tag__image"><img
                                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/418728506_879171394212160_8780235240984191537_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGCi_LWu-OTd47N_OVQkwTdEu7zC26gTosS7vMLbqBOi1PPzM-jnUjRvIT3jW-RGkkOz93RAMW5wpSAypBK_d39&_nc_ohc=059Of3AiP_gQ7kNvgGH1Th5&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=Adj4kH268heiCFvuu0yndq5&oh=00_AYB2RqCzrptIIYXCyLX9iP3WvYvfrGismAcX3PdrMn5wEg&oe=66FA396B"
                                alt="Ảnh khối tuyển dụng" width="100%" height="100%" /></div>
                            <div className="unit-tag__body">
                                <div className="unit-tag__title">Khối văn phòng</div>
                                <div className="unit-tag__jobs"></div>
                                <div className="unit-tag__btn-more" onClick={() => navigate('/viec-lam-van-phong')}>Xem tất cả công việc khối văn phòng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;