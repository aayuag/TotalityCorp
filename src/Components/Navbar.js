import React from 'react'

const Navbar = () => {
  return (
    <>
   <nav class="navbar navbar-expand-lg pt-4 ">
  <div class="container-fluid" id='starbucks'>
    <img class="navbar-brand lg-mr6" width='51px' height='51px' src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
        
      </span>
      
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ms-4">
          MENU
        </li>
        <li class="nav-item ms-4">
          REWARDS
        </li>
        
        <li class="nav-item ms-4">
          GIFT CARDS
        </li>
      </ul>
      <div>
        <span className='me-5 store'>Find A Store</span>
      <a className='hero-btn'>Sign In</a>

      <span className='me-2'>   </span>
      <a className='hero-btn navbarbtn'>Join Now</a>
      </div>
    </div>
  </div>
</nav>
<hr></hr>
</>
  )
}

export default Navbar