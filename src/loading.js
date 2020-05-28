import React from "react";
import Landing from "./landing";

export default class Loading extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            done: undefined
        };
    }

    componentDidMount() {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => this.setState({ done: true }));
        }, 7000);
    }

    render(){
        return(
            <div>
                {!this.state.done ? (
                    <div className="Preimage">
                    <div className="blue">
                        <div className="item">
                        <img className="gif" src="./assets/img/loading.gif" alt="loading the website" />
                        </div>
                    </div>
                </div>
                ) : (
                    <Landing />)
                
                }
            </div>
        );
    }
}