import React from "react";
import "./../App.css";

export default class SearchBar extends React.Component{

    render(){
        return (
          <form>
            <input className="input-field" type="text" placeholder="Search..." />
            <p>
              <input type="checkbox" /> Show only products in stock
            </p>
          </form>
        );
    }

};