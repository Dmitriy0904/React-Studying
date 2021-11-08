import React from "react";
import "./../App.css";

export default class SearchBar extends React.Component{

    render(){
      const filterText = this.props.filterText;
      const isStockedOnly = this.props.isStockedOnly;


        return (
          <form>
            <input className="input-field" type="text" placeholder="Search..." value={filterText}/>
            <p>
              <input type="checkbox" checked={isStockedOnly}/> Show only products in stock
            </p>
          </form>
        );
    }

};