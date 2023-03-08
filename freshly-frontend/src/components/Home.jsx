import React from 'react'
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import './Home.css'
import Login from './Login';
const Home = () => {
  return (
    <div>
    <div className='indexSection1'>
         <div className='indexLeftDiv'>
          <div  className='indexLeftDiv1'>
          <h1>Chef Cooked,</h1>
          <h1>Healty Meal</h1>
          <h1>Delivered to you</h1>

          </div>
          <div className='indexLeftDiv2'>
            <h1>See meals availabel in your area!</h1>

          </div>
         <div className='indexLeftDiv3'>
          <Login/>
         </div>
         <div className='indexLeftDiv4'>
            <h5>By continuing, you agree to our <NavLink to='home'>Terms and Privacy Policy</NavLink> </h5>
             <h5>&will receive emails from Freshly.</h5> 

          </div>
         </div>
         <div className='indexRightDiv'>
          <img className='rightDivImg' src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d9282e1d3e06c159fc47ad5_home_image-small.jpg"
           alt="" />
         </div>
    </div>
    <div className='indexSection2'>
      <div className='section2Div'>
        <h2>On the menu</h2>
        <div className='section3Div'>
        <p>Each Freshly meal is perfectly sized for 1 person to enjoy at 1 sitting. Our fully-prepared meals are delivered fresh, and ready to eat in 3 minutes.</p>
      </div>
      <div className='section4Div'>
        <div className='innerThumbnailDiv'>
          <img src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg" alt="" />
          <h4>Steak Peppercorn</h4>
        </div>
        <div className='innerThumbnailDiv'>
          <img src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063ff2f0de047bd1f169eb_production-meal-image-0a78bae3-2e0c-4ab7-b420-154ed262d4d0.jpeg" alt="" />
          <h4>Homestyle Chicken</h4>
        </div>
        <div className='innerThumbnailDiv'>
          <img src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063ff66931cb0700bd4c57_production-meal-image-2d69b7cf-1233-428f-a8b4-bc9f77559500.jpeg" alt="" />
        <h4>Cauliflower Shell Lamb Bolognese</h4>
        </div>
        <div className='innerThumbnailDiv'>
          <img src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063ffd26c6eb173ad723f7_production-meal-image-aba62473-4c2a-4708-a0c1-3ed792dc70c9.jpeg" alt="" />
        <h4>Sausage Baked Penne</h4>
        </div>
        <div className='innerThumbnailDiv'>
          <img src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6178215336559d4a0acb6735_production-meal-image-a9a473c8-c1e0-4b3e-a6f8-ffcbc4e8b21c.jpeg" alt="" />
        <h4>Savory-Sweet Chicken Teriyaki Bowl</h4>
        </div>
        <div className='innerThumbnailDiv'>
          <img src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640046931cb5d54bd5472_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpeg" alt="" />
        <h4>Protein-Packed Chicken Parm</h4>
        </div>
        
      </div>
      <div className='plansMenuBtnDiv'>
          <button > <NavLink className="btnLink" to='menu'> View Plans & Menu</NavLink></button>
        </div>
      </div>
     
    </div>
    <div className="indexsection3">
      <h2 className='section3'>Plans that work for you</h2>
      <h4 className='section3'>Choose from 4, 6, 8, 10, or 12 meals per week. You can change up your number of meals with every order if you’d like.</h4>
   <div className='indexsection3Div1'>
    <div>
      <h3 className='mealPlanText'>4 Meals</h3>
      <p className='mealPlanText'>per week</p>
      <h2 className='mealPlanText'>$11.79</h2>
    <button className='mealPlanBtn'>Choose</button> 
    </div>
    <div>
    <h3 className='mealPlanText'>6 Meals</h3>
      <p className='mealPlanText'>per week</p>
      <h2 className='mealPlanText'>$10.9</h2>
    <button className='mealPlanBtn'>Choose</button> 

    </div>
    <div>
    <h3 className='mealPlanText'>8 Meals</h3>
      <p className='mealPlanText'>per week</p>
      <h2 className='mealPlanText'>$9.79</h2>
    <button className='mealPlanBtn'>Choose</button> 

    </div>
    <div>
    <h3 className='mealPlanText'>10 Meals</h3>
      <p className='mealPlanText'>per week</p>
      <h2 className='mealPlanText'>$9.29</h2>
    <button className='mealPlanBtn'>Choose</button> 

    </div>
    <div>
    <h3 className='mealPlanText'>12 Meals</h3>
      <p className='mealPlanText'>per week</p>
      <h2 className='mealPlanText'>$9.69</h2>
    <button className='mealPlanBtn'>Choose</button> 

    </div>
    
   </div>
<p className='bottomText'>Shipping Added At Checkout</p>

    </div>
    <Footer/>
    </div>
  )
}

export default Home