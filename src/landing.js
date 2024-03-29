import React from "react";
import FadeIn from "react-fade-in";
import Spotify from "./SpotifyComponents/spotify"
import PrevPlayed from "./SpotifyComponents/previous-played"

import About from "./about-me"
import Main from "./navbar"
//import MyWork from "./work"
import Construction from "./construction"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faLinkedin, faInstagram  } from '@fortawesome/free-brands-svg-icons';

//import SpotifyWebApi from 'spotify-web-api-js';
//const spotifyApi = new SpotifyWebApi();

library.add(faFacebookF); 

library.add(faTwitter); 

library.add(faGithub); 

library.add(faLinkedin);

library.add(faInstagram);



export default class Landing extends React.Component {
    render(){
        return(
            <div>
                <FadeIn>
                <div className="image">
                    <div className="landing">
                    <PrevPlayed />
                        <div className="content">
                        
                            <div className="centre">
                                <div className="NPHeader">I am currently listening to:</div>
                                <img src="./assets/img/logo_noText.svg" className="App-logo" alt="logo" />
                                <Spotify />
                                <div className="text">
                                    <h2>Alex &lsquo;Watto&lsquo; Watson</h2>
                                    <hr />
                                    <h3>My socials</h3>
                                    <div className="social">
                                        <a href="https://www.facebook.com/alexwatto" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon id="facebook" icon={['fab', 'facebook-f']} />
                                        </a>
                                        <a href="https://www.twitter.com/alexwatto" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon id="twitter" icon={['fab', 'twitter']} />
                                        </a>
                                        <a href="https://uk.linkedin.com/in/alex-watson-0a5538110" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon id="linkedin" icon={['fab', 'linkedin']} />
                                        </a>
                                        <a href="https://github.com/alexwatto" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon id="github" icon={['fab', 'github']} />
                                        
                                        </a>
                                        <a href="https://instagram.com/alexwatto" target="_blank" rel="noopener noreferrer">
                                        <div className="instagram-logo white">
                                            <FontAwesomeIcon id="instaWhite" icon={['fab', 'instagram']} className="instagram-logo white"/>
                                        </div>
                                        <div className="instagram-logo">
                                            <svg className="hidden" width="0" height="0" id="hide">
                                                <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                                                <stop stopColor="#fdf497" offset="0" />
                                                <stop stopColor="#fdf497" offset="0.05" />
                                                <stop stopColor="#fd5949" offset="0.45" />
                                                <stop stopColor="#d6249f" offset="0.6" />
                                                <stop stopColor="#285AEB" offset="0.9" />
                                                </radialGradient>
                                            </svg>
                                        </div>
                                        
                                        </a>
                                    </div>
                                    <p className="land-intro">
                                        Hello and welcome to my portfolio
                                        <br />
                                    </p>
                                    <div className="scroll-down"></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Main />
                <About />
                <Construction />
                </FadeIn>
                <div className="instagram-logo">
                    <svg className="hidden" width="0" height="0" id="hide">
                        <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                        <stop stopColor="#fdf497" offset="0" />
                        <stop stopColor="#fdf497" offset="0.05" />
                        <stop stopColor="#fd5949" offset="0.45" />
                        <stop stopColor="#d6249f" offset="0.6" />
                        <stop stopColor="#285AEB" offset="0.9" />
                        </radialGradient>
                    </svg>
                </div>
            </div>
            
        );
    }

}
