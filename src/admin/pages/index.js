import { Alert, Avatar, Breadcrumb, Button, Card, Col, Empty, Result, Row, Space, Typography } from 'antd'
import { PhoneOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import MicrosoftLogin from "react-microsoft-login";
import './index.less'
import bgimg from '../assets/images/current-account.png'
import attn from '../assets/images/empty-expense-card.png'
import Teams48 from '../assets/images/icons/teams.png'
 
const AdminMainPage = (props) => {
    const { client } = props
    const [state, setState] = useState({
        isLoaded: false,
        clientId: null
    })

    useEffect(() => {
        if (client.clientId) {
            setState({ ...state, isLoaded: true, clientId: client.clientId, ...client })
        }
    }, [])

  

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
                    {state?.config?.loginMS <= 0 &&
                        <Col span={8}>
                            <Card className='attention'>
                                <Space size={10} direction='vertical' >
                                    <Space size={30}>
                                        <img src={attn} height={100} />
                                        <Space direction='vertical' size={0}>
                                            <Typography.Title style={{ margin: 0 }} level={4}>MS Login required</Typography.Title>
                                            <Typography.Text>
                                                Hi,
                                                Seems you havent logged in to Microsoft Teams yet. Please click the button below to get started
                                            </Typography.Text>

                                        </Space>
                                    </Space>
                                    <Button style={{ marginLeft: 90 }} size='large' type="dashed" shape='round' >  <Space align='start'>
                                            <img src={Teams48} height={25} />
                                            <span>Login With Microsoft</span>
                                        </Space></Button>
                                </Space>

                            </Card>
                        </Col>
                    }
                    {state?.config?.consentMS <= 0 &&
                        <Col span={8}>
                            <Card className='attention grey'>
                                <Space size={10} direction='vertical' >
                                    <Space size={30}>
                                        <img src={attn} height={100} />
                                        <Space direction='vertical' size={0}>
                                            <Typography.Title style={{ margin: 0 }} level={4}>Teams Consent required</Typography.Title>
                                            <Typography.Text>
                                                Hi,
                                                Seems you havent accquired the Consent from Microsoft Teams yet. Please click the button below to get started
                                            </Typography.Text>

                                        </Space>
                                    </Space>
                                    <Button style={{ marginLeft: 90 }} size='large' type="dashed" shape='round' >
                                        <Space align='start'>
                                            <img src={Teams48} height={25} />
                                            <span>Get Consent</span>
                                        </Space>
                                    </Button>
                                </Space>

                            </Card>
                        </Col>
                    }
                </Row>
                <div style={{ margin: '50px 0' }}>&nbsp;</div>
            </div>
        </div>
    )
}

export default AdminMainPage