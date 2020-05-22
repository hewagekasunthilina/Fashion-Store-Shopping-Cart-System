import React from "react";
import axios from "../../api/api";

class AddItemPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		categories: [],
		imageId: "sample.jpg",
		nameClass: "form-control",
		priceClass: "form-control",
		imageClass: "form-control",
		descriptionClass: "form-control",
		formClass: "card col-md-4"
	};

    this.onAddItemBtnClick = this.onAddItemBtnClick.bind(this);
    this.fetchCategories= this.fetchCategories.bind(this);
	this.uploadImage = this.uploadImage.bind(this);
	this.validateAddItemForm = this.validateAddItemForm.bind(this);

    // Form references.
    this.name = React.createRef();
    this.category = React.createRef();
    this.price = React.createRef();
    this.image = React.createRef();
    this.body = React.createRef();
  }

  componentDidMount() { this.fetchCategories() }

  fetchCategories() {
    axios.get('/categories')
    .then(res => {
      if (res.data.successful) this.setState({ categories: res.data.body });
      else alert(`Unable to load categories because ${res.data.body}`);
    })
    .catch(error => alert(`Unable to load categories because ${error}`));
  }

  onAddItemBtnClick() {

	let validForm = this.validateAddItemForm();

	if (validForm) {
		let title = this.name.current.value;
		let imageFilename = title.replace(' ', '') + new Date().getTime() + '.jpg';
		let item = { title: title, category: this.category.current.value, price: this.price.current.value, image: imageFilename, body: this.body.current.value };

		// Send the info first as JSON and then the actual image as a multipart upload.
		axios.post('/items', { item })
		.then(res => {
		  if (res.data.successful) {
			  this.uploadImage(imageFilename);
			  alert(`Successfully added ${item.title}`);
		  }
		  else alert(`Unable to add ${item.title} because ${res.data.body}`);
		})
		.catch(error => alert(`Unable to add ${item.title} because ${error}`));
	}
  }

  uploadImage(imageFilename) {
	  let imageFile = this.image.current.files[0];
	  console.log(this.image.current.files);
	  let headers = { 'Content-Type': 'multipart/form-data' };
	  let payload = new FormData();
	  payload.append("file", imageFile, imageFilename);	// Rename so that we have a reference to the image in Item object in the DB.

	  axios.post("/items/images/", payload, { headers: headers }).then().catch(error => console.log(error));
  }

  validateAddItemForm() {
	  let title = this.name.current.value;
	  let price = this.price.current.value;
	  let body = this.body.current.value;
	  let imageUploadLength = this.image.current.files.length;
	  let formInvalid = (title === "" || price === "" || body === "" || imageUploadLength === 0);

	  this.setState({ nameClass: title === "" ? "is-invalid form-control" : "form-control" });
	  this.setState({ priceClass: price === "" ? "is-invalid form-control" : "form-control" });
	  this.setState({ imageClass: imageUploadLength === 0 ? "is-invalid form-control" : "form-control" });
	  this.setState({ descriptionClass: body === "" ? "is-invalid form-control" : "form-control" });
	  this.setState({ formClass: formInvalid ? "card col-md-4 border-danger" : "card col-md-4" })

	  return !formInvalid;

  }

  render() {
    return (
      <div className="align-items-center justify-content-center row" style={{ margin: ".5rem", padding: ".5rem"}}>
        <div className="card text-white bg-dark mb-3" style={{width: "32rem"}}>
        <div className={this.formClass}>
          <div className="card-header"><h3 style={{textAlign: "center"}}>Add an Item</h3></div>
          <div className="card-body" style={{marginLeft: "10%", marginRight: "10%", marginTop: "2%", marginBottom: "3%"}}>
              <div className="form-group">
                <small>Name</small><br />
                <input ref={this.name} type="text" className={this.state.nameClass}  placeholder="V-Collar T Shirt"/>
              </div>
              <div className="form-group">
                <small>Category</small><br />
                  <select ref={this.category} className="form-control" >{ this.state.categories.map((category, index) => { return(<option>{category.name}</option>) })} </select>
                </div>
              <div className="form-group">
                <small>Price</small><br />
                <input ref={this.price} type="text" className={this.state.priceClass}  placeholder="2999.99"/>
              </div>
              <div className="form-group">
                <small>Image URL</small><br />
                <input ref={this.image} type="file" className={this.state.imageClass} />
              </div>
              <div className="form-group">
                <small>Description</small><br />
                <input ref={this.body} type="text" className={this.state.descriptionClass}  placeholder="Available in M, L, XL, XXL"/>
              </div>

            <br/>
            <button href="#" className="btn btn-primary btn-block" onClick={this.onAddItemBtnClick}>Add Item</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default AddItemPage;
