import React from "react";
import './FormInput.css';

export default function FormInput({ fieldData, handleFieldChange }) {
    let className = "form-control";
    if (fieldData.flags[fieldData.fieldName] == false)
        className += ' is-invalid';
    if (fieldData.flags[fieldData.fieldName] == true)
        className += ' is-valid';
    return (
        <div className="form-input">
            <label htmlFor={fieldData.fieldName} className="form-label">{fieldData.fieldLabel}</label>
            <input type={fieldData.inputType} className={className} id={fieldData.fieldName} name={fieldData.fieldName} onChange={handleFieldChange} />
            <div id={fieldData.fieldName} className="form-text">{fieldData.fieldDesc}</div>
        </div>
    )
}