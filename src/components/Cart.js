import React, {useContext} from "react";
import { CartItem } from "./CartItem";
import { CartContext } from "../context/GlobalContext";

// if u are not starting with div use an empty tag
export const Cart = () => {
    //use d cartcontext to get the current cart(the cart here is from the cartcontext.provider) state
    const { cart } = useContext(CartContext);

    return(
        <>
         
         <h1>Shopping Cart</h1>

        <div className='cart'>
            {/**ternary operation or conditional statement */}
            {cart.length === 0 ? (
            <p>The cart is empty.</p> 
        ) : (
            cart.map(item => (
            <CartItem key={item.id} item_from_cart = {item}/>
        ))
           )}
        </div>

        <p className='total'>
            Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)} 
            </p>
        </>
    )
}
//reduce is for maths(calculation) and it takes in two parameter(total,)
// a short hand way of writing if statement--- if judith === 'lady' ? 'perfect' : (else) 'bad'
// reduce is similar to map but while reduce is used to get a particular value frm an array and u pass in two parameters, map gets all d value.
// total + item.price * item.quantity. the plus sign here means dat we are assigning the value of item.price * item.quantity to total
// so d initial value of the total is 0 after the calculation the new value will be d total

// export const Cart = () => {
//     return(
//         <div className="cart">
            
//             <h2>Shopping Cart</h2>
//             {/**ternary operation or conditional statement */}
//             {product_data.length === 0 ?
//             <p>The cart is empty.</p> :

//             product_data.map(item => (<CartItem key={item.id} item_from_cart = {item}/>))


//             }
            
            

//             <p>Total: ${product_data.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
//         </div>
//     );
// };

