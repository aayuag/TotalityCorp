import React from 'react'

const ThirdCard = () => {
  return (
    <>
    
    
    <div class="row justify-content-start mt-4 mb-4 mx-4 background-green white-color" id='bluecard'>
      <div class="col-6" id='bluecard'>
        <img class='hero-img' src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81152.jpg' alt='starbucks-img' />
      </div>
      <div class="col-6 hero-card" id='bluecard'>
        <div className='hero-content'>
        <h1 className='h1-hero' id='third-heading'>
        Perfectly pumpkin
        </h1>
        <p className='hero-para'>Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold Brew.</p>
        <a className='hero-btn' id='third-btn'>Order Now</a>
        </div>
       
      </div>
    </div>
    
      </>
  )
}

export default ThirdCard