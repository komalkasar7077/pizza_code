import React from 'react';
import p3 from '../Resources/p3.jpg';
const Card = () => {
    return (
       <>
      <div className='container'>
      <div className='card'>
        <img src={p3} alt="pizza" className="container" height={150}/>
        <h5>Tommato Pizza</h5>
        <h5>150 RS.</h5>
        <button className='btn btn-info'>ADD</button>
        
        </div>
        
      </div>
      
       
       </>
    );
}

export default Card;
