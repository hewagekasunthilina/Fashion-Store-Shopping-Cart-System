import React, { Component } from 'react';
import axios from 'axios';

class CategoryList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/category')
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        data: response.data

                    });

                } else {
                    console.log('problem');
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const {data} = this.state;
        console.log(data);
        return(



                    < div className="dropdown">

                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {Array.isArray(data) && data.map(object => (

                        <a className="dropdown-item" href="#">data.category_name</a>


                            ))}
                    </div>
                    </div>
        )
    }
}

export default CategoryList;
