import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, FileOutlined, DashboardOutlined, LogoutOutlined, MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../config';
import { message } from 'antd';

const { Sider } = Layout;

const Menus = ({ collapsed, setCollapsed, currentUser }) => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            message.success('Đăng xuất thành công');
            navigate('/login');
        } catch (error) {
            console.error("Lỗi đăng xuất:", error);
            message.error('Đăng xuất thất bại: ' + error.message);
        }
    };

    const menuItems = [
        { key: '1', icon: <DashboardOutlined />, label: 'Dashboard', onClick: () => navigate('quan-ly-tai-khoan') },
        { key: '2', icon: <FileOutlined />, label: 'Danh sách công việc', onClick: () => navigate('danh-sach-cong-viec') },
        { key: '3', icon: <UserOutlined />, label: 'Tài khoản', onClick: () => navigate('quan-ly-tai-khoan') },
        { key: '6', icon: <UserOutlined />, label: 'Hồ sơ cần xử lý', onClick: () => navigate('quan-ly-tai-khoan') },
        { key: '5', icon: <UserOutlined />, label: 'Hồ sơ đã lưu', onClick: () => navigate('quan-ly-tai-khoan') },
        { key: '7', icon: <UserOutlined />, label: 'Chỉnh sửa giao diện', onClick: () => navigate('quan-ly-tai-khoan') },
        { key: '4', icon: <LogoutOutlined />, label: 'Đăng xuất', onClick: handleLogout },
    ];

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    if (isMobile) {
        return (
            <div className="mobile-menu">
                <button onClick={toggleMobileMenu} className="menu-button">
                    <MenuOutlined />
                </button>
                {mobileMenuVisible && (
                    <div className="menu-overlay">
                        <Menu theme="dark" mode="vertical" items={menuItems} />
                    </div>
                )}
            </div>
        );
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} className="custom-sider">
            <div className="logo" />
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={menuItems} />
        </Sider>
    );
};

export default Menus;
