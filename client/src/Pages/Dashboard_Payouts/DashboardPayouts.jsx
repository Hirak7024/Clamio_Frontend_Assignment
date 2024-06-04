import React from 'react';
import DashboardSidebar from '../../Components/Dashboard_SideBar/DashboardSidebar';
import DashboardNavbar from '../../Components/Dashboard_Navbar/DashboardNavbar';
import Graph2 from "../../Assets/Block.jpg"
import "./DashboardPayouts.scss";

export default function DashboardPayouts() {
    return (
        <div className='DashboardPayouts_MainContainer'>
            <div className="left">
                <DashboardSidebar />
            </div>
            <div className="right">
                <div className="navbar_container">
                    <DashboardNavbar />
                </div>
                <div className="contents">
                    <div className="box">
                        <h1 className='PayoutsHead'>Payouts</h1>
                        <button className='settingsBtn'>Settings</button>
                    </div>
                    <div className="payoutCardBoxes">
                        <div className="payoutCard_Box">
                            <h2 className='payoutCard_Box_h2'>Last 7 Days</h2>
                            <h1 className='payoutCard_Box_h1'>Rs. 25</h1>
                        </div>
                        <div className="payoutCard_Box">
                            <h2 className='payoutCard_Box_h2'>Last 30 Days</h2>
                            <h1  className='payoutCard_Box_h1'>Rs. 700</h1>
                        </div>
                        <div className="payoutCard_Box">
                            <h2 className='payoutCard_Box_h2'>Total Earnings</h2>
                            <h1  className='payoutCard_Box_h1'>Rs. 5977</h1>
                        </div>
                    </div>
                    <h1 className="PayoutsHistoryTitle">Payouts History:</h1>
                    <img className='graph2' src={Graph2} alt="" />
                </div>
            </div>
        </div>
    )
}

