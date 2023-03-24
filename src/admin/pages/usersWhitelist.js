import { Breadcrumb, Card, Col, Row, Typography, Table, Result, Button, Input, Space, Spin, Divider, List, Empty, Avatar, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import './usersWhitelist.less';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';
import bgimg from '../assets/images/icons/teams144.svg';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { addUserWhiteListing } from '../api';

const TeamsUsersWhitelisting = (props) => {

    let client = useSelector(state => state.client)
    const [isLoaded, setIsLoaded] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [searchInProgress, setSearchInProgress] = useState(false)
    const [dataLoaded, setDataLoaded] = useState(false)
    useEffect(() => {
    
        if (client.whiteListedUsers.isLoaded) {
            setDataLoaded(true)
            setIsLoaded(true)
        }
    }, [client.config, client.whiteListedUsers])


    const performSearch = (users) => {
        //'["Adele Vance","Alex Wilber","Diego Siciliani","Grady Archie","Henrietta Mueller","Isaiah Langer","Johanna Lorenz","Joni Sherman","Khizar Ahmed","Lee Gu","Lidia Holloway","Lynne Robbins","Megan Bowen","Miriam Graham","Nestor Wilke","Patti Fernandez","Pradeep Gupta"]'
        //result data
        /* 
          {
            "businessPhones": [
                "+1 425 555 0109"
            ],
            "displayName": "Adele Vance",
            "givenName": "Adele",
            "jobTitle": "Retail Manager",
            "mail": "AdeleV@5pfm87.onmicrosoft.com",
            "mobilePhone": null,
            "officeLocation": "18/2111",
            "preferredLanguage": "en-US",
            "surname": "Vance",
            "userPrincipalName": "AdeleV@5pfm87.onmicrosoft.com",
            "id": "3c417196-b953-4069-abff-d3ada8a25976"
        },
        */
        setSearchInProgress(true)
        axios.get(`https://td7y4pmq4a.execute-api.us-east-1.amazonaws.com/staging/api/users?displayName=${users}&tenantId=${client.config.tenantId}`).then((res) => {
            console.log({ res });
            if (res.data.users?.value) {
                setSearchResults(res.data.users.value)
                setSearchInProgress(false)
            }
        })
    }
    const addUsers = (user) => {
        const userData = {
            "clientId": client.config.clientId,
            "displayName": user.displayName || " ",
            "businessPhones": user.businessPhones.length > 0 ? JSON.stringify(user.businessPhones[0]) : JSON.stringify([]),
            "givenName": user.givenName || " ",
            "jobTitle": user.jobTitle || " ",
            "mail": user.mail || " ",
            "mobilePhone": user.mobilePhone || " ",
            "officeLocation": user.officeLocation || " ",
            "preferredLanguage": user.preferredLanguage || " ",
            "surname": user.surname || " ",
            "userPrincipalName": user.userPrincipalName || " ",
            "uid": user.id || " ",
        }
        addUserWhiteListing(userData).then((res) => {
            console.log({ res })
        }).catch((err) => {
            notification.error({
                message: 'Error',
                description: err.message || 'Unable to add user to whitelist',
            });
        })


    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'displayName',
            key: 'displayName',
            render: (text, record) => (
                <Space>
                    <AvatarUserInitials name={text} size={30} />
                    <Typography.Text>{text}</Typography.Text>
                </Space>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'mail',
            key: 'mail',
        },
        {
            title: 'Job Title',
            dataIndex: 'jobTitle',
            key: 'jobTitle',
        },
        {
            title: 'Phone',
            dataIndex: 'mobilePhone',
            key: 'mobilePhone',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <Button type='primary' icon={<PlusOutlined />} onClick={() => null}>Add</Button>
            ),
        },
    ]



    return (
        <div className='content-container'>
            <div className='usersWhitelist'>
                <Row className='breadcrumb-container'>
                    <Col span={24}>
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Admin</Breadcrumb.Item>
                            <Breadcrumb.Item>Users Whitelisting</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

                <Row className='greetings-container'>
                    <Col span={24}>

                        <Card className='greetings-card' bordered={false} style={{ backgroundImage: `url('${bgimg}')` }} >

                            <Card.Meta title="Microsoft Teams Users Whitelistings"
                            />
                            <Card.Meta description="Choose the list of users want to pre load to the CCP App" />
                        </Card>

                    </Col>
                </Row>
                {isLoaded ?
                    <Row className='user-container'>
                        <Col span={24}>
                            <Card>
                                <Row gutter={[16, 24]}>
                                    <Col span={8} className="input-section">
                                        <Row>
                                            <Col span={24}>
                                                <Space style={{ width: '95%' }} direction='vertical' size={10}>
                                                    <Typography.Text strong>Search Users</Typography.Text>
                                                    <Input.Search style={{ width: '100%' }} placeholder="Search By Name" enterButton="Search" size="large" onSearch={performSearch} />
                                                    <Typography.Text disabled>
                                                        Hint: Search by name or email
                                                    </Typography.Text>
                                                </Space>
                                                <Divider />
                                                <Space style={{ width: '100%' }} direction='vertical' size={30}>
                                                    <Typography.Text strong>Search Results</Typography.Text>
                                                    {searchInProgress && <Spin size='large' />}

                                                    {searchResults.length < 1 && !searchInProgress && <Typography.Text disabled>
                                                        <Empty description="No users data" />
                                                    </Typography.Text>}
                                                    {searchResults.length > 0 && !searchInProgress && <Space style={{ width: '100%' }} direction='vertical' size={20}>

                                                        <List
                                                            pagination={{
                                                                position: 'bottom',
                                                                align: 'center',
                                                            }}
                                                            dataSource={searchResults}
                                                            renderItem={(item, index) => (
                                                                <List.Item>
                                                                    <List.Item.Meta
                                                                        avatar={<AvatarUserInitials name={item.displayName} />}
                                                                        title={
                                                                            <Space size={5}>
                                                                                <Typography.Text strong>
                                                                                    {item.displayName}
                                                                                </Typography.Text>
                                                                                <Typography.Text type='secondary'>
                                                                                    {item.jobTitle}
                                                                                </Typography.Text>
                                                                            </Space>
                                                                        }
                                                                        description={
                                                                            <Space direction='vertical' size={5}>
                                                                                <Typography.Text type='secondary'>
                                                                                    {item.mail}
                                                                                </Typography.Text>
                                                                                <Typography.Text type='secondary'>
                                                                                    {item.mobilePhone || item.businessPhones[0]}
                                                                                </Typography.Text>
                                                                            </Space>

                                                                        }
                                                                    />
                                                                    <Button type='default'
                                                                        onClick={() => { addUsers(item) }}
                                                                        shape='circle' size='large' icon={<PlusOutlined />} />
                                                                </List.Item>
                                                            )}
                                                        />

                                                    </Space>}

                                                </Space>

                                            </Col>
                                        </Row>



                                    </Col>
                                    <Col span={16} className="result-section">
                                        {dataLoaded &&
                                            <Row>
                                                <Col span={24}>
                                                    <Space style={{ width: '100%' }} direction='vertical' size={30}>
                                                        
                                                        <Table columns={columns} dataSource={client.whiteListedUsers.items} />
                                                    </Space>

                                                </Col>
                                            </Row>
                                        }


                                    </Col>


                                </Row>

                            </Card>
                        </Col>
                    </Row>
                    :
                    <div>
                        <Space>
                            <Spin size='large' />
                            <Typography.Title level={3}>Please wait while we load the data...</Typography.Title>

                        </Space>
                    </div>
                }

                <div style={{ margin: '50px 0' }}>&nbsp;</div>
            </div>
        </div>
    )
}

export default TeamsUsersWhitelisting

const AvatarUserInitials = ({ name, size=64 }) => {
    const initials = name.split(' ').map((n) => n[0]).join('');


    return (
        <Avatar size={size} style={{ backgroundColor: '#663399', color: '#FFF', fontSize: 35 }}>{initials.toUpperCase()}</Avatar>
    )
}