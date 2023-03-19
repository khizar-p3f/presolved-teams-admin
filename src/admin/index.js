import React, { useEffect, useState } from 'react';
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, theme, Result } from 'antd';
import './assets/style/index.less';
import AdminSider from './layout/sider';
import AdminHeader from './layout/header';
import { Router, navigate } from '@gatsbyjs/reach-router';

import AdminLoginPage from './pages/login';
import AdminMainPage from './pages';
import { Auth } from 'aws-amplify';
import { useDispatch } from 'react-redux';
import { updateUser } from '../store/reducers/user';


const AdminIndexPage = () => {
    const { Content, Footer, } = Layout;
    const dispatch = useDispatch()
    useEffect(() => {
        Auth.currentAuthenticatedUser().then((login) => {
            dispatch(updateUser({ ...login.attributes, userName: login?.username }))
        }).catch((err) => {
            navigate("/signup")
        })
    }, [])


    return (

        <Layout className="main-layout">
            <AdminSider />
            <Layout className="site-layout">
                <AdminHeader />
                <Content className="main-container">
                    <Router>
                        <AdminMainPage path="/" />
                        <AdminLoginPage path="/signup" />
                    </Router>
                </Content>
                <Footer className="primary-footer">
                    Presolved © 2020 Created by Presolved
                </Footer>
            </Layout>
        </Layout>

    );
}

export default AdminIndexPage