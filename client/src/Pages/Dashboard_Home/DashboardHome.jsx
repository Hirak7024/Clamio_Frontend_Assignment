import React from 'react';
import DashboardSidebar from '../../Components/Dashboard_SideBar/DashboardSidebar';
import DashboardNavbar from '../../Components/Dashboard_Navbar/DashboardNavbar';
import { ImPlus } from "react-icons/im";
import Graph1 from "../../Assets/Block (1).jpg"
import "./DashboardHome.scss";

export default function DashboardHome() {
    return (
        <div className='DashboardHome_MainContainer'>
            <div className="left">
                <DashboardSidebar />
            </div>
            <div className="right">
                <div className="navbar_container">
                    <DashboardNavbar />
                </div>
                <div className="contents">
                    <h1>It't time to create something</h1>
                    <div className="createProductBox">
                        <ImPlus id='plusIcon'/>
                        <button>Create Your Product</button>
                    </div>
                    <h2>Analytics</h2>
                    <img src={Graph1} alt="" />
                </div>
            </div>
        </div>
    )
}
