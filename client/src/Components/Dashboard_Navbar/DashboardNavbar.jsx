import React from 'react';
import { FaBell } from "react-icons/fa";
import "./DashboardNavbar.scss"

export default function DashboardNavbar() {
    return (
        <div className='DashboardNavbar_MainContainer'>
            <div className="elements">
                <ul>
                    <li>Go to Explore</li>
                    <li>Refer and Earn</li>
                    <li><FaBell id='BellIcon' /></li>
                </ul>
            </div>
        </div>
    )
}
