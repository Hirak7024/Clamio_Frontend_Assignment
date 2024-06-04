import React, { useEffect } from 'react';
import DashboardSidebar from '../../Components/Dashboard_SideBar/DashboardSidebar';
import DashboardNavbar from '../../Components/Dashboard_Navbar/DashboardNavbar';
import SmallGraph from "../../Assets/carbon_analytics.jpg";
import Frame176 from "../../Assets/Frame 176.jpg";
import Star from "../../Assets/Star 4.jpg";
import Copy from "../../Assets/copy.jpg";
import FBLogo from "../../Assets/fbLogo.jpg";
import IGLogo from "../../Assets/IgLogo.jpg";
import WPLogo from "../../Assets/WpLogo.jpg";
import "./CreatedProduct.scss";
import ProductCardListing from '../../Components/ProductCardListing/ProductCardListing';
import { useLocation } from 'react-router-dom';

export default function CreatedProduct() {
    const ProductHighlights = ["Easy to Use", "Easy Returns", "Result in 10 days", "Google Certified"];
    const ProductListing = ["A", "B", "C", "D", "E", "F"];
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <div className='CreatedProduct_MainContainer'>
            <div className="left">
                <DashboardSidebar />
            </div>
            <div className="right">
                <div className="navbar_container">
                    <DashboardNavbar />
                </div>
                <div className="contents">
                    <div className="createdProductBox">
                        <h1 className='createdProductTitle'>Product A</h1>
                        <div className='editandGraphbox'>
                            <img src={SmallGraph} alt="" className='smallGraph' />
                            <button className="editBtn">Edit</button>
                        </div>
                    </div>
                    <div className="productDetailsBox">
                        <div className="left">
                            <img src={Frame176} alt="" className='frameImage' />
                        </div>
                        <div className="right">
                            <h1 className="detailsHead">Details:</h1>
                            <p className="detailspara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ad facere minima unde corrupti, assumenda doloribus rerum debitis distinctio sed dolor necessitatibus natus. Voluptatum, porro distinctio recusandae, nostrum eveniet magni accusamus quasi possimus error a corrupti amet. Odio consequatur quam, quisquam cum rerum repellendus modi eum quas esse consequuntur maiores, incidunt impedit natus eaque minus ad magni aliquid non saepe qui quo at. Laboriosam enim earum nobis consequuntur, eos adipisci fugiat suscipit debitis? Maxime, commodi, maiores id excepturi consequuntur ad, ab enim quae expedita pariatur quod cumque eaque fugiat odit cum dolorum quaerat vero? Iste reprehenderit molestiae distinctio praesentium.</p>
                            <p className="Price">Rs. 25</p>
                        </div>
                    </div>
                    <div className="ProductsHighlights">
                        <h1 className="productHighlightHeading">Product Highlights</h1>
                        <div className="highLightsContainer">
                            {ProductHighlights.map((highlights, index) => (
                                <div className="productHighlightItem" key={index}>
                                    <img src={Star} alt="" className="starImg" />
                                    <h2 className='productHighlightItem_Heading'>{highlights}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <h1 className="shareCreativity">Share Your Creativity:</h1>
                    <div className="linkBox">
                        <div className="box">http://Product1</div>
                        <img src={Copy} alt="" className="copyIcon" />
                    </div>
                    <div className="socialLinksBox">
                        <img src={FBLogo} alt="" className="socialLogos" />
                        <img src={IGLogo} alt="" className="socialLogos" />
                        <img src={WPLogo} alt="" className="socialLogos" />
                    </div>
                    <h1 className="productListing1">Product Listing:</h1>
                    <div className="ProductListingContainer">
                        {ProductListing.map((product, index) => (
                            <div key={index}>
                                <ProductCardListing product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
