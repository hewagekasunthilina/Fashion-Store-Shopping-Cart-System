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
            <div className="categoryList">
                {Array.isArray(data) && data.map(object => (
                    <p key={object.category_id}>{object.ID}</p>



                ))}
            </div>

        )
    }
}

export default CategoryList;
