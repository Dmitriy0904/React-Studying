import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import "./../App.css";

export default class FilterableProductTable extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}