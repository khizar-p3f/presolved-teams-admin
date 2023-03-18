import React, { useEffect,useState  } from 'react'
import { QuestionOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Space, Avatar, Typography, Button, Dropdown } from 'antd';
import { Auth } from 'aws-amplify';
import { navigate } from '@gatsbyjs/reach-router';
import { useSelector } from 'react-redux';

const AdminHeader = () => {
    const user = useSelector(state => state.user)
    const [state, setState] = useState(user?.email || "guest")
    useEffect(() => {
        if (user.isLoggedin) {
            setState(user?.email)
        }
    }, [user])
    const logout = () => {
        Auth.signOut().then(() => {
            navigate("/login")
        })
    }

    const profileMenu = [
        {
            key: 'settings',
            label: <div><SettingOutlined /> Settings</div>,

        },
        {
            key: 'signout',
            label: <div><LogoutOutlined /> Logout</div>,
            onClick: () => { logout() }
        },

    ]
    const { Header, r } = Layout;
    const { token } = theme.useToken();
    return (
        <Header className="primary-header">
            <div className="page-name">Admin Dashborad</div>
            <div className="user-info">
                <Space size={20}>
                    <Button icon={<QuestionOutlined />} className="btn-outline" shape='round' type="primary">Help</Button>
                    <Dropdown menu={{ items: profileMenu }} trigger={['hover']}>
                        <Space style={{'cursor':'pointer'}} >
                            <Avatar style={{ background: token.colorPrimary }} size={32} icon={<UserOutlined />} />
                            <Typography.Text>{state}</Typography.Text>
                        </Space>
                    </Dropdown>
                </Space>
            </div>
        </Header>
    );
}

export default AdminHeader