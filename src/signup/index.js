import React, { useState } from 'react'
import { Card, Form, Input, Button, Checkbox, Row, Col } from 'antd';

import './assets/style/index.less'
import teamsImg from './assets/images/teams.svg'
import wavesImg from './assets/images/waves.svg'
import SigninWidget from './signin';
import SignupWidget from './signup';


const ClientSignupPage = () => {

  const [activeTab, setactiveTab] = useState('signin');

  const onTabChange = key => setactiveTab(key)

  const tabListNoTitle = [
    {
      key: 'signin',
      tab: 'Signin',
    },
    {
      key: 'Singup',
      tab: "Don't have an acccount? Signup",
    },

  ];
  return (
    <section className='signup'>
      <div className='flex-container'>
        <div className='signup-banner' style={{ backgroundImage: `URL(${wavesImg})` }}>
          <div className='banner-img'>
            <img src={teamsImg} width={'70%'} alt='teams' />
          </div>

          <div className='banner-title'>
            <h1>Signup to get started</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
          </div>
        </div>
        <div className='signup-item'>
          <Card className='container' title={
            <div className='card-title'>
              <h1>Hello Again!</h1>
              <h3>singin to our apps with the credentials, if you dont</h3>
              <h3>have an account, please signup</h3>
            </div>
          } style={{ width: '70%' }} tabList={tabListNoTitle} activeTabKey={activeTab} onTabChange={onTabChange}>
            <div>
              {activeTab === 'signin' && <SigninWidget />}
              {activeTab === 'Singup' && <SignupWidget />}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}




export default ClientSignupPage