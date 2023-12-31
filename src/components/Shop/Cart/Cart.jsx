import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = ({ cart, clearAddToCart }) => {

    let quantity = 0;
    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + tax + shipping;


    return (
        <div>
            <h4 className='text-2xl text-center m-4'>Order Summary</h4>
            <div className='ms-4 pe-4'>
                <p className='mt-3 text-[#2A414F]'>Selected Items: {quantity}</p>
                <p className='mt-3 text-[#2A414F]'>Total Price: ${total}</p>
                <p className='mt-3 text-[#2A414F]'>Total Shipping Charge: ${shipping}</p>
                <p className='mt-3 text-[#2A414F]'>Tax: ${tax}</p>
                <p className='mt-3 text-black font-semibold'>Grand Total: ${grandTotal}</p>
                <button onClick={clearAddToCart} className='btn btn-sm bg-red-500 border-0 text-white mt-3 w-full'>Clear Cart <FontAwesomeIcon className='ms-4' icon={faTrash} /></button>
                <br />
                <button className='btn btn-sm bg-orange-500 border-0 text-white mt-3 w-full'>Review Order <FontAwesomeIcon className='ms-4' icon={faArrowRight} /></button>
            </div>

        </div>
    );
};

export default Cart;