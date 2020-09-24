import React from "react";

export default class Nav extends React.Component {
    render(){
        return(
            <header className="menu">

                <nav class="navbar navbar-light amber lighten-4 mb-4">

                    <a class="navbar-brand" href="#">Navbar</a>


                    <button class="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
                    aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="animated-icon1"><span></span><span></span><span></span></div>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent20">

                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>

                    </div>

                </nav>
                <nav className="menu-content">
                    <div className="logo">Alexwatto</div>
        
                    <ul id="menu">
                        <li>
                        <a className="nav" href="#home">HOME</a>
                        </li>
                        <li>
                        <a className="nav" href="#about-me">ABOUT ME</a>
                        </li>
                        <li>
                        <a className="nav" href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li>
                        <a className="nav" href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

}


