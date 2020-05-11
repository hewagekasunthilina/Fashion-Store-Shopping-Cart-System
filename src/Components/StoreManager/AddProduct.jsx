import React, {Component} from "react";
import Template from "../Template/Template";

class AddProduct extends Component {

    constructor(props) {
            super(props);
            this.state = {
                product_code: '',
                product_name: '',
                product_description: '',
                product_cat: '',
                product_qty: '',
                product_price: ''
            };

            this.handleProductCodeChange = this.handleProductCodeChange.bind(this);
            this.handleProductNameChange = this.handleProductNameChange.bind(this);
            this.handleProductDescriptionChange = this.handleProductDescriptionChange.bind(this);
            this.handleProductCategoryChange = this.handleProductCategoryChange.bind(this);
            this.handleProductQuantityChange = this.handleProductQuantityChange.bind(this);
            this.handleProductPriceChange = this.handleProductPriceChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }

        handleProductCodeChange(e) {
            this.setState({
                    product_code: e.target.value
                },
                () => {
                });
        }

        handleProductNameChange(e) {
            this.setState({
                    product_name: e.target.value
                },
                () => {
                });
        }

        handleProductDescriptionChange(e) {
            this.setState({
                    product_description: e.target.value
                },
                () => {
                });
        }

        handleProductCategoryChange(e) {
            this.setState({
                    product_cat: e.target.value
                },
                () => {
                });
        }

        handleProductQuantityChange(e) {
            this.setState({
                    product_qty: e.target.value
                },
                () => {
                });
        }

        handleProductPriceChange(e) {
            this.setState({
                    product_price: e.target.value
                },
                () => {
                });
        }

        handleSubmit = async (e) => {
                e.preventDefault();
                const productObject = {
                    product_code: this.state.product_code,
                    product_name: this.state.product_name,
                    product_description: this.state.product_description,
                    product_cat: this.state.product_cat,
                    product_qty: this.state.product_qty,
                    product_price: this.state.product_price,
                };


                this.setState({
                    product_code: '',
                    product_name: '',
                    product_description: '',
                    product_cat: '',
                    product_qty: '',
                    product_price: ''
                });


                const response = await fetch("http://localhost:4000/api/product", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(productObject)
                });

                const responseData = await response.json();
                console.log(responseData);
                console.log(productObject);
        };


    render() {
        return(
            <div class="card text-white bg-link mb-3" style={{marginLeft: '5%', marginRight: '5%', marginTop: '1%'}}>
              <div class="card-header">
                    <h3 class="card-title" style={{textAlign: 'center', fontFamily: 'Lucida Console", Courier, monospace', fontWeight: 'bold', color: '#6b0505'}}>ADD PRODUCTS</h3>
              </div>

              <div className="row">

                <div className="col-md-3">
                    <img class="card-img-top" src="https://lh3.googleusercontent.com/proxy/dEl7S9MmAcGCjB0wTu1ZG89N9Rr6mUv1V0HtZMgH-yAKmJKJXARLIf-L5oZlbU4hurqept-ONnGUC0vSCpA7ycTu1oG4cDYfDCOGP4xPOxZssQb16jA0DA-_2H52hWusuDEhodyk3_xqO6ibg0ezJraG-H9W-UA" alt="Card image cap" style={{maxWidth: '20rem', maxHeight: '24rem', marginTop: '25%', marginLeft: '10%'}}/>
                </div>

                <div className="col-md-6">
                   <div class="card-body">
                        <div class="card text-white bg-info mb-3" style={{marginTop: '2%'}}>
                        <div class="card-body text-dark">
                            <form onSubmit={this.handleSubmit} action="/Backend/Routes/Fashion.routes.js" method="POST">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="product_code">Product Code</label>
                                        <input type="text"
                                            class="form-control"
                                            id="product_code"
                                            onChange={this.handleProductCodeChange}
                                            value={this.state.product_code}
                                        />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="product_name">Product Name</label>
                                        <input type="text"
                                            class="form-control"
                                            id="product_name"
                                            onChange={this.handleProductNameChange}
                                            value={this.state.product_name}
                                        />
                                    </div>
                              </div>

                              <div class="form-group">
                                  <label for="product_description">Product Description</label>
                                  <input type="text"
                                        class="form-control"
                                        id="product_description"
                                        onChange={this.handleProductDescriptionChange}
                                        value={this.state.product_description}
                                  />
                              </div>
                              <div class="form-group">
                                  <label for="inputPic">Add Product Image</label>
                                  <input type="file"
                                        class="form-control-file"
                                        id="inputPic"
                                  />
                               </div>
                              <div class="form-row">
                                  <div class="form-group col-md-4">
                                      <label for="product_cat">Category</label>
                                      <select id="product_cat" class="form-control"
                                         onChange={this.handleProductCategoryChange}
                                         value={this.state.product_cat}>
                                            <option selected>Choose...</option>
                                            <option>Cat 1</option>
                                            <option>Cat 2</option>
                                      </select>
                                  </div>
                                  <div class="form-group col-md-4">
                                      <label for="product_qty">Quantity</label>
                                      <input type="text"
                                            class="form-control"
                                            id="product_qty"
                                            onChange={this.handleProductQuantityChange}
                                            value={this.state.product_qty}
                                      />
                                  </div>
                                  <div class="form-group col-md-4">
                                      <label for="product_price">Price</label>
                                      <input type="text"
                                            class="form-control"
                                            id="product_price"
                                            onChange={this.handleProductPriceChange}
                                            value={this.state.product_price}
                                      />
                                  </div>
                              </div>

                               <div><br></br></div>

                               <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group" style={{textAlign: 'center'}}>
                                            <input type="submit" value="Add New Product" className="btn btn-danger" style={{maxWidth: '30rem'}}/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group" style={{textAlign: 'center'}}>
                                            <input type="submit" value="View Product List" className="btn btn-danger" style={{maxWidth: '30rem'}}/>
                                        </div>
                                    </div>
                              </div>
                       </form>
                  </div>
                </div>

              </div>
              </div>

                 <div className="col-md-3">
                       <img class="card-img-top" src="https://www.uidownload.com/files/259/1021/205/fashion-women-illustrator-02-vector-material.jpg" alt="Card image cap" style={{maxWidth: '20rem', maxHeight: '25rem', marginTop: '25%', marginLeft: '-10%'}}/>
                 </div>

              </div>

            </div>
        )
    }
}

export default AddProduct;
