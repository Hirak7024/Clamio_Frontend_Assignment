import React from 'react';
import Bro from "../../Assets/bro.jpg";
import Pana from "../../Assets/pana.png";
import "./GettingReward.scss";

export default function GettingReward() {
    return (
        <div className='GettingReward_MainContainer'>
            <h1>Getting Reward is Easy</h1>
            <div className="box">
                <div className="left">
                    <h2>Refer to Creators</h2>
                    <p>On every successfull referal you will earn 500 CLAMIO Reward Coins.
                        <br/>Every 100 Coin = Rs. 1</p>
                    <img src={Bro} alt="" />
                </div>
                <div className="right">
                    <img src={Pana} alt="" />
                    <h2>Sell 100 Products</h2>
                    <p>On every successful sale of 100 Product you will earn  10,000 CLAMIO Reward Coins.
                        <br/>Every 100 Coin = Rs. 1
                    </p>
                </div>

            </div>
        </div>
    )
}
