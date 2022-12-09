import React from "react";

export default function FormInput({ fieldData, handleFieldChange }) {
    return (
        <div>
            <label htmlFor={fieldData.fieldName} className="form-label">{fieldData.fieldLabel}</label>
            <input type={fieldData.inputType} className="form-control" id={fieldData.fieldName} name={fieldData.fieldName} onChange={handleFieldChange} required={fieldData.required} />
            <div id={fieldData.fieldName} className="form-text">{fieldData.fieldDesc}</div>
        </div>
    )
}