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
            this.setState({
                done: true
          })
        }, 6000);
    }

    render(){
        return( 
            <div>
                {!this.state.done ? (
                    <div className="Preimage">
                    <div className="blue">
                        <div className="item">
                        <div className="gif" alt="loading the website" />
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