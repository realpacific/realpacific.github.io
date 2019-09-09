import React, {Component} from 'react';
import Img from 'react-image';
import Tilt from "react-parallax-tilt";


class Avatar extends Component {

    render() {
        return (
            <div className="item" aria-label="Avatar">
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true}>
                    <section id="avatar">
                        <Img className="avatar" src={this.props.src}/>
                    </section>
                </Tilt>
            </div>
        );
    }
}

export default Avatar
