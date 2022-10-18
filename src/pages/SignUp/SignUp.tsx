import React, {FC} from 'react';
import logo from '../../logo.svg';
import './SignUp.css';
import StatusModal from "../../components/StatusModal/StatusModal.lazy";
import {Status} from "../../enums/Status";
import {ModalId} from "../../components/StatusModal/StatusModal";

interface SignUpProps {
}

const SignUp: FC<SignUpProps> = () => {
    let signUpModalId = new ModalId("loginModal");

    return (
        <div className="page page-center">
            <div className="container container-tight py-4" style={{minWidth:"45%"}}>
                <div className="text-center mb-4">
                    <a href="." className="navbar-brand navbar-brand-autodark">
                        <img src={logo} height="36" alt=""/></a>
                </div>
                <form className="card card-md" action="./" method="get" autoComplete="off" noValidate>
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Create new account</h2>
                        {/*<fieldset className={"form-fieldset"}>*/}
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">First Name</label>
                            <input type="text" className="form-control" placeholder="First name"/>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Last Name</label>
                            <input type="text" className="form-control" placeholder="Last name"/>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Email</label>
                            <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Password</label>
                            <div className="input-group input-group-flat">
                                <input type="password" className="form-control" placeholder="Password"
                                       autoComplete="off"/>
                            </div>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Phone Number</label>
                            <input type="tel" className="form-control" placeholder="Phone"/>
                        </div>

                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Date Of Birth</label>

                            <div className="input-icon mb-2 w-full">
                                <input className="form-control" type={"date"} placeholder="Select a date"
                                       id="datepicker-icon"
                                       defaultValue="2020-06-20"/>
                            </div>
                        </div>

                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Address</label>
                            <input type="text" className="form-control" placeholder="Address"/>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label">Address 2</label>
                            <input type="text" className="form-control" placeholder="Address 2"/>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">Country</label>
                            <div className="input-group input-group-flat">
                                <select className="form-select">
                                    <option>Nigeria</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">State</label>
                            <div className="input-group input-group-flat">
                                <select className="form-select">
                                    <option>Lagos</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label required">City</label>
                            <div className="input-group input-group-flat">
                                <select className="form-select">
                                    <option>Ikeja</option>
                                </select>
                            </div>
                        </div>
                        {/*</fieldset>*/}
                        <div className="mb-3">
                            <label className="form-check ">
                                <input type="checkbox" className="form-check-input"/>
                                <span className="form-check-label text-start">
                                Agree the <a href={"/terms-of-service"} tabIndex={-1}>terms and policy</a>.
                            </span>
                            </label>
                        </div>

                        <div className="form-footer">
                            <button type={"button"} className="btn btn-primary w-100" data-bs-toggle="modal"
                                    data-bs-target={signUpModalId.openerId}>Create new account
                            </button>
                        </div>
                    </div>
                </form>

                <div className="text-center text-muted mt-3">
                    Already have account? <a href={"./login"} tabIndex={-1} className={"text-uppercase"}>Sign In</a>
                </div>
            </div>
            <StatusModal modalId={signUpModalId} title={"Account Created"} status={Status.SUCCESS}
                         text={<div>abelmichaelola@gmail.com <br/> Michael Abel</div>}
                         actionButton={{
                             text: "Go To Dashboard", callback: () => {
                             }
                         }}/>
        </div>

    )
};

export default SignUp;
