/**
 *
 */
import React, {useEffect} from "react"
import "./card.css";
import "../styles/button.css";

const Card = () => {
    return (
        <div className="card__outer">
            <div className="card__inner">
                <h5>Card Title</h5>
                <p>Card Content</p>
                <button className="btn">Card Action</button>
            </div>
        </div>
    )
}

export default Card;
