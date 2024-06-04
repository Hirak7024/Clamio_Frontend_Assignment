import React from 'react';
import MoneyBag from "../../Assets/MoneyBag2.png";
import { useNavigate } from 'react-router-dom';
import "./Banner.scss";


export default function Banner() {
    const navigate = useNavigate();
    return (
        <div className='Banner_Main_Container'>
            <nav>
                <div className="left">
                    <h1>Create and Sell</h1>
                </div>
                <div className="right">
                    <ul>
                        <li>COMMUNITY</li>
                        <li>EXPLORE</li>
                        <li>CREATORS</li>
                        <li>JOIN</li>
                    </ul>
                </div>
            </nav>
            <div className="banner">
                <div className="Bannerleft">
                    <div className="Bannertop">
                    <h1 className='BannerHeading' ><p>CLAMIO</p> RERWARDS PROGRAM</h1>
                    <p>Refer CLAMIO to fellow creators or sell 100 Digital Products through CLAMIO, &</p>
                    <h2>earn Rs. 50000*</h2>
                    <button onClick={()=>navigate("/dashboard/home")}>View Dashboard</button>
                    </div>
                    <div className="bottom">
                        <p className='bottomPara'>*Terms and conditions Apply</p>
                    </div>
                </div>
                <div className="right">
                    <img src={MoneyBag} alt="" />
                </div>
            </div>
        </div>
    )
}
