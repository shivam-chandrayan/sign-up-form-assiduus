import React, { useState } from "react";
import FormCheckBox from "./FormCheckBox";
import FormInput from "./FormInput";
import FormPhoneField from "./FormPhoneField";
import countryData from "../assets/countryData.json"
import Alert from "./Alert";
import "./Form.css"
import FormSelect from "./FormSelect";
import FormPassword from "./FormPasswordInput";

export default function Form() {

    let [userData, setUserData] = useState({
        name: '',
        email: '',
        countryCode: null,
        phone: '',
        company: '',
        country: '',
        marketplaces: [],
        password: ''
    })
    let [flags, setFlags] = useState({})
    let [passwordToggle, setPasswordToggle] = useState('password');
    let [confPasswordToggle, setConfPasswordToggle] = useState('password');
    let [confPassword, setConfPassword] = useState('');
    let [tncCheck, setTncCheck] = useState(false);

    const marketplaces = ["Amazon", "Flipkart", "Shopify", "Ebay", "Noon", "Walmart"];


    const handleFieldChange = (e) => {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;
        let type = e.currentTarget.type;

        validateForm(name, value);

        if (name == 'T&C') {
            setTncCheck(e.currentTarget.checked);
            return;
        }

        if (name == 'confPassword') {
            setConfPassword(value);
            return;
        }

        if (type == 'checkbox') {
            let arr = userData[name];
            console.log(e.currentTarget)
            if (e.currentTarget.checked)
                arr.push(value);
            else
                arr = arr.filter(elem => elem != value);
            value = arr;
        }

        setUserData({ ...userData, [name]: value });
    }

    //form validation
    const validateForm = (name, value) => {
        let tempFlags = flags;
        switch (name) {
            case "name": {
                tempFlags[name] = validateName(value);
            }
                break;
            case "email": {
                tempFlags[name] = validateEmail(value);
            }
                break;
            case "countryCode": {
                tempFlags[name] = validateCountryCode(value);
            }
                break;
            case "phone": {
                tempFlags[name] = validatePhone(value);
            }
                break;
            case "company": {
                tempFlags[name] = validateCompany(value);
            }
                break;
            case "password": {
                tempFlags[name] = validatePassword(value);
            }
                break;
            case "confPassword": {
                tempFlags[name] = comparePassword(userData.password, value);
            }
                break;
        }
        setFlags(tempFlags);
    }

    const validateName = (name) => {
        if (name.length < 3 || name.length > 30) {
            return false
        }
        return true;
    }

    const validateEmail = (email) => {
        if (!String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ) {
            return false;
        }
        return true;
    }

    const validateCountryCode = (code) => {
        if (code == null)
            return false;
        if (code.length > 3 || code.length < 1) {
            return false;
        }
        return true;
    }

    const validatePhone = (phone) => {
        if (phone.length != 10) {
            return false;
        }
        return true;
    }

    const validateCompany = (company) => {
        if (company.length < 1 || company.length > 30) {
            return false;
        }
        return true;
    }

    const validatePassword = (password) => {
        if (password.length < 8) {
            return false;
        }
        return true;
    }

    const comparePassword = (password, confPassword) => {
        console.log(password + confPassword);
        if (password != confPassword) {
            return false;
        }
        return true;
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

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(JSON.stringify(userData));
    }

    return (
        <div className="form-container p-4 my-4">
            <div className="form-top-box-element"></div>
            <form className="mt-2" onSubmit={handleSubmit}>
                <FormInput
                    fieldData={{
                        inputType: 'text',
                        fieldName: 'name',
                        fieldLabel: 'Full Name',
                        fieldDesc: '',
                        flags: flags
                    }}

                    handleFieldChange={handleFieldChange}
                />
                <FormInput
                    fieldData={{
                        inputType: 'email',
                        fieldName: 'email',
                        fieldLabel: 'Email Address',
                        fieldDesc: '',
                        flags: flags
                    }}

                    handleFieldChange={handleFieldChange}
                />

                <FormPhoneField handleFieldChange={handleFieldChange} flags={flags} />

                <FormInput
                    fieldData={{
                        inputType: 'text',
                        fieldName: 'company',
                        fieldLabel: 'Company Name',
                        fieldDesc: '',
                        flags: flags
                    }}

                    handleFieldChange={handleFieldChange}
                />

                <FormSelect handleFieldChange={handleFieldChange} countryData={countryData} />

                <div className="marketplace-check-group">
                    <label className="form-check-label">Marketplaces Covered</label>
                    {marketplaces.map((marketplace, i) => <FormCheckBox key={i} handleFieldChange={handleFieldChange} fieldData={{ name: "marketplaces", label: marketplace, value: marketplace }} />)}
                </div>

                <FormPassword
                    fieldData={{
                        fieldName: 'password',
                        fieldLabel: 'Create Password',
                        fieldDesc: '',
                        flags: flags
                    }}

                    handleFieldChange={handleFieldChange}
                    handlePasswordToggle={handlePasswordToggle}
                    passwordToggle={passwordToggle}
                />

                {(flags.confPassword != undefined && !flags.confPassword) ? <Alert message={"passwords are not matching"} /> : null}

                <FormPassword
                    fieldData={{
                        fieldName: 'confPassword',
                        fieldLabel: 'Confirm Password',
                        fieldDesc: '',
                        flags: flags
                    }}

                    handleFieldChange={handleFieldChange}
                    handlePasswordToggle={handleConfPasswordToggle}
                    passwordToggle={confPasswordToggle}
                />

                <FormCheckBox fieldData={{ name: "T&C", label: "I agree to terms and conditions", value: "T&C", required: false }} handleFieldChange={handleFieldChange} />

                <button type="submit" className="btn btn-primary" disabled={!tncCheck}>Submit</button>
            </form>
        </div>
    )
}