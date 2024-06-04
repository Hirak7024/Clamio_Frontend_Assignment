import React from 'react';
import DashboardSidebar from '../../Components/Dashboard_SideBar/DashboardSidebar';
import DashboardNavbar from '../../Components/Dashboard_Navbar/DashboardNavbar';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { Products } from '../../ProductListing.js';
import "./DashboardProduct.scss";

export default function DashboardProduct() {
    return (
        <div className='DashboardProduct_MainContainer'>
            <div className="left">
                <DashboardSidebar />
            </div>
            <div className="right">
                <div className="navbar_container">
                    <DashboardNavbar />
                </div>
                <div className="contents">
                    <h1>Product Listing: </h1>
                    <div className="productsContainer">
                        {Products.map((product, index) => (
                            <div key={index}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
