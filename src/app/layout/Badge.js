import React from 'react';

import '../assets/styles/badge.scss';

class Badge extends React.Component {


    render() {
        return (
            <div className='badge-body'>
                <div className={'badge ' + this.props.color}>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Badge;
