import React, {FC, useEffect, useState} from 'react';
import logo from '../../logo.svg';
import './SignUp.css';
import {Status} from "../../enums/Status";
import {StatusModalConstructor, StatusModalProps} from "../../components/StatusModal/StatusModal";
import {FormField, FormFieldStatus, SelectFormField, SelectFormFieldDataType} from "../../components/Form/FormField";
import {InputField} from "../../components/Form/FormItem";
import {BaseUrls} from "../../enums/BaseUrls";
import axios, {AxiosError, AxiosResponse} from "axios";
import {User} from "../../model/User";
import {userAccessToken} from "../../helpers/AccessToken";
import {activeUser} from "../../controllers/ActiveUser";
import {ResponseDto} from "../../model/ResponseDto";
import {useNavigate} from "react-router-dom";
import {City, Country, State} from "../../model/Location";
import {SelectField, SelectFieldPropField} from "../../components/Form/SelectField";

interface SignUpProps {
}


const SignUp: FC<SignUpProps> = () => {
    const navigate = useNavigate();
    const statusModal = new StatusModalConstructor(useState({} as StatusModalProps));

    useEffect(() => {
        statusModal.init("", "", Status.DEFAULT);
    }, [])
    const firstNameField: FormField<string> = {
        value: useState("" as string),
        message: useState(""),
        status: useState(FormFieldStatus.DEFAULT as FormFieldStatus),
        validations: [
            {
                name: "empty",
                errorMessage: "First name is required"
            }
        ],
        onChange: (valueState, statusState, messageState) => {

        }
    }
    const lastNameField: FormField<string> = {
        value: useState("" as string),
        message: useState(""),
        status: useState(FormFieldStatus.DEFAULT as FormFieldStatus),
        validations: [
            {
                name: "empty",
                errorMessage: "Last name is required"
            }
        ],
        onChange: (valueState, statusState, messageState) => {

        }
    }
    const eMailField: FormField<string> = {
        value: useState("" as string),
        message: useState(""),
        status: useState(FormFieldStatus.DEFAULT as FormFieldStatus),
        validations: [
            {
                name: "empty",
                errorMessage: "email is required"
            },
            {
                name: "custom",
                validationFunction: fieldValue => {
                    let rE: RegExp = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$");
                    if (!rE.test(fieldValue as string)) {
                        return {
                            status: FormFieldStatus.INVALID,
                            errorMessage: "invalid format"
                        }
                    }
                    return {
                        status: FormFieldStatus.VALID
                    }
                }
            },
            {
                name: "custom",
                validationFunction: fieldValue => {
                    return {
                        status: FormFieldStatus.VALID
                    }
                }
            }
        ],
        onChange: (valueState, statusState, messageState) => {

        }
    }
    const passwordField: FormField<string> = {
        value: useState("" as string),
        message: useState(""),
        status: useState(FormFieldStatus.VALID as FormFieldStatus),
        validations: [
            {
                name: "empty",
                errorMessage: "Password is required"
            }
        ],
        onChange: (valueState, statusState, messageState) => {

        }
    }
    const confirmPasswordField: FormField<string> = {
        value: useState("" as string),
        message: useState(""),
        status: useState(FormFieldStatus.DEFAULT as FormFieldStatus),
        validations: [
            {
                name: "empty",
                errorMessage: "Passwords don't match"
            },
            {
                name: "matches", matchValue: passwordField.value ? passwordField.value[0] : "",
                errorMessage: "password dont match"
            }
        ],
        onChange: (valueState, statusState, messageState) => {
        }
    }
    const phoneField: FormField<string> = {
        value: useState("" as string),
        message: useState(""),
        status: useState(FormFieldStatus.DEFAULT as FormFieldStatus),
        validations: [
            {
                name: "empty",
                errorMessage: "Phone is required"
            }
        ],
        onChange: (valueState, statusState, messageState) => {

        }
    }
    const dobField: FormField<string> = {
        value: useState("1997-06-20" as string),
        message: useState(""),
        status: useState(FormFieldStatus.DEFAULT as FormFieldStatus),
        validations: [
            {
                name: "empty",
                errorMessage: "dob is required"
            }
        ],
        onChange: (valueState, statusState, messageState) => {

        }
    }
    const addressField: FormField<string> = {
        value: useState("" as string),
        message: useState(""),
        status: useState(FormFieldStatus.DEFAULT as FormFieldStatus),
        validations: [
            {
                name: "empty",
                errorMessage: "address is required"
            },
        ],
        onChange: (valueState, statusState, messageState) => {

        }
    }
    const profileImageField: FormField<FileList> = {
        value: useState([] as any as FileList),
        message: useState(""),
        status: useState(FormFieldStatus.DEFAULT as FormFieldStatus),
        validations: [
            {
                name: "empty",
                errorMessage: "profile image is required"
            },
            {
                name: "custom",
                errorMessage: "no image selected",
                validationFunction: fieldValue => {
                    if ((fieldValue as FileList).length < 1) {
                        return {
                            status: FormFieldStatus.INVALID,
                            errorMessage: "profile image is required"
                        }
                    }
                    return {
                        status: FormFieldStatus.VALID
                    }
                }
            }
        ],
        onChange: (valueState, statusState, messageState) => {

        }
    }
    const address2Field: FormField<string> = {
        value: useState("" as string),
        message: useState(""),
        status: useState(FormFieldStatus.DEFAULT as FormFieldStatus),
        onChange: (valueState, statusState, messageState) => {

        }
    }

    const policyField: FormField<boolean> = {
        value: useState(false),
        message: useState(""),
        status: useState(FormFieldStatus.DEFAULT as FormFieldStatus)
    }
const [city, setCity] = useState(0 as number|string|undefined);
    const [state, setState] = useState(0 as number|string|undefined);
    const [country, setCountry] = useState(0 as number|string|undefined);

    const submit = () => {
        let fNameValid = (firstNameField.performValidations as any)();
        let lNameValid = (lastNameField.performValidations as any)();
        let eMailValid = (eMailField.performValidations as any)();
        let passwordValid = (passwordField.performValidations as any)();
        let confirmPasswordValid = (confirmPasswordField.performValidations as any)();
        let phoneValid = (phoneField.performValidations as any)();
        let dobValid = (dobField.performValidations as any)();
        let addressValid = (addressField.performValidations as any)();
        let address2Valid = (address2Field.performValidations as any)();
        let imageValid = (profileImageField.performValidations as any)();

        if (!fNameValid || !lNameValid || !eMailValid || !passwordValid || !confirmPasswordValid || !phoneValid || !dobValid || !addressValid || !address2Valid || !imageValid) return;
        statusModal.setValues("User Registration",
            <div>Registering: {eMailField.value[0]} ...</div>, Status.LOADING, true).show();

        var data = new FormData();
        data.append('email', eMailField.value[0]);
        data.append('city', city as any as string);
        data.append('state', state as any as string);
        data.append('country', country as any as string);
        data.append('dob', dobField.value[0]);
        data.append('firstName', firstNameField.value[0]);
        data.append('lastName', lastNameField.value[0]);
        data.append('image', (profileImageField.value[0] as FileList)[0]);
        data.append('phone', phoneField.value[0]);
        data.append('address', addressField.value[0]);
        data.append('address2', address2Field.value[0]);
        data.append('password', passwordField.value[0]);
        var config = {
            method: 'post',
            url: `${BaseUrls.USER_URL}/user/register`,
            data: data
        };


        axios(config)
            .then(function (response: AxiosResponse<{ jwt: string, user: User }>) {
                let {jwt, user} = response.data;
                userAccessToken.updateTokenLocally(jwt);
                activeUser.updateUserLocally(user);
                console.log(response);
                statusModal.setValues("User Registered Successfully", undefined, Status.SUCCESS, true, {
                    text: "CONTINUE", callback: () => {
                        navigate("/");
                    }
                }).show();
            })
            .catch(function (error: AxiosError) {
                let response: ResponseDto<string> = error.response?.data as ResponseDto<string>;
                statusModal.setValues("User Registration",
                    <div>{response.message} ...</div>, Status.ERROR, false).show();
                console.log(error);
            });
    }
    const [countries, setCountries] = useState([] as Country[])

    const [states, setStates] = useState([] as State[])
    const [cities, setCities] = useState([] as City[])
    const countryField: SelectFieldPropField = {
        value: 161,
        onChange: ((value) => {
            stateUpdater(value as any);
            setCountry(value)
        })
    }
    const stateField: SelectFieldPropField = {
        onChange: ((value) => {
            cityUpdater(value as any);
            setState(value)
        })
    }
    const cityField: SelectFieldPropField = {
        onChange: ((value) => {
            setCity(value);
        })
    }

    const fetchCountries = () => new Promise<Country[]>((resolve, reject) => {
        axios.get(`${BaseUrls.USER_URL}/helpers/countries`)
            .then((response: AxiosResponse<Country[]>) => {
                resolve(response.data)
            })
            .catch(reason => {
                reject("Error fetching data from server");
            })
    })
    const fetchStates = (countryId: number) => new Promise<State[]>((resolve, reject) => {
        axios.get(`${BaseUrls.USER_URL}/helpers/states/byCountryId?countryId=${countryId}`)
            .then((response: AxiosResponse<State[]>) => {
                resolve(response.data)
            })
            .catch(reason => {
                reject("Error fetching data from server");
            })
    })
    const fetchCities = (stateId: number) => new Promise<City[]>((resolve, reject) => {
        axios.get(`${BaseUrls.USER_URL}/helpers/cities/byStateId?stateId=${stateId}`)
            .then((response: AxiosResponse<City[]>) => {
                resolve(response.data)
            })
            .catch(reason => {
                reject("Error fetching data from server");
            })
    })
    const cityUpdater = (stateId: number) => {
        if (!stateId) {
            setCities([]);
            return;
        }
        fetchCities(stateId).then((value1) => {
            setCities(value1);
            setCity(value1[0].id);
        })
            .catch(reason => {
                console.log(reason)
                if (!stateId) {
                    setCities([]);
                }
            });
    }
    const stateUpdater = (countryId: number) => {
        if (!countryId) {
            setStates([]);
            return;
        }
        fetchStates(countryId).then((_states) => {
            setStates(_states);
            cityUpdater(_states[0].id);
            setState(_states[0].id);
        })
            .catch(reason => {
                console.log(reason)
                if (!countryId) {
                    setStates([]);
                }
            });
    }
    useEffect(() => {
        fetchCountries().then((_countries) => {
            setCountries(_countries);
            stateUpdater(161);
           setCountry(161)
        })
            .catch(reason => {
                console.log(reason)
            });
    }, [])


    return (
        <div className="page page-center">
            <div className="container container-tight py-4" style={{minWidth: "45%"}}>
                <div className="text-center mb-4">
                    <a href="." className="navbar-brand navbar-brand-autodark">
                        <img src={logo} height="36" alt=""/></a>
                </div>
                <form className="card card-md" action="./" method="get" autoComplete="off" noValidate>
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Create new account</h2>
                        {/*<fieldset className={"form-fieldset"}>*/}
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">First Name</label><span className={"w-full"}>
                            <InputField type="text" placeholder="First name" field={firstNameField}/>
                        </span>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Last Name</label>
                            <InputField type="text" className="form-control" placeholder="Last name"
                                        autoComplete="off" field={lastNameField}/>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Email</label>
                            <InputField type="email" className="form-control" placeholder="Email" field={eMailField}/>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Password</label>
                            <span className={"w-full"}>
                            <InputField type="password" placeholder="Password"
                                        autoComplete="off" field={passwordField}/>
                        </span>
                        </div>

                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Confirm Password</label>
                            <span className={"w-full"}>
                                <InputField type="password" placeholder="Confirm Password" autoComplete="off"
                                            field={confirmPasswordField}/>
                            </span>
                        </div>

                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Phone Number</label>
                            <InputField type="tel" className="form-control" placeholder="Phone" field={phoneField}/>
                        </div>

                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Date Of Birth</label>

                            <div className="input-icon mb-2 w-full">
                                <InputField className="form-control" type={"date"} placeholder="Select a date"
                                            id="datepicker-icon" field={dobField}/>
                            </div>
                        </div>

                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Profile Image</label>
                            <InputField type="file" className="form-control" placeholder="Profile Image"
                                        field={profileImageField}/>
                        </div>

                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Address</label>
                            <InputField type="text" className="form-control" placeholder="Address"
                                        field={addressField}/>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label">Address 2</label>
                            <InputField type="text" className="form-control" placeholder="Address 2"
                                        field={address2Field}/>
                        </div>


                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Country</label>
                            <div className="input-group input-group-flat">
                                <SelectField field={countryField} items={countries.map((value, index) => ({
                                    value: value.id,
                                    text: value.name,
                                    disabled: value.id !== 161
                                }))}/>
                            </div>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">State</label>
                            <div className="input-group input-group-flat">
                                <SelectField field={stateField} items={states.map((value, index) => ({
                                    value: value.id,
                                    text: value.name
                                }))}/>
                            </div>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">City</label>
                            <div className="input-group input-group-flat">
                                <SelectField field={cityField} items={cities.map((value, index) => ({
                                    value: value.id,
                                    text: value.name
                                }))}/>
                            </div>
                        </div>
                        {/*<div className="mb-3 d-flex flex-column align-items-start">*/}
                        {/*    <label className="form-label required">State</label>*/}
                        {/*    <div className="input-group input-group-flat">*/}
                        {/*        <SelectField field={stateField}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="mb-3 d-flex flex-column align-items-start">*/}
                        {/*    <label className="form-label required">City</label>*/}
                        {/*    <div className="input-group input-group-flat">*/}
                        {/*        <SelectField field={cityField}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*</fieldset>*/}
                        <div className="mb-3">
                            <label className="form-check ">
                                <InputField type="checkbox" className="form-check-input" field={policyField}/>
                                <span className="form-check-label text-start">
                                        Agree the <a href={"/terms-of-service"} tabIndex={-1}>terms and policy</a>.
                                        </span>
                            </label>
                        </div>

                        <div className="form-footer">
                            <button type={"button"} className="btn btn-primary w-100" onClick={() => {
                                submit()
                            }}>Create new account
                            </button>
                        </div>
                    </div>
                </form>

                <div className="text-center text-muted mt-3">
                    Already have account? <a href={"./login"} tabIndex={-1} className={"text-uppercase"}>Sign In</a>
                </div>
            </div>
            <div>{statusModal.view}</div>
            {/*<StatusModal {...statusModalProps} />*/}
        </div>
    )
};

export default SignUp;
