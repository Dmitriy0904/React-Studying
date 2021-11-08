import React from "react";

export default class Input extends React.Component{


    render(){
        return (
            <div>
                <h3>{this.props.count}</h3>
                <button onClick={this.props.handleIncrement}>Increment</button>
                <button onClick={this.props.handleDecrement}>Decrement</button>
            </div>
        );
    }

};