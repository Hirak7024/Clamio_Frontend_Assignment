import React from 'react';
import LevelUpDebut from "../../Assets/LevelUp_Debut.jpg";
import LevelUpStar from "../../Assets/LevelUp_Star.jpg";
import LevelUpBoss from "../../Assets/LevelUp_Boss.jpg";
import "./LevelUp.scss";

export default function LevelUp() {
    return (
        <div className='LevelUp_MainContainer'>
            <h1>How to Level Up and Earn Rewards</h1>
            <ul className='BoxUnorderedList'>
                <li className='BoxUnorderedListItem'>
                    <img src={LevelUpDebut} alt="" />
                    <h2><p>CLAMIO</p> DEBUT</h2>
                    <ul className='insideBox_List'>
                        <li className='insideBox_List_Item'>1 Sale/ 1 Referral</li>
                    </ul>
                </li>
                <li className='BoxUnorderedListItem'>
                <img src={LevelUpStar} alt="" />
                    <h2><p>CLAMIO</p> STAR</h2>
                    <ul className='insideBox_List'>
                        <li className='insideBox_List_Item'>100 Sale/ 25 Referrals</li>
                        <li className='insideBox_List_Item'>Redeem your CLAMIO Coins</li>
                    </ul>
                </li>
                <li className='BoxUnorderedListItem'>
                <img src={LevelUpBoss} alt="" />
                    <h2><p>CLAMIO</p> BOSS</h2>
                    <ul className='insideBox_List'> 
                        <li className='insideBox_List_Item'>5000 Sales</li>
                        <li className='insideBox_List_Item'>Redeem Your Clamio Coins</li>
                        <li className='insideBox_List_Item'>4.5% Discount on Transactional Charges</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
