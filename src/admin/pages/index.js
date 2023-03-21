import { Alert, Avatar, Breadcrumb, Button, Card, Col, Empty, Result, Row, Space, Typography } from 'antd'
import { PhoneOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import MicrosoftLogin from "react-microsoft-login";
import './index.less'
import bgimg from '../assets/images/current-account.png'

const AdminMainPage = (props) => {
    const { client } = props
    const [state, setState] = useState({
        isLoaded: false,
        clientId: null
    })

    useEffect(() => {
        if (client.clientId) {
            setState({ ...state, isLoaded: true, clientId: client.clientId })
        }
    }, [])

    const authCallback = (err, data) => {
        console.log({ err, data });
    }

    return (
        <div className='content-container'>
            <div className='admin-dashboard'>
                <Row className='breadcrumb-container'>
                    <Col span={24}>
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

                <Row className='greetings-container'>
                    <Col span={24}>

                        <Card className='greetings-card' bordered={false} style={{ backgroundImage: `url('${bgimg}')` }} >

                            <Card.Meta title={<Space>
                                <Typography.Title level={4}>Hi {client?.name}  - {client.company}</Typography.Title>
                            </Space>}
                            />
                            <Card.Meta description={
                                <Space>
                                    <Typography.Title level={5} type="secondary">Welcome to presolved dashboard for MS Teams integration</Typography.Title>
                                </Space>
                            } />
                        </Card>

                    </Col>
                </Row>


                <Row className='statistic-container' gutter={[16, 16]}>
                    <Col span={24}>
                        <Card bordered>

                            <Card.Grid>
                                <Card.Meta className='card-meta'
                                    avatar={<Avatar size={42} icon={<PhoneOutlined />} />}
                                    title={<Typography.Title level={3}>Monthly Statistics</Typography.Title>}
                                />
                                <div className='stats-container'>
                                    <div className='stats-items'>
                                        <Space direction='vertical' size={10}>
                                            <Typography.Text  >Calls</Typography.Text>
                                            <Typography.Text strong >200</Typography.Text>
                                        </Space>
                                    </div>
                                    <div className='stats-items'>
                                        <Space direction='vertical' size={10}>
                                            <Typography.Text >Minutes</Typography.Text>
                                            <Typography.Text strong >1565.00</Typography.Text>
                                        </Space>
                                    </div>
                                    <div className='stats-items'>
                                        <Space direction='vertical' size={10}>
                                            <Typography.Text >Failed</Typography.Text>
                                            <Typography.Text strong >7</Typography.Text>
                                        </Space>
                                    </div>
                                </div>
                            </Card.Grid>
                            <Card.Grid>
                                <Card.Meta className='card-meta'
                                    avatar={<Avatar size={42} icon={<PhoneOutlined />} />}
                                    title={<Typography.Title level={3}>Weekly Statistics</Typography.Title>}
                                />
                                <div className='stats-container'>
                                    <div className='stats-items'>
                                        <Space direction='vertical' size={10}>
                                            <Typography.Text  >Calls</Typography.Text>
                                            <Typography.Text strong >200</Typography.Text>
                                        </Space>
                                    </div>
                                    <div className='stats-items'>
                                        <Space direction='vertical' size={10}>
                                            <Typography.Text >Minutes</Typography.Text>
                                            <Typography.Text strong >1565.00</Typography.Text>
                                        </Space>
                                    </div>
                                    <div className='stats-items'>
                                        <Space direction='vertical' size={10}>
                                            <Typography.Text >Failed</Typography.Text>
                                            <Typography.Text strong >7</Typography.Text>
                                        </Space>
                                    </div>
                                </div>
                            </Card.Grid>
                            <Card.Grid>
                                <Card.Meta className='card-meta'
                                    avatar={<Avatar size={42} icon={<PhoneOutlined />} />}
                                    title={<Typography.Title level={3}>Today Statistics</Typography.Title>}
                                />
                                <div className='stats-container'>
                                    <div className='stats-items'>
                                        <Space direction='vertical' size={10}>
                                            <Typography.Text  >Calls</Typography.Text>
                                            <Typography.Text strong >200</Typography.Text>
                                        </Space>
                                    </div>
                                    <div className='stats-items'>
                                        <Space direction='vertical' size={10}>
                                            <Typography.Text >Minutes</Typography.Text>
                                            <Typography.Text strong >1565.00</Typography.Text>
                                        </Space>
                                    </div>
                                    <div className='stats-items'>
                                        <Space direction='vertical' size={10}>
                                            <Typography.Text >Failed</Typography.Text>
                                            <Typography.Text strong >7</Typography.Text>
                                        </Space>
                                    </div>
                                </div>
                            </Card.Grid>
                        </Card>
                    </Col>
                </Row>

                <Row className='calls-report-container' gutter={[16, 16]}>
                    <Col span={12}>
                        <Card title="Recent Calls" extra={[<Button icon={<SettingOutlined />}>Settings</Button>]}>
                            <Empty style={{ minHeight: 300 }} />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Group Calls" extra={[<Button icon={<SettingOutlined />}>Settings</Button>]}>
                            <Empty style={{ minHeight: 300 }} />

                        </Card>
                    </Col>
                </Row>

                <Row className='alerts-container' gutter={[16, 16]}>
                    <Col span={24}>
                        <Alert banner
                            closable
                            message="You haven't Signing with Microsoft Teams yet. Please click the button below to sign in"
                            description={<Button type="primary" icon={<UserOutlined />}>Sign in with Microsoft Teams</Button>}
                            type="warning"
                            showIcon
                        />
                    </Col>

                    <Col span={24}>
                        <Alert banner
                            role='alert'
                            closable
                            message="You need to get a consent from Microsoft Teams to access your data. Please click the button below to sign in"
                            description={<Button type="primary" icon={<UserOutlined />}>Get consent</Button>}
                            type="warning"
                            showIcon
                        />
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default AdminMainPage