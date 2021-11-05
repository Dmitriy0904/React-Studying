import React from "react";

export default class SwitchButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {isOn : true};
    }

    handleClick = () => {
        this.setState(prevState => ({ isOn: !prevState.isOn }));
    };

    render(){
        return <button onClick={this.handleClick}>
            {this.state.isOn ? "On" : "Off"}
        </button>
    }
}