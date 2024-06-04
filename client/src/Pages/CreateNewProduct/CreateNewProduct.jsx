import React from 'react';
import DashboardSidebar from '../../Components/Dashboard_SideBar/DashboardSidebar';
import DashboardNavbar from '../../Components/Dashboard_Navbar/DashboardNavbar';
import { FaPlus } from "react-icons/fa6";
import "./CreateNewProduct.scss";
import ProductCategory from '../../Components/ProductCategoryCard/ProductCategory';

export default function CreateNewProduct() {
    return (
        <div className='CreateNewProduct_MainContainer'>
            <div className="left">
                <DashboardSidebar />
            </div>
            <div className="right">
                <div className="navbar_container">
                    <DashboardNavbar />
                </div>
                <div className="contents">
                    <h1 className='newProductTitle'>Create Something New</h1>
                    <div className="newProductDetailsBox">
                        <div className="left">
                            <h2 className='inputProductImgH1'>Input Product Image/Video</h2>
                            <div className="productImgInput">
                                <div id="box1">
                                    <FaPlus className='plusIcon' />
                                </div>
                                <div className="remainingBoxesContainer">
                                    <div className="blankImg">
                                        <FaPlus className='plusIcon' />
                                    </div>
                                    <div className="blankImg">
                                        <FaPlus className='plusIcon' />
                                    </div>
                                    <div className="blankImg">
                                        <FaPlus className='plusIcon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <h1 className="inputProductName">Input Product Name</h1>
                            <div className="inputArea">Input Area</div>
                            <h1 className="inputProductName">Input Product Description</h1>
                            <div className="inputArea2">Input Area</div>
                        </div>
                    </div>
                    <div className="inputProductCategoryContainer">
                        <h1 className="inputCategoryHeading">Input Product Category</h1>
                        <div className="inputProductsCategoryBox">
                            {Array.from({ length: 6 }, (_, index) => (
                                <ProductCategory key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
