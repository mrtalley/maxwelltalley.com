import React from 'react';
import { Menu, Card } from 'antd';

import 'antd/dist/antd.css';
import './assets/styles/Home.css';

const homeTitleSection = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '36px',
}

const aboutSection = {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    textAlign: 'center',
    margin: 'auto',
    // marginRight: '20px',
    // marginLeft: '20px',
    maxWidth: '900px',
}

const cardContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    marginRight: '20px',
    marginLeft: '20px',
}

const sectionTitle = {
    marginRight: '20px',
    marginLeft: '20px'
}

const cardStyle = {
    maxWidth: '600px',
    minWidth: '300px',
    marginBottom: '30px',
}

function Projects() {
    return (
        <div>
            <h2 style={ sectionTitle }>
                PROJECTS WORKED ON
            </h2>
            <div style={ cardContainer }>
                <Card title='Toque' style={ cardStyle }>
                    Com S 309 project built with anger and tears
                </Card>
                <Card title='dungeon-crawler' style={ cardStyle }>
                    Com S 327 project built with excitement, tears, and C++
                </Card>
                <Card title='GG' style={ cardStyle }>
                    My friend will put art on this thing if I ever finish it
                </Card>
            </div>
         </div>
    );
}

function WorkExperience() {
    return (
        <div>
            <h2 style={ sectionTitle }>
                WORK EXPERIENCE
            </h2>
            <div style={ cardContainer }>
                <Card title='TA, Iowa State University' style={ cardStyle }>
                    I was a TA!
                </Card>
                <Card title='Software Engineering Intern, Source Allies Inc.' style={ cardStyle }>
                    I typed nonsense into a computer and magic came out
                </Card>
                <Card title='Customer Service Rep, KCIC Hockey Rink' style={ cardStyle }>
                    Dealt with fights between hockey moms in between taking coworkers to the hospital and hiding in the back room from my "responsibilities"
                </Card>
            </div>
            <div>
                Resume doc will go here
            </div>
        </div>
    );
}

function MenuToLoad(props) {
    const menuState = props.menuState;

    if (menuState === 'projects') {
        return <Projects />;
    } else if(menuState === 'work-experience') {
        return <WorkExperience />;
    }
}

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
                <div style={ homeTitleSection }>
                    Maxwell Talley
                </div>
                <div style={ aboutSection }>
                    My name is Maxwell Talley. I am a software engineering student at Iowa State University. In my free time, I like to travel, camp, work on personal projects, hang out with friends, and learn new things. My ultimate career goal is to do something that helps to decrease suffering in the world, whether that be direct or indirectly.
                    <br />
                    <br />
                    <br />
                    My career goals include ......
                </div>
                <Menu
                    onClick={ this.handleClick }
                    selectedKeys={ [this.state.current] }
                    mode='horizontal'
                >
                    <Menu.Item key='projects'>Projects</Menu.Item>
                    <Menu.Item key='work-experience'>Work Experience</Menu.Item>
                </Menu>
                <MenuToLoad menuState={ this.state.current } />
            </div>
        );
    }
}

export default Home;
