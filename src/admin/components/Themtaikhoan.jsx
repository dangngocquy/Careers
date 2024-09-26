import React, { useState, useEffect } from 'react';
import { Layout, Table, Modal, Form, Input, Button, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { auth } from '../../config';
import { createUserWithEmailAndPassword, updateEmail, updatePassword, deleteUser, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;

const Themtaikhoan = () => {
    const [users, setUsers] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isResetModalVisible, setIsResetModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [editingUser, setEditingUser] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers([{ uid: user.uid, email: user.email }]);
            } else {
                navigate('/login');
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const showModal = (user = null) => {
        setEditingUser(user);
        if (user) {
            form.setFieldsValue({ email: user.email, password: '' });
        } else {
            form.resetFields();
        }
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setEditingUser(null);
    };

    const handleDeleteModalCancel = () => {
        setIsDeleteModalVisible(false);
        setSelectedUser(null);
    };

    const handleResetModalCancel = () => {
        setIsResetModalVisible(false);
        setSelectedUser(null);
    };

    const onFinish = async (values) => {
        const { email, password } = values;

        try {
            if (editingUser) {
                const user = auth.currentUser;
                if (user) {
                    await updateEmail(user, email);
                    if (password) {
                        await updatePassword(user, password);
                    }
                    message.success('Cập nhật người dùng thành công');
                    setUsers(prevUsers => prevUsers.map(u => u.uid === user.uid ? { ...u, email } : u));
                }
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const newUser = userCredential.user;
                message.success('Thêm người dùng thành công');
                setUsers(prevUsers => [...prevUsers, { uid: newUser.uid, email: newUser.email }]);
            }
            setIsModalVisible(false);
        } catch (error) {
            console.error("Error handling user:", error);
            message.error('Lỗi khi xử lý');
        }
    };

    const handleDelete = (user) => {
        setSelectedUser(user);
        setIsDeleteModalVisible(true);
    };

    const confirmDelete = async () => {
        try {
            const userToDelete = auth.currentUser;
            if (userToDelete && userToDelete.uid === selectedUser.uid) {
                await deleteUser(userToDelete);
                message.success('Xóa người dùng thành công');
                setUsers(prevUsers => prevUsers.filter(u => u.uid !== selectedUser.uid));
            } else {
                message.error('Bạn chỉ có thể xóa tài khoản của chính mình');
            }
            setIsDeleteModalVisible(false);
        } catch (error) {
            console.error("Lỗi khi xóa người dùng:", error);
            message.error('Lỗi khi xóa');
        }
    };

    const handlePasswordReset = (user) => {
        setSelectedUser(user);
        setIsResetModalVisible(true);
    };

    const sendPasswordReset = async () => {
        try {
            await sendPasswordResetEmail(auth, selectedUser.email);
            message.success('Đã gửi email đặt lại mật khẩu.');
            setIsResetModalVisible(false);
        } catch (error) {
            console.error("Lỗi khi gửi email đặt lại mật khẩu:", error);
            message.error('Lỗi khi gửi email');
        }
    };

    const columns = [
        { title: 'Email', dataIndex: 'email', key: 'email' },
        {
            title: 'Thao tác',
            key: 'actions',
            render: (_, record) => (
                <span>
                    <Button icon={<EditOutlined />} onClick={() => showModal(record)} />
                    <Button icon={<DeleteOutlined />} onClick={() => handleDelete(record)} style={{ marginLeft: 8 }} />
                    <Button onClick={() => handlePasswordReset(record)} style={{ marginLeft: 8 }}>Đặt lại mật khẩu</Button>
                </span>
            ),
        },
    ];

    return (
        <Layout className="site-layout">
            <title>Quản lý tài khoản NISO</title>
            <Content style={{ margin: '0 16px' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={() => showModal()}
                        style={{ marginTop: 16, marginBottom: 16 }}
                    >
                        Thêm tài khoản
                    </Button>
                    <Table columns={columns} dataSource={users} />
                </div>
            </Content>

            <Modal
                title={editingUser ? "Sửa thông tin" : "Thêm tài khoản"}
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="password" label="Mật khẩu" rules={[{ required: !editingUser, message: 'Vui lòng nhập mật khẩu!' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {editingUser ? "Cập nhật" : "Thêm"}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="Xác nhận xóa"
                visible={isDeleteModalVisible}
                onCancel={handleDeleteModalCancel}
                onOk={confirmDelete}
                okText="Xóa"
                cancelText="Hủy"
            >
                <p>Bạn có chắc chắn muốn xóa tài khoản {selectedUser?.email} không?</p>
            </Modal>

            <Modal
                title="Đặt lại mật khẩu"
                visible={isResetModalVisible}
                onCancel={handleResetModalCancel}
                onOk={sendPasswordReset}
                okText="Gửi Email"
                cancelText="Hủy"
            >
                <p>Chúng tôi sẽ gửi cho bạn một email vào {selectedUser?.email} để đặt lại mật khẩu.</p>
            </Modal>
        </Layout>
    );
};

export default Themtaikhoan;
