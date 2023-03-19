
import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Typography, Divider, notification } from 'antd';
import { Auth } from 'aws-amplify';
import { createSignup } from './api';


const SignupWidget = () => {
    const [form] = Form.useForm()
    const [completed, setCompleted] = useState(false)

    const onFinish = (e) => {
        const { signup } = e;
        //signup with cognito
        Auth.signUp({
            username: signup.email,
            password: signup.password,
            attributes: {
                email: signup.email,
                phone_number: signup.phone,
                name: signup.name,
            }
        }).then((data) => {
            // if signup is successful, create a signup record in dynamodb
            console.log({CognitoUser: data});           
            createSignup({
                name: signup.name,
                company: signup.company,
                email: signup.email,
                phone: signup.phone,                
            }).then((data) => {              
                notification.success({
                    message: 'Success',
                    description: 'Please check your email for verification code'
                })
                setCompleted(true)
            }).catch((err) => {
                throw err;
                setCompleted(false)
            })
        }).catch((err) => {
            notification.error({
                message: 'Error',
                description: err.message
            })
        })
    }
    return (
        <div className='signup-container'>
            {

                !completed ?
                    <Form form={form} layout='vertical' size='large' onFinish={onFinish}>
                        <div style={{padding:'20px 0', textAlign:'center'}}>

                        <Typography.Title level={3} style={{ textAlign: 'center', fontWeight:'lighter !important', fontSize:16 }} strong>Please provide all required information marked *</Typography.Title >
                 
                        </div>
                        <Form.Item label='Your Name' name={['signup', 'name']} rules={[{ required: true, message: 'Please input your first name!' }]}>
                            <Input type='text' />
                        </Form.Item>
                        <Form.Item label='Company Name' name={['signup', 'company']} rules={[{ required: true, message: 'Please input your company name!' }]}>
                            <Input type='text' />
                        </Form.Item>

                        <Form.Item label='Email' name={['signup', 'email']} rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please input a valid email!' }
                        ]}>
                            <Input type='email' />
                        </Form.Item>

                        <Form.Item label='Phone # with country code (Eg:+1)' name={['signup', 'phone']} rules={[{ required: true, message: 'Please input your company Phone!' }, { pattern: new RegExp(/^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/), message: 'Please input a valid phone number!' }


                        ]}>
                            <Input datatype='number' />

                        </Form.Item>

                        <Form.Item label='Password' name={['signup', 'password']} rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input type='password' />
                        </Form.Item>
                        <Form.Item label='Confirm Password' name={['signup', 'confirmPassword']} rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input type='password' />
                        </Form.Item>

                        <Form.Item>
                            <Button type='primary' htmlType='submit' block >Signup</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type='default' className='btn-outlie' htmlType='reset' block >Reset</Button>
                        </Form.Item>



                    </Form>
                    :
                    <div style={{ textAlign: 'center', margin: '50px 10px' }}>
                        <Typography.Text style={{ textAlign: 'center' }} strong>Thank you for signing up, please check your email for verification code</Typography.Text>
                    </div>
            }

        </div>
    )
}

export default SignupWidget