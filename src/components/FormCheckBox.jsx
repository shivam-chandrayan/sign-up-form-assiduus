import React from "react";

export default function FormCheckBox({ fieldData, handleFieldChange }) {
    
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" name={fieldData.name} required={fieldData.required} value={fieldData.value} id={fieldData.name} onChange={handleFieldChange}/>
            <label className="form-check-label" htmlFor={fieldData.name}>
                {fieldData.label}
            </label>
        </div>
    )
}