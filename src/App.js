import React, {Component} from 'react';
import './App.css';
import TypeWriter from "./components/TypeWriter";
import {faGithub, faGoogle, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons'
import ReactTooltip from 'react-tooltip'
import Avatar from "./components/Avatar";
import SocialIcon from "./components/SocialIcon";
import Particles from 'react-particles-js';
import GlitchEffect from 'react-glitch-effect';

const particlesParams = require('./config/particles')

class Social {
    constructor(name, url, icon, message) {
        this.name = name;
        this.url = url;
        this.icon = icon;
        this.message = message;
    }
}

const Author = {
    name: "PRASHANT BARAHI",
    image: "https://avatars3.githubusercontent.com/u/25506584?s=460&v=4",
    social: [
        new Social("Gmail", "mailto: prashantbarahi@gmail.com", faGoogle, "Contact me"),
        new Social("GitHub", "https://github.com/realpacific", faGithub, "Fork GitHub"),
        new Social("Medium", "https://medium.com/@prashantbarahi", faMedium, "Read blogs"),
        new Social("LinkedIn", "https://www.linkedin.com/in/prashant-barahi-b83438139/", faLinkedin, "View Profile")
    ]
}

function createSocialIcons() {
    let icons = [];
    Author.social.forEach(s => {
        icons.push(<SocialIcon social={s}/>);
    });
    return icons;
}


class App extends Component {


    render() {
        if (window.innerWidth < window.innerHeight) {
            particlesParams.particles.number.value = 20;
        }

        return (
            <div>
                <Particles className="landingpage particles" params={particlesParams}/>
                <div className="landingpage">
                    <div className="grid-container autocenter fivetoseven" role="main">
                        <Avatar src={Author.image}/>
                        <div className="grid-container full autocenter">
                            <section id="bio" aria-label="Biography">
                                <GlitchEffect duration={'2s'}>
                                    <h1 className="h3-like" aria-level="1" aria-label="Name">
                                        PRASHANT BARAHI
                                    </h1>
                                </GlitchEffect>
                                <h3 className="subtitle" aria-level="1" aria-label="Name">
                                    @realpacific
                                </h3>
                                <h3 className='subtitle'>Kathmandu, Nepal</h3>
                            </section>
                            <section>
                                <h5 className="App-code" id="typewriter"><TypeWriter/></h5>
                            </section>
                            <section>
                                <div className="icons" aria-label="Links">
                                    {createSocialIcons()}
                                    <ReactTooltip place="bottom" type="light" effect="solid"/>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;
