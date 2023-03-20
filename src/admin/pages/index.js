import { Avatar, Breadcrumb, Card, Col, Result, Row, Space, Typography } from 'antd'
import { QuestionOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import MicrosoftLogin from "react-microsoft-login";
import './index.less'


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

                        <Card bordered={false} >

                            <Card.Meta title={<Space>
                                <Typography.Title level={3}>Hi {client?.name}  - {client.company}</Typography.Title>
                            </Space>}
                            />
                            <Card.Meta description={
                                <Space>
                                    <Typography.Title level={4} type="secondary">Welcome to presolved dashboard for MS Teams integration</Typography.Title>
                                </Space>
                            } />
                        </Card>

                    </Col>
                </Row>


                <Row className='statistic-container' gutter={[16, 16]}>
                    <Col span={6}>
                        <Card  >
                            <Card.Meta title={<Space>
                                <Avatar size={64} icon={<UserOutlined />} />
                                <Typography.Title level={3}>Users</Typography.Title>
                            </Space>}
                            />
                            <Card.Meta description={
                                <Space>
                                    <Typography.Title level={4} type="secondary">Number of users using your app</Typography.Title>
                                    <Typography.Title level={4}>100</Typography.Title>
                                </Space>
                            } />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card  >
                            <Card.Meta title={<Space>
                                <Avatar size={64} icon={<QuestionOutlined />} />
                                <Typography.Title level={3}>Tickets</Typography.Title>
                            </Space>}
                            />
                            <Card.Meta description={
                                <Space>
                                    <Typography.Title level={4} type="secondary">Number of tickets created</Typography.Title>
                                    <Typography.Title level={4}>100</Typography.Title>
                                </Space>
                            } />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card  >
                            <Card.Meta title={<Space>
                                <Avatar size={64} icon={<UserOutlined />} />
                                <Typography.Title level={3}>Users</Typography.Title>
                            </Space>}
                            />
                            <Card.Meta description={
                                <Space>
                                    <Typography.Title level={4} type="secondary">Number of users using your app</Typography.Title>
                                    <Typography.Title level={4}>100</Typography.Title>
                                </Space>
                            } />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card  >
                            <Card.Meta title={<Space>
                                <Avatar size={64} icon={<UserOutlined />} />
                                <Typography.Title level={3}>Users</Typography.Title>
                            </Space>}
                            />
                            <Card.Meta description={
                                <Space>
                                    <Typography.Title level={4} type="secondary">Number of users using your app</Typography.Title>
                                    <Typography.Title level={4}>100</Typography.Title>
                                </Space>
                            } />
                        </Card>
                    </Col>



                </Row>

            </div>
        </div>
    )
}

export default AdminMainPage