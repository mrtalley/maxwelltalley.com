import React from 'react';
import { Menu, Card } from 'antd';

// Styles
import 'antd/dist/antd.css';
import './assets/styles/home.scss';

class Home extends React.Component {
    state = {
        current: 'projects',
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div>
                <div className="homeTitleSection">
                    Maxwell Talley
                </div>
                <div className="aboutSection">
                    <div className="aboutDescription">
                        My name is Maxwell Talley. I am a software engineering student at Iowa State University. In my free time, I like to travel, camp, work on personal projects, hang out with friends, and learn new things. My ultimate career goal is to do something that helps to decrease suffering in the world, whether that be direct or indirectly.
                    </div>
                    <div>
                        My career goals include ......
                    </div>
                </div>
                {/* <Menu
                    onClick={ this.handleClick }
                    selectedKeys={ [this.state.current] }
                    mode='horizontal'
                >
                    <Menu.Item key='projects'>Projects</Menu.Item>
                    <Menu.Item key='work-experience'>Work Experience</Menu.Item>
                </Menu>
                <MenuToLoad menuState={ this.state.current } /> */}
            </div>
        );
    }
}

export default Home;
