
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/reducers/user';

import { Auth, Hub } from "aws-amplify";
import { Authenticator, Button, Flex, Heading, ThemeProvider, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './login.less'
import { navigate } from '@gatsbyjs/reach-router';
const AdminLoginPage = () => {
    const dispatch = useDispatch()

    const [state, setState] = useState({
        isLoggedin: false,
        user: null
    })
    useEffect(() => {
        Auth.currentAuthenticatedUser().then((login) => {
            const loginData = login?.attributes
            console.log({ login });
            dispatch(updateUser({ ...loginData, userName: login?.username }))
            navigate("/")
        })
    }, [state.isLoggedin])

    Hub.listen('auth', (data) => {
        const event = data.payload.event;
        console.log({ event });
        if (event === 'signIn') {
            setState({ ...state, isLoggedin: true })
        }
    });

    return (
        <div className='content-container'>
            <div className='login-container'>
                <Authenticator  >
                    {({ signOut }) => (
                        <main>
                            <Heading level={2}>Please wailt while we load the page . . .</Heading>
                            <Button onClick={signOut} isFullWidth={true} variation="primary" size="large" loadingText="">Sign out</Button>
                        </main>
                    )}
                </Authenticator>
            </div>
        </div>
    )
}

export default AdminLoginPage