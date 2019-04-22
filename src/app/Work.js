import React from 'react';
import { Card } from 'antd';

class Work extends React.Component {
    render() {
        return (
            <div>
                <h2 className="sectionTitle">
                    WORK EXPERIENCE
                </h2>
                <div className="cardContainer">
                    <Card title='TA, Iowa State University' className="cardStyle">
                        I was a TA!
                </Card>
                    <Card title='Software Engineering Intern, Source Allies Inc.' className="cardStyle">
                        I typed nonsense into a computer and magic came out
                </Card>
                    <Card title='Customer Service Rep, KCIC Hockey Rink' className="cardStyle">
                        Dealt with fights between hockey moms in between taking coworkers to the hospital and hiding in the back room from my "responsibilities"
                </Card>
                </div>
                <div>
                    Resume doc will go here
                </div>
            </div>
        );
    }
}

export default Work;
