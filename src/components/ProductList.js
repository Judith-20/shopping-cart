import React from "react";
import {Product} from './Product';
import { product_data } from "../data";

// if u are using export in d code body u put {} in d Product but if u are using export default no need 4 {}

// mapping is used to loop tru or get all d elements in the array(product_data). here it is passed to product_data to get each element there
export const ProductItemList = () => { // after const it can be any name
    return(
        <div className="product-list">
        {/* get all the products in the array in product_data using the map() and display in the productitemlist.  */}
            {product_data.map(prod => (
            <Product key={prod.id} product_item = {prod}/>
            ) )}
        </div>
    )
};
// a parameter(here prod) must be passed wen using map and the prod here represent every item in the prouct_data.
// so prod rep all the products in product_data and product_item rep the remaining items in the product_data(prod)
// product used here is the parameter passed in the productlist(Product)

// 2nd method
// export const ProductItemList = () => {
//     return(
//         <div className="product-list">
//             {product_data.map(prod => (<Product key={prod.id} product_price = {prod} product_name = {prod} product_thumbnail = {prod}/>) )}
//         </div>
//     )
// };

// export const ProductItemList = () => {
//     return(
//         <div className="product-list">
//             {/* Map through product_data array in the data.js and render a product component for each item */}
//             {product_data.map(prod => (<Product key={prod.id} product_price = {prod.price} product_name = {prod.name} product_thumbnail = {prod.thumbnail} stock = {prod.stock}/>) )}
        
        
//         </div>
//     )
// };