
import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox, Row, Col, notification, Divider, Spin } from 'antd';
import { Auth, Hub } from 'aws-amplify';
import { Authenticator, Heading, ThemeProvider, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useDispatch } from 'react-redux';
import { updateUser } from '../store/reducers/user';
import { navigate } from '@gatsbyjs/reach-router';
import { getClientInformation } from './api';
import { updateClient, updateClientConfig } from '../store/reducers/client';
import { getClientIntegration } from '../admin/api';

const SigninWidget = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm()
    const [showAuthenticator, setShowAuthenticator] = useState(false)
    const [state, setState] = useState({
        isLoginIn: false,
        isLoggedin: false,
        user: null
    })

    useEffect(() => {
        Auth.currentAuthenticatedUser().then((login) => {
            const loginData = login?.attributes
           /*  getClientInformation(loginData.email).then((res) => {
                dispatch(updateUser({ ...loginData, ...res, }))
                dispatch(updateClient({ ...res }))
                getClientIntegration(res.clientId).then((gci) => {
                    dispatch(updateClientConfig({ ...gci, clientId: res.clientId }))
                    navigate("/")
                })
            }) */
            //dispatch(updateUser({ ...loginData, userName: login?.username }))
            navigate("/", { state: {...login, proceedpostLoginCheks:true } })
        })
    }, [state.isLoggedin])

    Hub.listen('auth', (data) => {
        const event = data.payload.event;
        if (event === 'signIn') {
            setState({ ...state, isLoggedin: true })
        }
    });



    const onFinish = (e) => {
        setState({ ...state, isLoginIn: true })
        Auth.signIn({
            username: e.email,
            password: e.password
        }).then((data) => {
            console.log({ data }); 
            navigate("/", { state: {...data, proceedpostLoginCheks:true } })
           /*  getClientInformation(e.email).then((res) => {
                setState({ ...state, isLoginIn: false })
                dispatch(updateUser({ ...data, ...res, userName: e.email }))
                dispatch(updateClient({ ...res }))
                navigate("/")
            }) */
            /*  notification.success({
                 message: 'Success',
                 description: 'Login Successful'
             })
  */
        }).catch((err) => {
            console.error(err)
            notification.error({
                message: 'Error',
                description: err.message
            })
        })
    }

    return (
        <div className='signin-container'>
            {
                showAuthenticator &&
                <Authenticator  >
                    {({ signOut }) => (
                        <main>
                            <Heading level={2}>Please wailt while we load the page . . .</Heading>
                            <Button onClick={signOut} isFullWidth={true} variation="primary" size="large" loadingText="">Sign out</Button>
                        </main>
                    )}
                </Authenticator>
            }

            <Form form={form} layout='vertical' size='large' onFinish={onFinish}>
                <Form.Item label='Email' name='email'
                    rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please input a valid email!' }
                    ]}>
                    <Input type='email' />
                </Form.Item>
                <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input type='password' />
                </Form.Item>
                <Row justify='space-around'>
                    <Col flex={1}>
                        <Form.Item name="remember" valuePropName="checked" >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col flex={0}>
                        <Button type='link' onClick={() => setShowAuthenticator(!showAuthenticator)}  >Recover Password</Button>
                    </Col>
                </Row>

                {state.isLoginIn ?
                    <Form.Item>
                        <Divider />
                        <Spin size='large' style={{ fontSize: 40 }} />
                        <Divider />
                    </Form.Item> : null}
                <Form.Item>
                    <Button type='primary' htmlType='submit' block >Signin</Button>
                </Form.Item>

            </Form>

        </div>
    )
}

export default SigninWidget