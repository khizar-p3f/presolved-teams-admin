import React, { useState } from 'react'
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu, Space, Typography, } from 'antd';
import teams from '../assets/images/icons/teams.png'
import dashboard from '../assets/images/icons/dashboard.png'
import teamsUsers from '../assets/images/icons/icons8-group-64.png'
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
        label: <Link to="/teams-integration">Teams Integration</Link>,

    },
    {
        key: 'whitelisting',
        icon: <img src={teamsUsers} height={26} />,
        label: <Link to="/teams-users-whitelisting">Users Whitelisting</Link>,
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

const AdminSider = (props) => {
    const { Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState('dashboard');

    return (
        <Sider width={300} collapsedWidth={100} className="primary-sidebar" theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo-container" >
                <div className={`logo ${collapsed && 'collapsed' || ''}`}>Presolved</div>
            </div>
            <div className='main-menu'>
                <Typography.Text className='nav-placeholder' strong>Navigations</Typography.Text>
                <Menu

                onClick={(value) => { setCurrent(value.key) }}
                theme="light" selectedKeys={[current]}  defaultSelectedKeys={['dashboard']} mode="inline" items={items} />
            </div>
        </Sider>);
}

export default AdminSider