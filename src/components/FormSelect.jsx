import React from 'react'

function FormSelect({ countryData, handleFieldChange }) {
    return ( 
        <div>
            <label htmlFor="country" className="form-label">Country Name</label>
            <select className="form-select" id="country" name="country" defaultValue={'default'} onChange={handleFieldChange}>
                <option value="default" disabled>Choose your country</option>
                {countryData.map((country, i) => <option key={i} value={country.value}> {country.text}</option>)}
            </select>
        </div>
     );
}

export default FormSelect;