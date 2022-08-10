import React from 'react'

import pizza from  '../Resources/p4.png'
import Card from './card'

export default function Heros() {
  return (
    <>
     <div className="hero d-flex">
        <div className="left_side d-flex  align-items-center  justify-content-center-flex-column" >
           <h1 className='text-secondary'>
            Welcome to pizza Store
           </h1>
           <button className='btn btn-info'> Explore </button>
        </div>
        <div className='right_side align-items-center  justify-content-center-flex-column' >
        <img src={pizza} alt="" height={400}/>
        </div>
    </div>
    <hr />
    <div className='box'>
    <Card/>
    <Card/>
    <Card/>
    
    <Card/>
    <Card/>
    <Card/>
   
    <Card/>
    <Card/>
    <Card/>
    </div>
    
    
    

    </>
   
  
  )
}
