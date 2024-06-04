import React from 'react';
import SignIn_Icon from "../../Assets/SignInIcon.png"
import ViewRewards_Icon from "../../Assets/ViewRewardsIcon.png";
import EarnPoints_Icon from "../../Assets/EarnPointsIcons.png";
import "./GettingStarted.scss"

export default function GettingStarted() {
  return (
    <div className='Getting_Started_Main_Container'>
      <h1>Getting Started is Easy</h1>
      <ul>
        <li>
            <div className="icon">
                <img src={SignIn_Icon} alt="" />
            </div>
            <h2>Sign in</h2>
            <p>Get Registered through CLAMIO with ZERO Registration Charges</p>
            </li>
        <li>
        <div className="icon">
                <img src={ViewRewards_Icon} alt="" />
            </div>
            <h2>View Rewards</h2>
            <p>Get access to your personalised rewards dashboard</p>
        </li>
        <li>
        <div className="icon">
                <img src={EarnPoints_Icon} alt="" />
            </div>
            <h2>Earn Points</h2>
            <p>Earn Clamio reward points on every referral and product sell</p>
        </li>
      </ul>
      <button>START SELLING</button>
    </div>
  )
}
