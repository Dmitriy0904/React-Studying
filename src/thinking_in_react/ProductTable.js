import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import "./../App.css";

export default class ProductTable extends React.Component{

    render(){
        const filterText = this.props.filterText;
        const isStockedOnly = this.props.isStockedOnly;

        const rows = [];
        let lastCategory = null;

        const products = this.props.products;
        products.forEach(product => {
            
            if(!product.stocked && isStockedOnly){
                return;
            }

            if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
                return;
            }

            if(product.category !== lastCategory){
                rows.push(
                    <ProductCategoryRow product={product} />
                );
            }
            rows.push(<ProductRow product={product}/>)
            lastCategory = product.category;
        });

        return (
            <table className="table-content"> 
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }


}