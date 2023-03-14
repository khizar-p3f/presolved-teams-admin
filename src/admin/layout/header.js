import React  from 'react'
import {  QuestionOutlined,  UserOutlined, SettingOutlined, LogoutOutlined  } from '@ant-design/icons';
import { Layout, Menu, theme, Space, Avatar, Typography, Button, Dropdown } from 'antd';
import { Auth } from 'aws-amplify';
import { navigate } from '@gatsbyjs/reach-router';






const AdminHeader = () => {
    const profileMenu = [        
            {
              key: 'settings',
              label: <div><SettingOutlined/> Settings</div>,              

            },
            {
              key: 'signout',
              label: <div><LogoutOutlined/> Logout</div>,
                onClick: () =>{
                    Auth.signOut()
                    navigate("/login")
                }
            },
        
    ]
    const { Header,r } = Layout;  
    const { token } = theme.useToken();
    return (
        <Header className="primary-header">
            <div className="page-name">Admin Dashborad</div>
            <div className="user-info">
                <Space size={20}>
                    <Button icon={<QuestionOutlined />} shape='round' type="primary">Help</Button>
                    <Dropdown menu={{ items: profileMenu }} trigger={['hover']}>
                    <Space>
                        <Avatar style={{ background: token.colorPrimary }} size={32} icon={<UserOutlined />} />
                        <Typography.Text>John Doe</Typography.Text>
                    </Space>
                    </Dropdown>
                </Space>
            </div>
        </Header>
    );
}

export default AdminHeader