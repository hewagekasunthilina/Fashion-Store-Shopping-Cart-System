import React from "react";
import milk from '../Images/milk.jpg'

import Template from "../Template/Template";

const AddToCart = (props) => {
    return (
        <Template>
            <div className="card" style="width: 18rem;">
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>

        </Template>
    )
};

export default AddToCart;