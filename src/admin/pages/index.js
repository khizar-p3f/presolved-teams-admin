import { Result } from 'antd'
import React, { useEffect } from 'react'
import { API } from 'aws-amplify'

import MicrosoftLogin from "react-microsoft-login";

const makeLambdaCalltoAdminQueriescecc2b38 = () => {
    const apiName = 'AdminQueries';
    const myInit = {
        body: {
            username: "khizaras@yahoo.com",
            password: "1234567890",
            email: "khizaras@yahoo.com",
            userAttributes: "userAttributes"
        }, // replace this with attributes you need  
    }
    API.post('AdminQueries', '/users', { body: myInit.body }).then((response) => {
        console.log({ response });
    }).catch((error) => {
        console.log({ error });
    })
}

const AdminMainPage = () => {
    const clientId="35a2ff7a-28a5-466d-9f84-1cefbe80c187"
    useEffect(() => {
       // makeLambdaCalltoAdminQueriescecc2b38()
    },[])

    const authCallback=(err, data) => {
        console.log({ err, data });

    }

    return (
        <div className='content-container'>
            <Result title="Blank SubPage" subTitle="Clone this page for template" status={'500'} />
            <MicrosoftLogin debug clientId={clientId} redirectUri='https://localhost:3000/' authCallback={authCallback}  />
        </div>
    )
}

export default AdminMainPage