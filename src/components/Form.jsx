import React, { useState } from "react";
import FormCheckBox from "./FormCheckBox";
import FormInput from "./FormInput";
import FormPhoneField from "./FormPhoneField";
import countryData from "../assets/countryData.json"
import Alert from "./Alert";

export default function Form() {

    let [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        marketplaces: [],
        password: ''
    })

    let [passwordToggle, setPasswordToggle] = useState('password');
    let [confPasswordToggle, setConfPasswordToggle] = useState('password');
    let [confPassword, setConfPassword] = useState('');
    let [flags, setFlags] = useState({ tnc: true });

    const marketplaces = ["Amazon", "Flipkart", "Shopify", "Ebay", "Noon", "Walmart"];


    const handleFieldChange = (e) => {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;
        let type = e.currentTarget.type;

        if (name == 'T&C') {
            setFlags({ ...flags, tnc: !e.currentTarget.checked });
        }

        if (type == 'checkbox') {
            let arr = userData[name];
            if (e.currentTarget.checked)
                arr.push(value);
            else
                arr = arr.filter(elem => elem != value);
            value = arr;
        }

        setUserData({ ...userData, [name]: value });
    }

    const handlePasswordToggle = () => {
        if (passwordToggle === 'password') {
            setPasswordToggle('text');
        } else {
            setPasswordToggle('password');
        }
    }

    const handleConfPasswordToggle = () => {
        if (confPasswordToggle === 'password') {
            setConfPasswordToggle('text');
        } else {
            setConfPasswordToggle('password');
        }
    }

    const handleConfPassword = (e) => {
        const value = e.currentTarget.value;
        if (userData.password != value) {
            console.log(userData.password)
            console.log(value);
            setFlags({ ...flags, confPassword: true });
        } else {
            setFlags({ ...flags, confPassword: false });
        }

        setConfPassword(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        alert(JSON.stringify(userData));
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                fieldData={{
                    inputType: 'text',
                    fieldName: 'name',
                    fieldLabel: 'Full Name',
                    fieldDesc: '',
                    required: true
                }}

                handleFieldChange={handleFieldChange}
            />
            <FormInput
                fieldData={{
                    inputType: 'email',
                    fieldName: 'email',
                    fieldLabel: 'Email Address',
                    fieldDesc: '',
                    required: true
                }}

                handleFieldChange={handleFieldChange}
            />

            <FormPhoneField handleFieldChange={handleFieldChange} />

            <FormInput
                fieldData={{
                    inputType: 'text',
                    fieldName: 'company',
                    fieldLabel: 'Company Name',
                    fieldDesc: '',
                    required: true
                }}

                handleFieldChange={handleFieldChange}
            />

            <label htmlFor="country" className="form-label">Country Name</label>
            <select className="form-select" id="country" name="country" defaultValue={'default'} onChange={handleFieldChange} required>
                <option value="default" disabled>Choose your country</option>
                {countryData.map((country, i) => <option key={i} value={country.value}> {country.text}</option>)}
            </select>

            <div className="marketplace-check-group">
                <label className="form-check-label">Marketplaces Covered</label>
                {marketplaces.map((marketplace, i) => <FormCheckBox key={i} handleFieldChange={handleFieldChange} fieldData={{ name: marketplace, label: marketplace, value: marketplace }} />)}
            </div>
            
            <div>
                <label htmlFor="password" className="form-label">Create Password</label>
                <div className="input-group">
                    <input type={passwordToggle} className="form-control" id="password" name="password" onChange={handleFieldChange} required/>
                    <span className="input-group-text" onClick={handlePasswordToggle}>*</span>
                </div>
            </div>

            {flags.confPassword ? <Alert message={"passwords are not matching"} /> : null}

            <div>
                <label htmlFor="confPassword" className="form-label">Confirm Password</label>
                <div className="input-group">
                    <input type={confPasswordToggle} className="form-control" id="confPassword" onChange={handleConfPassword} required/>
                    <span className="input-group-text" onClick={handleConfPasswordToggle}>*</span>
                </div>
            </div>

            <FormCheckBox fieldData={{ name: "T&C", label: "I agree to terms and conditions", value: "T&C", required: true }} />

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}