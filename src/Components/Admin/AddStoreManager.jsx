import React, {Component} from "react";
import "./AddStoreManager.css"

class AddStoreManager extends Component{
    render() {
        return(
            <div className="container">
                <h3 style={{marginLeft: '24rem', marginBottom:'1rem', paddingTop:'1rem'}}>Add New Store Manager</h3>
                <form className="needs-validation" noValidate>
                    <div className="form-row" style={{marginLeft:'0.5rem'}}>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltip01">First name</label>
                            <input type="text" className="form-control" id="validationTooltip01" placeholder="First Name" required/>
                                <div className="valid-tooltip">
                                    Looks good!
                                </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltip02">Last name</label>
                            <input type="text" className="form-control" id="validationTooltip02" placeholder="Last Name" required/>
                                <div className="valid-tooltip">
                                    Looks good!
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationTooltip03">Date of Birth</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder="Date of Borth" required/>
                        <div className="invalid-tooltip">
                            Please provide a valid Date
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationTooltip03">E-Mail</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder="E-mail" required/>
                        <div className="invalid-tooltip">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationTooltip03">Contact Number</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder="Contact Number" required/>
                        <div className="invalid-tooltip">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationTooltip03">Address</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder="Address" required/>
                        <div className="invalid-tooltip">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationTooltip03">NIC Number</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder="NIC Number" required/>
                        <div className="invalid-tooltip">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Store Manager" className="btn btn-primary" style={{marginLeft:'1rem', width:'15rem'}}/>
                        <a className="btn btn-primary btn-sm" href="/BackAdmin" role="button" style={{marginLeft:'5rem'}}>Back</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddStoreManager;
