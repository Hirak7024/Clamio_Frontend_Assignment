import React from 'react';
import "./Banner.scss";
import MoneyBag from "../../Assets/MoneyBag2.png";
export default function Banner() {
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
                <div className="left">
                    <div className="top">
                    <h1><p>CLAMIO</p> RERWARDS PROGRAM</h1>
                    <p>Refer CLAMIO to fellow creators or sell 100 Digital Products through CLAMIO, &</p>
                    <h2>earn Rs. 50000*</h2>
                    <button>View Dashboard</button>
                    </div>
                    <div className="bottom">
                        <p>*Terms and conditions Apply</p>
                    </div>
                </div>
                <div className="right">
                    <img src={MoneyBag} alt="" />
                </div>
            </div>
        </div>
    )
}
