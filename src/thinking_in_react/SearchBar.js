import React from "react";
import "./../App.css";

export default class SearchBar extends React.Component{

  handleFilterText = (event) => {
    this.props.onChangeFilterText(event.target.value);
  }

  handleStockedOnlyCheckbox = (event) => {
    this.props.onChangeStockedOnlyCheckbox();
  }

    render(){
      const filterText = this.props.filterText;
      const isStockedOnly = this.props.isStockedOnly;

        return (
          <form>
            <input className="input-field" type="text" placeholder="Search..." value={filterText} onChange={this.handleFilterText}/>
            <p>
              <input type="checkbox" checked={isStockedOnly} onChange={this.handleStockedOnlyCheckbox}/> Show only products in stock
            </p>
          </form>
        );
    }

};