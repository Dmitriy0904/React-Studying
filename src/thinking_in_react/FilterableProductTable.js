import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import "./../App.css";

export default class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        filterText: "", 
        isStockedOnly: false 
    };
  }


  render() {
    return (
      <div className="container">
        <SearchBar 
        filterText={this.state.filterText} 
        isStockedOnly={this.state.isStockedOnly} 
        />
        <ProductTable
          filterText={this.state.filterText}
          isStockedOnly={this.state.isStockedOnly}
          products={this.props.products}
        />
      </div>
    );
  }
}