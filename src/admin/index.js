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


const AdminIndexPage = () => {
    const { Content, Footer, } = Layout;

    useEffect(() => {
        Auth.currentAuthenticatedUser().then((login) => {
           
        }).catch((err) => {
            navigate("/login")
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
                        <AdminLoginPage path="/login" />
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