import React from "react";
import { useState } from 'react';
import {css} from "@emotion/css";
import './Quote.css'

const Quote = () => {

    const quotes = {
        0 : {
            client: "Awesome Client",
            quote: "Delicious burgers, lots of choices on the menu. friendly staff. Will definitely be back!"
        },
        1 : {
            client: "Sweet Client",
            quote: "Delicious food, perfect service and a great vegetarian/ vegan menu. Highly recommend"
        },
        2 : {
            client: "Kind Client",
            quote: "A busy Saturday night with clearly a couple parties in but staff very friendly and apologetic about a reasonable wait in all fairness. Excellent food in a lovely modern restaurant! We will be back for sure with friends!"
        },
        3 : {
            client: "Dope Client",
            quote: "Simply the best burger I've ever had,service was spot on the skin on fries with baconaise and crispy bits of bacon was to die for, I even ate a near full portion of those fries which my colleague couldn't finish."
        }
    }

    const [current, setCurrent] = useState(quotes[0])

    const [active, setActive] =useState(0)
    
    const handleSetClick = (event) => {
        setCurrent(quotes[event.target.getAttribute("data-quote")])
        setActive(event.target.getAttribute("data-quote"))
    }

    return(
        <div className="quote">
            <h1>Reviews</h1>
    
    <div className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 30rem;
        background-color:#C13730;
        padding: 20px 20px;
        border: 2px solid #C13730;
        border-radius:10px;
    
        

        p {
            text-align: center;
            margin-bottom: 20px;
            color: #fff;
        }
    `}>
       <p>{current.quote}</p>
       <p>{current.client}</p>
       <div className={css`
         display:flex;
         

         span {
             height: 20px;
             width: 20px;
             margin: 0 3px;
             display: flex;
             align-items: center;
             justify-content: center;
             cursor: pointer;
         }

         span::before{
             content: "";
             height: 6px;
             width: 6px;
             background-color: #d4d4d4;
             border-radius: 50%;
             transition: background-color 0.3s ease;
         }

         span:hover::before{
             background-color: #45454d;
         }

         span[data-quote="${active}"]::before{
            background-color: #45454d;
         }


       `}>
           {Object.keys(quotes).map(index => (
               <span
               onClick={event => handleSetClick(event)}
               data-quote= {index}
               key={index} 
               />
           ))}
       </div>
    </div>
    </div>
    )
}

export default Quote