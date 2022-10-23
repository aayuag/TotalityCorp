import React from 'react'
import './style.css'

const FirstCard = () => {
  return (
    <>
   


  <div class="row justify-content-start mt-4 mb-4 mx-4 background-blue" id='bluecard'>
    <div class="col-6" id='bluecard'>
      <img class='hero-img' src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81151.jpg' alt='starbucks-img' />
    </div>
    <div class="col-6 hero-card" id='bluecard'>
      <div className='hero-content'>
      <h1 className='h1-hero h1-first'>
      Win a thousand Stars
      </h1>
      <p className='hero-para'>We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members in our Million Stars Giveaway and much more all week!*</p>
      <a className='hero-btn'>Play To Win</a>
      </div>
     
    </div>
  </div>
  
    </>
  )

   
}

export default FirstCard