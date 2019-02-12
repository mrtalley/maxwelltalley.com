import React from 'react';
import Helmet from 'react-helmet';

import Header from './layout/Header';
import Router from './layout/Router';

const Layout = () => (
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
        {/* <Header /> */}
        <Router />
    </div>
)

export default Layout;
