//global context will handle the whole state.the action dat is going to be performed
import React, {createContext, useReducer} from "react";
//import { product_data } from "../data";

//Create a context 4 the cart & assign it to variable
export const CartContext = createContext();

// Reducer function to handle cart state changes of the product
const CartReducer = (state, action) => {
    // switch (action.type) {

    //    case 'ADD_TO_CART': // Action to add to cart
    //          if (action.payload.stock > 0){
    //             return [...state, {...action.payload, quantity : 1 }]; 
    //        }else{
    //            alert('Out Of Stock!');
    //          };

             switch (action.type) {
                case 'ADD_TO_CART':
                    const existingItem = state.find(item => item.id === action.payload.id);
                    if (existingItem) {
                        if (existingItem.quantity < action.payload.stock) {
                            return state.map(item =>
                                item.id === action.payload.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            );
                        } else {
                            alert('Out Of Stock!');
                            return state;
                        }
                    } else {
                        if (action.payload.stock > 0) {
                            return [...state, { ...action.payload, quantity: 1 }];
                        } else {
                            alert('Out Of Stock!');
                            return state;
                        }
                    }
        
        
            //  case 'ADD_TO_CART':
            // if (state.some(item => item.id === action.payload.id)) {
            //     return state.map(item => 
            //         item.id === action.payload.id 
            //             ? { ...item, quantity: item.quantity + 1 } 
            //             : item
            //     );
            // }

// the above checks wen a user click on the add to cart of a particular product, it checks if the item is still in stock
// if yes, it returns the product, add a quantity to it and give it 1 if no, it gives an alert'out of stock'

// ... means if d item is not dere create a new one but if its there just update it
//...state means to create/append/update/return a new state which was in the shelf initially but now it is in the cart.
// action is d type of action(for here d action type is to add to cart). payload is all the items passed into the parameter
// (product_item eg name img, price, descriptn etc). ...action is a new action like d state and a new item (quantity) is added to it ad then give it 1
                


      case 'REMOVE_FROM_CART': // Action to remove a product from cart
           return state.filter(item => item.id !== action.payload.id);
// the action type is to remove from cart. so wen this clicked, it returns the current state(w/c z in cart) and filters and removes the item from others

       case 'INCREMENT_QUANTITY':// Action to Increment a product Quantitty in cart
       const existItem = state.find(item => item.id === action.payload.id);
                    if (existItem) {
                        if (existItem.quantity < action.payload.stock) {
                            return state.map(item =>
                                item.id === action.payload.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            );
                        } else {
                            alert('Out Of Stock!');
                            return state;
                        }}
            //return state.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1 }: item)
// the action is to increment quantity. wen clicked it returns the current state and map with d parameter item loops tru
// and using the ternary method checks if d id of d item has d same id as d one being clicked(action performed). if yes,
//append a new item and update the quantity(already created above), increasing it by 1. if no(else :), return just d not d clicked one item ( this occurs rarely).

        case 'DECREMENT_QUANTITY': // Action to DECREMENT a product Quantity in cart
            return state.map(item => 
               item.id === action.payload.id && item.quantity>1 ? {...item, quantity: item.quantity - 1} : item
             )
             //.filter(item => item.quantity > 0);
// same with the increment but here it reduces by one and using filter it removes the item from the cart.

        case 'SET_CART': 
            return action.payload;

        default:
            return state;

    };
 };

// Provider provides all the logic written here(in d CartReducer) for all the oda children(components) to be able to utilize it
 export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(CartReducer, []);
//[] means everytin written here will be passed into an array(d initial one created- product_data)

     return(
         <CartContext.Provider value={{cart, dispatch}}>
             {children}
        </CartContext.Provider>
    );
 };
 // dispatch gets the item and delivers it

//define a cart reducer function(handles all d logic). it takes in two parameters(state, action)
// action is d type of action u want to perform(eg type = ADD_TO_CART)
//to write conditional statement u can use the ternary method switch ( similar to d ternary way of if else statement). it is used to switch btw diff action type as shown below

// Reducer function to handle cart state changes of the product

// state here is d item dat has been added to the cart, everything here talks abt d items in the cart
// to check if d item being added to the cart is in stock
// Action or logic to add products to cart. find is used to search for e.g d item id is = to the item id coming into d
// cart from product.js- payload(cos the dipatch event sends everytin to the globalcontext.js).
// the ifs here is dat if the first is true(ItemInCart) then move on to run the next one 
// payload is d item coming from the data.js to d cart
// the action here happens wen u click on d cart

//          const ItemInCart = state.find(item => item.id === action.payload.id);

//          if (ItemInCart) {
//             if (ItemInCart.quantity < action.payload.stock) {
// // ternary(? is used to like if this(here, if item.id === action.payload.id), then this, else(:)) way of writing if statement(conditional statement). (... is used here to concatenate and push something into d array(product_data-data.js))
//                 return state.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1 }: item )
// // for the above code. if an item is present in the cart,check if it is less than the total no in stock. if true, return this and in d return,
// // check if d id is equal to action.payload.id, then perform this({...item, quantity: item.quantity + 1 } else jus return the item without performing anytin)
//             }
//          }

