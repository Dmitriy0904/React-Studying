import React from "react";

export default class ProductRow extends React.Component{
    render(){
        const product = this.props.product;
        const stocked = product.stocked;
        const name = stocked ? (
          product.name
        ) : (
          <span style={{ color: "red" }}>{product.name}</span>
        );
        const price = product.price;
        
        return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        );
    }

}