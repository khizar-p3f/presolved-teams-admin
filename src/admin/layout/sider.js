import React, { useState } from 'react'
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu, Space, Typography, } from 'antd';


const items = [
    {
        key: 'dashboard',
        icon: <PieChartOutlined />,
        label: 'Dashboard',

    },
    {
        key: 'settings',
        icon: <DesktopOutlined />,
        label: 'Settings',

    },
    {
        key: 'code',
        icon: <FileOutlined />,
        label: 'Widget Code',

    },

];

const AdminSider = () => {
    const { Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);


    return (
        <Sider  width={300} collapsedWidth={100} className="primary-sidebar" theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo-container" >
                <div className={`logo ${collapsed && 'collapsed' || ''}`}>Presolved</div>
            </div>
            <div className='main-menu'>
                <Typography.Text className='nav-placeholder' strong>Navigations</Typography.Text>
            <Menu theme="light" defaultSelectedKeys={['dashboard']} mode="inline" items={items} />
            </div>
        </Sider>);
}

export default AdminSider