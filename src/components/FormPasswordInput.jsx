import React from 'react';

function FormPassword({ fieldData, handleFieldChange, handlePasswordToggle, passwordToggle }) {
    let className = "form-control";
    if (fieldData.flags[fieldData.fieldName] == false)
        className += ' is-invalid';
    if (fieldData.flags[fieldData.fieldName] == true)
        className += ' is-valid';

    return ( 
        <div>
            <label htmlFor={fieldData.fieldName} className="form-label">{fieldData.fieldLabel}</label>
            <div className="input-group">
                <input type={passwordToggle} className={className} id={fieldData.fieldName} name={fieldData.fieldName} onChange={handleFieldChange}/>
                <span className="input-group-text" onClick={handlePasswordToggle}>*</span>
            </div>
        </div>
     );
}

export default FormPassword;