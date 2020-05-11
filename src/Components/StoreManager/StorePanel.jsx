import React, {Component} from "react";
import Template from "../Template/Template";

class StorePanel extends Component {
    render() {
        return(
        <Template>
            <div class='header' style={{textAlign: 'center', marginTop: '1.5rem', fontFamily: 'Lucida Console", Courier, monospace', fontWeight: 'bold', color: '#6b0505'}}>
                <h1>Store Managing Panel</h1>
            </div>
            <div class='storePanel' style={{marginLeft: '10%', marginRight: '10%', marginTop: '3%'}}>
                <div class="card text-white bg-secondary mb-3">
                  <div class="card-body text-success">
                    <div className="row">
                        <div className="col-md-4" style={{marginLeft: '12%', marginTop: '1%', marginRight: '10%'}}>
                            <div className="card text-white bg-danger mb-3" style={{maxWidth: '20rem'}}>
                                <div className="card-header" style={{textAlign: 'center'}}>
                                    <img class="card-img-top" src="https://www.fashionbug.lk/wp-content/uploads/2019/10/Fbug_Web_compressed.jpg" alt="Card image cap"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title" style={{textAlign: 'center'}}>Add New Products</h5>
                                    <p className="card-text" style={{textAlign: 'center'}}>You can add new products and product details to relevant categories</p>
                                </div>
                                <div class="card-footer bg-transparent border-secondary">
                                    <a href="/AddProduct" className="btn btn-primary"  style={{width: '17rem'}}>Click Here</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" style={{marginRight: '10%', marginTop: '1%'}}>
                            <div className="card text-white bg-warning mb-3" style={{maxWidth: '20rem'}}>
                                <div className="card-header" style={{textAlign: 'center'}}>
                                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsJAIUnoIHu7lm00CEHoVQ4ozf8fxDwpeJspag3wg67CHRyMOs&usqp=CAU" alt="Card image cap"/>
                                </div>
                                <div className="card-body">
                                     <h5 className="card-title" style={{textAlign: 'center'}}>View Products</h5>
                                     <p className="card-text" style={{textAlign: 'center'}}>You can view all the products you have added recently</p>
                                </div>
                                <div class="card-footer bg-transparent border-secondary">
                                     <a href="/AddCategory" className="btn btn-success"  style={{width: '17rem'}}>Click Here</a>
                                </div>
                            </div>
                        </div>

                    </div>
                  </div>
                </div>
            </div>
        </Template>
        )
    }
}

export default StorePanel;
