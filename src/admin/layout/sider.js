import React, { useState } from 'react'
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu, Space, Typography, } from 'antd';
import teams from '../assets/images/icons/teams.png'
import dashboard from '../assets/images/icons/dashboard.png'
import { Link } from '@gatsbyjs/reach-router'
const items = [ 
    {
        key: 'dashboard',
        icon: <img src={dashboard} height={26} />,
        label: <Link to="/">Dashboard</Link>,

    },
    {
        key: 'integration',
        icon: <img src={teams} height={26} />,
        label: <Link to="/teams-integraion">Teams Integration</Link>,
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