import React from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import HomeIcon from "../../Assets/HomeIcon2.png";
import DollarIcon from "../../Assets/DollarIcon.png";
import ProductIcon from "../../Assets/ProductIcon.png";
import RewardIcon from "../../Assets/RewardIcon.png";
import { useNavigate } from 'react-router-dom';
import "./DashboardSidebar.scss"

export default function DashboardSidebar() {
    const navigate = useNavigate();
    return (
        <div className='DashboardSidebar_MainContainer'>
            <div className="box">
                <div className="userCover"></div>
                <p>User Name <MdOutlineArrowDropDown id='downArrow' /></p>
            </div>
            <ul>
                <li onClick={()=>navigate("/dashboard/home")}><img src={HomeIcon} className="sideBarIcons" alt="" /> Home</li>
                <li onClick={()=>navigate("/dashboard/products")}><img src={ProductIcon} alt="" className="sideBarIcons" /> Product</li>
                <li onClick={()=>navigate("/dashboard/payouts")} ><img src={DollarIcon} alt="" className="sideBarIcons" /> Payouts</li>
                <li><img src={RewardIcon} alt="" className="sideBarIcons" /> Rewards</li>
            </ul>
        </div>
    )
}
