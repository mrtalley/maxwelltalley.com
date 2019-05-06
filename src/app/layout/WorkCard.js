import React from 'react';

import Badge from './Badge';

class WorkCard extends React.Component {
    constructor(props) {
        super(props);

        this.renderBadges = this.renderBadges.bind(this);
    }

    renderBadges() {
        let badges = [];

        for(var i = 0; i < this.props.tech.length; i++) {
            var cur = this.props.tech[i];

            badges.push(
                <Badge text={cur.content} color={cur.color} key={i} />
            )
        }

        return badges;
    }

    render() {
        return (
            <div className='card'>
                <div className='card-margin'>
                    <div className='card-body'>
                        <div className='card-title'>
                            <div className='title title-content'>{this.props.title}</div>
                            <div className='small-title title-content'>{this.props.company}</div>
                        </div>
                        <div className='small-title'>{this.props.date}</div>
                        <div className='body-text content-body'>
                            {/* Maybe make it so you can surround text in <WorkCard> and have it go to the body */}
                            {this.props.body}
                        </div>
                        <div className='small-title'>Technologies</div>
                        { this.renderBadges() }
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkCard;
