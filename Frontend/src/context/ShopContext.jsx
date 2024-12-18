/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"


export const ShopContext = createContext();

const ShopContextWrapper = (props) => {
    // we'll create some global vairables which we can use throughout website , can also change in one click

    const currency = "$";
    const delivery_fee = 10;

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({});

    const navigate = useNavigate();


    const addToCart = (itemId, size) => {
        let cartData = structuredClone(cartItems);

        if (!size) {
            toast.error("Select Product Size");
            return;
        }

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
    }


    // to update cart value 
    const getCartCount = () => {
        let totalCount = 0;
        // 1st loop to iterate the items
        for (const items in cartItems) { // items = product
            // 2nd loop to iterate size of items / product
            for (const item in cartItems[items]) { // item = size
                const quantity = cartItems[items][item];
                // Check if the quantity is valid (greater than 0)
                if (quantity > 0) {
                    totalCount += quantity
                }
            }
        }
        return totalCount;
    };

    // to update cart  value after deleting the products from there
    const updateQuantity = (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);
    };


    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items)
            for (const item in cartItems[items]) {

                if (cartItems[items][item] > 0) {
                    totalAmount += itemInfo.price * cartItems[items][item];
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextWrapper;
