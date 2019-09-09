import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {Component} from 'react';

class SocialIcon extends Component {
    render() {
        const social = this.props.social;
        return (
            <a href={social.url} className="icon" data-tip={social.message}
               target={social.url.startsWith('http') ? '_blank' : '_self'}>
                <FontAwesomeIcon icon={social.icon} size={"2x"}
                                 color="white"/></a>
        );
    }
}


export default SocialIcon
