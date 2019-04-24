import React from 'react';
import Helmet from 'react-helmet';
import { Layout } from 'antd';

import Sidebar from './layout/navigation/Sidebar';
import Router from './layout/Router';

import './assets/styles/layout.scss';

const {
    Content, Sider
} = Layout;

class Structure extends React.Component {
    render() {
        return (
            <div>
                <Helmet
                    title='MRT'
                    meta={[
                        {
                            name: 'description',
                            content: 'Personal website of software engineer to be, Maxwell Talley'
                        }
                    ]}
                />
                <Layout>
                    <Layout>
                        <Sider>
                            <Sidebar />
                        </Sider>
                        <Content>
                            <Router />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Structure;
