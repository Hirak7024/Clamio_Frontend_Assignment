import React from 'react'
import Banner from '../../Components/Banner/Banner'
import GettingStarted from '../../Components/Getting_Started/GettingStarted'
import GettingReward from '../../Components/GettingReward/GettingReward'
import LevelUp from '../../Components/LevelUp/LevelUp'


export default function Homepage() {
  return (
    <div className='HomePage_Main_Container'>
      <Banner/>
      <GettingStarted/>
      <GettingReward/>
      <LevelUp/>
    </div>
  )
}
