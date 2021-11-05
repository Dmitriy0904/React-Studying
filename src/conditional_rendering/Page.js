//Preventing Component from Rendering by returning null
import React from "react";
import "./../App.css";

function WarningBanner(props){
    if (!props.warn) {
      return null;
    }
    return(<div className="warning"> !WARNING!</div>);
}


export default class Page extends React.Component{

    constructor(props){
        super(props);
        this.state = {warn: props.warn};
    }


    handleTogleClick = () => {
        this.setState(state => ({warn: !state.warn}));
    };


    render(){
        return (
            <div>
                <WarningBanner warn={this.state.warn}/>
                <button onClick={this.handleTogleClick}>
                    {this.state.warn ? "Hide" : "Show"}
                </button>
            </div>
        );
    }


}