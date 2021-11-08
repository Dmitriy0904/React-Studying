import React from "react";

export default class ProductCategoryRow extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <tr>
        <th colSpan="2">{product.category}</th>
      </tr>
    );
  }
};