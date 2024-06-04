import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import EditBtn from "../../Assets/Edit.jpg";
import "./ProductCard.scss";

export default function ProductCard({ product }) {
    return (
        <div className='ProductCard_Container'>
            <div className="productImg"></div>
            <img className='editBtnImg' src={EditBtn} alt="" />
            <h2 className='productCardTitle'>{product.Title}</h2>
            <div className="rating">
                <div className="stars">
                    {Array.from({ length: 5 }, (_, index) => (
                        <IoStarSharp key={index} />
                    ))}
                </div>
                <p className='rates'>{product.Rating} ({product.Number_Of_Ratings})</p>
            </div>
            <p className="desc">{product.Description}</p>
        </div>
    );
}
