import React, { useState } from 'react';
import search from '../../../assets/Images/man.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, handleAddToCart }) => {


    const { name, seller, category, img, ratings, price } = product;

    return (
        <div className="card w-72 bg-base-100 shadow-xl mb-4">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="font-semibold">{name}</h2>
                <p>Seller: {seller} <br /> Category: {category} <br /> Rating: {ratings} <br />Price: ${price}</p>
                <div className="">
                    <button onClick={() => handleAddToCart(product)} className="btn bg-[#FF99004D] w-full mt-4 ">Add To Cart <FontAwesomeIcon className='' icon={faShoppingCart} /> </button>
                </div>
            </div>
        </div>
    );
};

export default Product;