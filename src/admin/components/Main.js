// Main.js
import React, { useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Menus from './Menu';

const { Content } = Layout;

const Main = ({ currentUser }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Menus collapsed={collapsed} setCollapsed={setCollapsed} currentUser={currentUser} />
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ paddingTop: 24, paddingBottom: 24 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
