import React from "react"

function Card(props){
    const displayText =  (
        <div className="card--badge">
           ⭐ {props.stats.rating} ({props.stats.reviewCount})
        </div>
    )
    return(
        <div className="card">
          {displayText}
          <img src={props.coverImg} alt={props.title} className="card-image"></img>
         <div className="card-content">
                <span className="location">{props.location}</span>
                <h2 className="card-title">{props.title}</h2>
                <p className="para">{props.description}</p>
            </div>
        </div>
    )
}
export default Card