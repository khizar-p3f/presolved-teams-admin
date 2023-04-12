import { Button, Drawer, Space, Table, Typography } from 'antd'
import React, { useState } from 'react'
import GetUsersFromGraph from './searchUsers'

const AdminManageGroups = ({ client }) => {

    const [showAddUserModal, setShowAddUserModal] = useState({
        visible: false,
        record: null,
        showUserslist: false
    })


    const addUserHandler = (record) => 
        setShowAddUserModal({
            visible: true,
            record: record
        })
    

    const showUserslistHandler = (record) => setShowAddUserModal({
            visible: true,
            record,
            showUserslist: true
        })
    

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <a onClick={() => showUserslistHandler(record)} style={{ cursor: 'pointer' }}> <Space size={1} direction='vertical'>
                <Typography.Title level={5}>{text}</Typography.Title>
                <Typography.Text>{record.description}</Typography.Text>
            </Space>
            </a>,
        },
        {
            title: 'Users',
            dataIndex: 'users',
            render: (text, record) => record.users.items.length
        },
        {
            title: 'Created',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Last Updated',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space>
                    <Button type='primary' onClick={() => addUserHandler(record)} >Add Users</Button>
                    <Button type='primary'>Edit</Button>
                </Space>)

        }
    ]
    return (
        <section className='manage-groups'>
            <Table columns={columns} dataSource={client.whiteListedUsers.items} />
            <Drawer width={showAddUserModal.showUserslist ? "80%" : "30%"} title={showAddUserModal.showUserslist ? <span>View Users belongs to {showAddUserModal.record?.name} group </span> : <span>Add User to the {showAddUserModal.record?.name} group</span>} open={showAddUserModal.visible} closable onClose={() => setShowAddUserModal({
                visible: false,
                record: null
            })}>
                <GetUsersFromGraph client={client} group={showAddUserModal.record} showUserslist={showAddUserModal.showUserslist} />
            </Drawer>

        </section>
    )
}

export default AdminManageGroups