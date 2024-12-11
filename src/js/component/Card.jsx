import React from "react";

const Card = (props) => {

    return (

        <div className="card mb-4 align-content-center" style={{ width: '230px', objectFit: 'cover' }}>
            <img style={{ height: "200px" }} src={props.image} class="card-img" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Publish</a>
            </div>
        </div>


    )
}
export default Card;