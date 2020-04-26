import React, {Component} from "react";

class AddStoreManager extends Component{
    render() {
        return(
            <div className="backdrop" style={{backgroundColor:'grey'}}>
                <form className="needs-validation" noValidate style={{width:'50rem', marginLeft:'15rem', marginTop:'8rem'}}>
                    <div className="form-row" style={{marginLeft:'0.5rem'}}>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltip01">First name</label>
                            <input type="text" className="form-control" id="validationTooltip01"
                                   placeholder="First name" value="" required/>
                                <div className="valid-tooltip">
                                    Looks good!
                                </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltip02">Last name</label>
                            <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name"
                                   value="Otto" required/>
                                <div className="valid-tooltip">
                                    Looks good!
                                </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltipUsername">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                </div>
                                <input type="text" className="form-control" id="validationTooltipUsername"
                                       placeholder="Username" aria-describedby="validationTooltipUsernamePrepend"
                                       required/>
                                    <div className="invalid-tooltip">
                                        Please choose a unique and valid username.
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationTooltip03">Date of Birth</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder="City"
                               required/>
                        <div className="invalid-tooltip">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationTooltip03">E-Mail</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder="City"
                               required/>
                        <div className="invalid-tooltip">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationTooltip03">Contact Number</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder="City"
                               required/>
                        <div className="invalid-tooltip">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationTooltip03">Address</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder="City"
                               required/>
                        <div className="invalid-tooltip">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationTooltip03">NIC Number</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder="City"
                               required/>
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
