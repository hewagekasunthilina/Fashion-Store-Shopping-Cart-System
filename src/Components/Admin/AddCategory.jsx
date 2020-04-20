import React, {Component} from "react";

class AddCategory extends Component{
    // constructor(props) {
    //     super(props);
    //     this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    //     this.onChangeCategoryNumber = this.onChangeCategoryNumber.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);
    //
    //     this.state = {
    //         category_name: '',
    //         category_number: ''
    //     }
    // }
    //
    // onChangeCategoryName(e){
    //     this.setState({
    //         category_name: e.target.value
    //     });
    // }
    //
    // onChangeCategoryNumber(e){
    //     this.setState({
    //         category_number: e.target.value
    //     });
    // }
    //
    // onSubmit(e){
    //     e.preventDefault();
    //   const obj = {
    //       category_name: this.state.category_name,
    //       category_number: this.state.category_number
    //   };
    //   axios.post('http://localhost:4000/category/add',obj).then(res => console.log(res.data));
    //
    //   this.setState({
    //       category_name: '',
    //       category_number: ''
    //   })
    // }
    render() {
        return(

            <div style={{ marginLeft:'10%', marginTop:'8rem'}}>
                <h3 style={{marginLeft: '24rem'}}>Add New Category</h3>
                <form  style={{width:'50%', marginLeft:'16rem'}}>
                    <div className="form-group">
                        <label>New Category Name:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>New Category Number: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Category" className="btn btn-primary" style={{marginLeft:'10rem', width:'15rem'}}/>
                        <a className="btn btn-primary btn-sm" href="/BackAdmin" role="button" style={{marginLeft:'8rem'}}>Back</a>
                    </div>
                </form>
            </div>

        )
    }
}
export default AddCategory;
