import React from 'react'

const SecondCard = () => {
  return (
    <>
    
    
  <div class="row justify-content-start mt-4 mb-4 mx-4 background-blue" id='bluecard'>
    
    <div class="col-6 hero-card" id='bluecard'>
      <div className='second-hero'>
      <h2 className='h2-heading'>
      A new way to earn sips and trips
      </h2>
      <p className='para-second'>
      Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts to get:
      <ul className='ul-second'>
        <li>
        150 Stars + 500 miles when you link before 12/31
        </li>
        <li>
        Double Stars on Delta travel days
        </li>
        <li>
        1 mile per $1 spent at Starbucks (excludes taxes and gratuities)**
        </li>
      </ul>
      </p>
      <a className='hero-btn'>Link Accounts</a>
      </div>
     
    </div>
    <div class="col-6" id='bluecard'>
      <img class='hero-img' src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81104.jpg' alt='starbucks-img' />
    </div>
  </div>
  
    </>
  )
}


export default SecondCard