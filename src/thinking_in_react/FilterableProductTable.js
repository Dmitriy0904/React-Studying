import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import "./../App.css";


/*
Example of input
const products = [
  {category: 'Sporting Goods', price: '49.99$', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '9.99$', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '29.99$', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '99.99$', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '399.99$', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '199.99$', stocked: true, name: 'Nexus 7'}
];
*/

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