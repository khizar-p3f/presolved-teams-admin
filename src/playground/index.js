import React from 'react';
import { Layout } from 'antd';
import RuleBuilder from './components/RuleBuilder';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const { Header, Content } = Layout;

function Playground() {
    return (
        <Layout>
            <Header>
                <h1 style={{ color: 'white' }}>Dynamic Rules App</h1>
            </Header>
            <Content style={{ padding: '24px' }}>
                <DndProvider backend={HTML5Backend}>
                    <RuleBuilder />
                </DndProvider>
            </Content>
        </Layout>
    );
}

export default Playground;