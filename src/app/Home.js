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
    display: 'flex',
    textAlign: 'center',
    margin: 'auto',
    maxWidth: '900px',
    marginRight: '10px',
    marginLeft: '10px',
}

const cardContainer = {
    display: 'flex',
    flexWrap: 'wrap',
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
    marginBottom: '30px',
    flexSize: '200px',
}

function Projects() {
    return (
        <div>
            <h2 style={ sectionTitle }>
                PROJECTS WORKED ON
            </h2>
            <div style={ cardContainer }>
                <Card title='Toque' style={ cardStyle }>
                    Project built for Com S 309 at Iowa State University. This project was built entirely with Javascript using Express, Sequelize, React, and Redux. The purpose was to create a recipe sharing site where users could log on and create and view different recipes.
                    <br /><br />
                    The project repository can be viewed here: <a href="https://github.com/mrtalley/toque">https://github.com/mrtalley/toque</a>
                </Card>
                <Card title='dungeon-crawler' style={ cardStyle }>
                    Project built over the course of a semester for Com S 327. This project was a terminal-based dungeon crawler game similar to the old NetHack. This project was built in C and C++.
                    <br /><br />
                    Project repository can be viewed here: <a href="https://github.com/mrtalley/dungeon-crawler">https://github.com/mrtalley/dungeon-crawler</a>
                </Card>
                <Card title='GG' style={ cardStyle }>
                    Website being created for my friend Gretchen to showcase her different styles the different art styles she explores. This website is being created with React and Firebase as entirely frontend application.
                    <br/><br/>
                    The project repository can be viewed here: <a href="https://github.com/mrtalley/GG">https://github.com/mrtalley/GG</a>
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
                    <br /><br /><br />
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
