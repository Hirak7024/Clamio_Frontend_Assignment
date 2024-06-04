import React from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import HomeIcon from "../../Assets/HomeIcon2.png";
import DollarIcon from "../../Assets/DollarIcon.png";
import ProductIcon from "../../Assets/ProductIcon.png";
import RewardIcon from "../../Assets/RewardIcon.png";
import "./DashboardSidebar.scss"

export default function DashboardSidebar() {
    return (
        <div className='DashboardSidebar_MainContainer'>
            <div className="box">
                <div className="userCover"></div>
                <p>User Name <MdOutlineArrowDropDown id='downArrow' /></p>
            </div>
            <ul>
                <li><img src={HomeIcon} className="sideBarIcons" alt="" /> Home</li>
                <li><img src={ProductIcon} alt="" className="sideBarIcons" /> Product</li>
                <li><img src={DollarIcon} alt="" className="sideBarIcons" /> Payouts</li>
                <li><img src={RewardIcon} alt="" className="sideBarIcons" /> Rewards</li>
            </ul>
        </div>
    )
}
