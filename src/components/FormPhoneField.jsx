import React from "react";
import countryData from "../assets/countryData.json";

export default function FormPhoneField({ handleFieldChange }) {
    return (
        <div>
            <label htmlFor="phone" className="form-label">Phone number</label>
            <div className="input-group">
                <input type="number" className="form-control" name="countryCode" onChange={handleFieldChange} style={{maxWidth: '20%'}}></input>
                <input type="number" className="form-control" id="phone" name="phone" onChange={handleFieldChange}></input>
            </div>
        </div>
    )
}