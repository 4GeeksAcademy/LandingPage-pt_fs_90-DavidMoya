import React from "react";
import Card from "./Card";

const Jumbotron = () => {
    return (
        
            <div className="card mt-3 mb-3 bg-body-secondary" >
                <div className="card-body">
                    <h1 className="card-title">Mi primer trabajo con jsx </h1>
                    <p className="card-text">He tardado más de lo esperado, muchos dolores de cabeza y atascos.<br></br>Aprendo despacio pero aprendo.</p>
                    <button className="btn btn-primary btn-lg" type="button">
                        <a href="#" className="card-link text-white">Brain Explode</a>
                    </button>
                </div>
            </div>
        

    )
}
export default Jumbotron;