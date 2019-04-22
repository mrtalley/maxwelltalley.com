import React from 'react';
import { Card } from 'antd';

// Styles
import './assets/styles/card.scss';

class Projects extends React.Component {
    render() {
        return (
            <div>
                <h2 className="sectionTitle">
                    PROJECTS WORKED ON
            </h2>
                <div className="cardContainer">
                    <Card title='Toque' className="cardStyle">
                        Project built for Com S 309 at Iowa State University. This project was built entirely with Javascript using Express, Sequelize, React, and Redux. The purpose was to create a recipe sharing site where users could log on and create and view different recipes.
                    <br /><br />
                        The project repository can be viewed here: <a href="https://github.com/mrtalley/toque">https://github.com/mrtalley/toque</a>
                    </Card>
                    <Card title='dungeon-crawler' className="cardStyle">
                        Project built over the course of a semester for Com S 327. This project was a terminal-based dungeon crawler game similar to the old NetHack. This project was built in C and C++.
                    <br /><br />
                        Project repository can be viewed here: <a href="https://github.com/mrtalley/dungeon-crawler">https://github.com/mrtalley/dungeon-crawler</a>
                    </Card>
                    <Card title='GG' className="cardStyle">
                        Website being created for my friend Gretchen to showcase her different styles the different art styles she explores. This website is being created with React and Firebase as entirely frontend application.
                    <br /><br />
                        The project repository can be viewed here: <a href="https://github.com/mrtalley/GG">https://github.com/mrtalley/GG</a>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Projects;
