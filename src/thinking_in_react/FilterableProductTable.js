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

  handleChangeFilterText = (filterText) => {
    this.setState({filterText: filterText});
  };


    handleIsStockedOnlyCheckbox = () => {
            this.setState({isStockedOnly: !this.state.isStockedOnly});
    };


  render() {
    return (
      <div className="container">
        <SearchBar 
        filterText={this.state.filterText} 
        isStockedOnly={this.state.isStockedOnly}
        onChangeFilterText={this.handleChangeFilterText}
        onChangeStockedOnlyCheckbox={this.handleIsStockedOnlyCheckbox} 
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