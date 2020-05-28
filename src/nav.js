import React from "react";

export default class Nav extends React.Component {
    render(){
        return(
            <header className="menu">
                <nav className="menu-content">
                    <div className="logo">Alexwatto</div>
        
                    <ul id="menu">
                        <li>
                        <a href="#home">HOME</a>
                        </li>
                        <li>
                        <a href="#about-me">ABOUT ME</a>
                        </li>
                        <li>
                        <a href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li>
                        <a href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

}
