// We will use stateless components here(static)
import React, { useContext } from "react";
 import { CartContext } from "../context/GlobalContext";

export const Product = ({ product_item}) => {

    const {dispatch} = useContext(CartContext)
    // dispatch is from the CartContext


    // Function to handle adding a product to cart
    const addTocart = () => {
        dispatch ({type: 'ADD_TO_CART', payload : product_item})
        // dispatch gets the item and delivers it
    }
    return(
        <div className="product">
            <img src={product_item.image} alt={product_item.name} className="product-thumbnail" />
            
            <div className="details">
            <h3> {product_item.name} </h3>
            <p> {product_item.description} </p>
            <p> <b>${product_item.price}</b> </p>
            <p>In Stock: {product_item.stock} </p>
            <button className="btn" onClick={() => addTocart(product_item)}>Add to Cart</button>
            </div>
            
        </div>
    );
};



//import React from "react";

/*export const Product = ({ product_item }) => {
    return (
        <div className="product">
            <img src={product_item.thumbnail} alt={product_item.name} className="product-thumbnail" />
            <h3>{product_item.name}</h3>
            <p>{product_item.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};*/

//2nd method
// export const Product = ({ product_name, product_thumbnail, product_price }) => {

//     const  AddtoCart = () => {
//         dispatchEvent ({
//             type:'ADD_TO_CART', payload: product_name, product_price
//     })
//     }
//     return (
//         <div className="product">
//             <img src={product_thumbnail.thumbnail} alt={'name of product'} className="product-thumbnail" />
//             <h3>{product_name.name}</h3>
//             <p>{product_price.price}</p>
//             {/*Add the item to cart */}
//             <button onClick={AddtoCart}>Add to Cart</button>
//         </div>
//     );
// };
// payload is used to get items that u will add to d cart

// 3rd method
/*export const Product = ({ product_name, product_thumbnail, product_price, stock }) => {
// Function to handle adding a product to the cart
    const  addtoCart = () => {
        dispatch ({
            type:'ADD_TO_CART', payload: product_name, product_thumbnail, product_price, stock
    })
    }
    return (
        <div className="product">
            <img src={product_thumbnail} alt={product_name} className="product-thumbnail" />
            <h3>{product_name}</h3>
            <p>${product_price}</p>
            <p>In Stock:{stock}</p>
            {/*Add the item to cart }
            <button onClick={addtoCart}>Add to Cart</button>
        </div>
    );
};*/
