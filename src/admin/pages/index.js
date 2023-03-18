import { Result } from 'antd'
import React, { useEffect } from 'react'
import { API } from 'aws-amplify'


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
    useEffect(() => {
        makeLambdaCalltoAdminQueriescecc2b38()
    },[])
    return (
        <div className='content-container'>
            <Result title="Blank SubPage" subTitle="Clone this page for template" status={'500'} />
        </div>
    )
}

export default AdminMainPage