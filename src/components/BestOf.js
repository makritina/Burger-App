import React from "react"
import './BestOf.css'
import burgerphoto from "../images/amirali-mirhashemian.jpg";
import burgerphoto2 from "../images/israel-albornoz.jpg";
import burgerphoto3 from "../images/jean-claude.jpg"

const BestOf = () => {
    return(
        <div className="bestof container-fluid m-0 p-0">
           
        <h1> Best of <span>The Beef</span> </h1>
        
       <div className="row g-0" id="rowc">
       
           <div className="col-md-6 image"> 
           <img  className="img-fluid"src={burgerphoto} alt=""/>
           </div>
           <div className="col-md-6 mycol">
               <h2 id="goat">Goat Cheece</h2>
               <p>Oh my... GOAT Cheese & Truffle burger come to me!

Fresh beef burger 140gr., goat cheese, sautéed mushrooms , beer caramelized onions and truffle mayo sauce.</p>
<button type="button" className="btn " id="btn">Order Now</button>
           </div>
           
       </div>
       <div className="row g-0">
           <div className="col-md-6 mycol order-last  order-md-first" > 
           <h2 id="old">Old Boy</h2>
               <p>Our pretty amazing Old Boy Burger is xtraordinary as an Asian thriller!

Buttermilk Chicken, sriracha glaze, queso, mayo, sour cream, iceberg, cucumber, carrot, onion and… action!</p>
<button type="button" className="btn " id="btn">Order Now</button>
           </div>
           <div className="col-md-6 image order-first order-md-last" ><img className="img-fluid" src={burgerphoto2} alt=""/></div>
       </div>
       <div className="row g-0">
           <div className="col-md-6 image"><img className="img-fluid" src={burgerphoto3} alt=""/></div>
           <div className="col-md-6 mycol">
           <h2 id="dusty">Dusty Bastard</h2>
               <p>We talk dirty, but it's worth it.
But how else would you describe brioche bun with beef, bacon, cheddar, chipotle bbq sauce, beer caramelized onions, mayonnaise and iceberg?</p>
<button type="button" className="btn " id="btn">Order Now</button>
           </div>
       </div>
       
    </div>

    )
}

export default BestOf