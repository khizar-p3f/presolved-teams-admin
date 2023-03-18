import React from 'react'
import './assets/style/index.less'
import teamsImg from './assets/images/teams.svg'
import wavesImg from './assets/images/waves.svg'

const ClientSignupPage = () => {
  return (
    <section className='signup'>
      <div className='flex-container'>
        <div className='signup-banner' style={{backgroundImage:`URL(${wavesImg})`}}>
            <div className='banner-img'>
            <img src={teamsImg} width={'70%'} alt='teams' />
            </div>

            <div className='banner-title'>
              <h1>Signup to get started</h1>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
             
            </div>
              
           
        </div>
        <div className='signup-item'>
          <h1>Sign in</h1>
          <p>Sign in to get started</p>
          <form>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password' />
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}

export default ClientSignupPage