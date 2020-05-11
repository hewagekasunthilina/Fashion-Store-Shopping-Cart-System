import React, { Component } from 'react'

import axios from 'axios';

export default class CartList extends Component{

    constructor(props) {
        super(props);
        this.state = {products: []};
    }
    componentDidMount(){
        axios.get(`${BASE_URL}/api/products`)
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.products.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }
    render() {

        return (

            <div className=" container">

                <h3 className="card-title">View Items</h3><hr />
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Item Number</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>


                <hr />
            </div>

        );

    }

}
