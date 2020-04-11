import React, {Component} from "react";

class Admin extends Component{
    constructor(props) {
        super(props);
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onChangeCategoryNumber = this.onChangeCategoryNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            category_name: '',
            category_number: ''
        }
    }

    onChangeCategoryName(e){
        this.setState({
            category_name: e.target.value
        });
    }

    onChangeCategoryNumber(e){
        this.setState({
            category_number: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`The values are ${this.state.category_name}, ${this.state.category_number}`)
        this.setState({
            category_name: '',
            category_number: ''
        })
    }
    render() {
        return(
            <div style={{marginTop: '10', marginLeft:'10%'}}>
                <h3>Add New Category</h3>
                <form  style={{width:'50%', marginLeft:'10%'}}>
                    <div className="form-group">
                        <label>New Category Name:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>New Category Number: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Category" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Admin;
