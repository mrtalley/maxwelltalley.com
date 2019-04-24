import React from 'react';
import { Card, Typography } from 'antd';

import WorkCard from './layout/WorkCard';

// Styles
import './assets/styles/card.scss';
import './assets/styles/work-card.scss';

// json
import work from './assets/json/work.js';

const { Meta } = Card;
const { Title, Text } = Typography;

const badges = [
    {
        content: 'Javascript',
        color: 'black'
    },
    {
        content: 'React',
        color: 'blue'
    }
]



class Work extends React.Component {
    constructor(props) {
        super(props);

        this.renderWorkCards = this.renderWorkCards.bind(this);
    }

    renderWorkCards() {
        work.forEach((entry, i) => {
            // TODO: render the work cards
        });
    }

    render() {
        return (
            <div>
                <h2 className="sectionTitle">
                    WORK EXPERIENCE
                </h2>
                <div className="cardContainer">
                    <Card title='TA, Iowa State University' className="cardStyle">
                        ➔ Thoroughly and accurately relay instructions to students to ensure labs are done correctly. <br />
                        ➔ Use knowledge of C to clarify and answer questions to guarantee understanding of course work. <br />
                        ➔ Assist students outside of class with programming work to solidify understanding. <br />
                    </Card>
                    <Card title='Software Engineering Intern, Source Allies Inc.' className="cardStyle">
                        ➔ Generated revenue from a mobile-first customer base by redesigning the Adventureland Amusement Park website through collaboration with clients and teammates. <br />
                        ➔ Enhanced user experience while prioritizing speed and maintainability of codebase through use of technologies such as Amazon Web Services and Laravel. <br />
                        ➔ Designed and implemented a mobile application using React Native to vastly reduce cost and improve functionality of client’s asset tracking system. <br />

                    </Card>
                    <Card className="cardStyle">
                     {/* title='Barista, Mother Earth Coffee' */}

                        <Title level={2}>Barista, Mother Earth Coffee</Title>
                        <Title level={4}>June - August 2016</Title>
                        ➔ Ensured smooth execution of financial transactions for accurate record keeping. <br />
                        ➔ Applied communication skills to guarantee customer satisfaction. <br />
                    </Card>
                    <Card title='Customer Service Rep, KCIC Hockey Rink' className="cardStyle">
                        ➔ Ensured smooth execution of financial transactions for accurate record keeping. <br />
                        ➔ Applied communication skills to guarantee customer satisfaction. <br />
                        ➔ Assisted customers with concerns regarding equipment and the skating program to ensure repeated business. <br />
                    </Card>
                    <WorkCard
                        title='Barista'
                        company='Mother Earth Coffee'
                        date='June - August 2017'
                        body='this is the body'
                        tech={badges} />
                </div>
            </div>
        );
    }
}

export default Work;
