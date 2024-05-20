import React from 'react';
import { Menu } from 'antd';
import menuItems from '../Data/MenuItems.json';
import { DashboardOutlined, DesktopOutlined, ContainerOutlined, MailOutlined, AppstoreOutlined } from '@ant-design/icons';

const SideMenu: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed}
      items={menuItems.menuItems.map(item => ({
        ...item,
        icon: getIconComponent(item.icon)
      }))}
    />
  );
};

function getIconComponent(iconName: string) {
  switch (iconName) {
    case 'DashboardOutlined':
      return <DashboardOutlined />;
    case 'DesktopOutlined':
      return <DesktopOutlined />;
    case 'ContainerOutlined':
      return <ContainerOutlined />;
    case 'MailOutlined':
      return <MailOutlined />;
    case 'AppstoreOutlined':
      return <AppstoreOutlined />;
    default:
      return null;
  }
}

export default SideMenu;
