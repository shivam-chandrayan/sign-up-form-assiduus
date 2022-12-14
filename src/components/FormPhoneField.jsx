import React from "react";

export default function FormPhoneField({ flags, handleFieldChange }) {
    let className = "form-control";
    if (flags.phone == false)
        className += ' is-invalid';
    if (flags.phone == true)
        className += ' is-valid';
    
    return (
        <div>
            <label htmlFor="phone" className="form-label">Phone number</label>
            <div className="input-group">
                <input type="number" className="form-control" name="countryCode" onChange={handleFieldChange} style={{maxWidth: '20%'}}></input>
                <input type="number" className={className} id="phone" name="phone" onChange={handleFieldChange}></input>
            </div>
        </div>
    )
}