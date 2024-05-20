import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import logo from '../Images/DemoDhahbpard.svg';
import SideMenu from '../HomePage/Menu';

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#001628', padding: 0 }}>
        <div className='header'>
          {!collapsed && (
            <img className="dashboard-logo" src={logo} alt="logo" />
          )}
          <Button
            type="text"
            onClick={() => setCollapsed(!collapsed)}
            style={{ color: '#ffff', fontSize: '24px', paddingLeft: '20px' }}
            icon={collapsed ? <MenuUnfoldOutlined style={{ fontSize: '20px' }} /> : <MenuFoldOutlined style={{ fontSize: '20px' }} />}
          />  
        </div>
      </Header>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ zIndex: 1 }}>
          <div className="demo-logo-vertical" />
          <SideMenu collapsed={collapsed} />
        </Sider>
        <Layout style={{ marginLeft: collapsed ? 80 : 10, transition: 'margin-left 0.2s' }}>
          <Content />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
