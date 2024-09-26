import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/auth/quan-ly-tai-khoan');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      message.success('Đăng nhập thành công');
      navigate('/auth/quan-ly-tai-khoan');
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      if (error.code === 'auth/invalid-credential') {
        message.error('Sai thông tin đăng nhập!');
      } else {
        message.error('Sai thông tin đăng nhập!');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: '100px auto' }}>
      <title>Đăng nhập Careers</title>
      <h2 style={{marginBottom: 15}}>Đăng nhập Creers</h2>
      <Form onFinish={onFinish}>
        <Form.Item name="email" rules={[{ required: true, message: 'Vui lòng nhập email!' }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
