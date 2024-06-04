import React from 'react';
import EditBtn from "../../Assets/Edit.jpg";
import "./ProductCardListing.scss";

export default function ProductCardListing({ product }) {
    return (
        <div className='ProductCardListing_Container'>
            <div className="productImg"></div>
            <img className='editBtnImg' src={EditBtn} alt="" />
            <h2 className='productCardTitle'>Product {product}</h2>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit repudiandae nemo autem necessitatibus. Dolores molestiae natus quia in illo!</p>
        </div>
    );
}
