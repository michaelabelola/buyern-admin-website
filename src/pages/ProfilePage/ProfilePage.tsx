import React, {FC, useState} from 'react';
import './ProfilePage.css';
import PageHeader from "../../components/PageHeader/PageHeader.lazy";
import logo from '../../logo.svg';
import {InputField} from "../../components/Form/FormItem";

interface ProfilePageProps {
}

const ProfilePage: FC<ProfilePageProps> = () => (
    <div className="ProfilePage page-wrapper EntitiesGalleryPage page_main">
        <PageHeader title={"User Account"} smallText={""}/>
        <div className={"container-fluid row"}>
            <div className="page-body">
                <div className="container-xl d-flex justify-content-center">
                    <div className="card col-md-8 col-lg-8 col-xl-6">
                        <div className="col d-flex flex-column">
                            <div className="card-body text-start">
                                <h2 className="mb-4">My Account</h2>
                                <h3 className="card-title">Profile Details</h3>
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                            <span className="avatar avatar-xl"
                                                  style={{backgroundImage: `url(${logo})`}}/>
                                    </div>
                                    <div className="col-auto"><a href="#" className="btn">
                                        Change avatar
                                    </a></div>
                                    <div className="col-auto"><a href="#" className="btn btn-ghost-danger">
                                        Delete avatar
                                    </a></div>
                                </div>
                                <h3 className="card-title mt-4">Personal Details</h3>
                                <div className="row g-3">
                                    <div className="col-md">
                                        <div className="form-label">First Name</div>
                                        <InputField field={{value: useState("Michael")}}/>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-label">Last Name</div>
                                        <InputField field={{value: useState("Abel")}}/>
                                    </div>
                                </div>
                                <h3 className="card-title mt-4">Email</h3>
                                <p className="card-subtitle">This contact will be shown to others publicly, so
                                    choose it carefully.</p>
                                <div>
                                    <div className="row g-2">
                                        <div className="col-auto">
                                            <InputField type={"email"} field={{value: useState("abelmichaelola@gmail.com")}}/>
                                        </div>
                                        <div className="col-auto"><a href="#" className="btn">
                                            Change
                                        </a></div>
                                    </div>
                                </div>
                                <h3 className="card-title mt-4">Password</h3>
                                <p className="card-subtitle">You can set a permanent password if you don't want to
                                    use temporary login codes.</p>
                                <div>
                                    <a href="#" className="btn">
                                        Set new password
                                    </a>
                                </div>
                                <h3 className="card-title mt-4">Location</h3>
                                <p className="card-subtitle">Your personal residential Location.</p>

                                <div className="col-md">
                                    <div className="form-label">Address</div>
                                    <InputField field={{value: useState("21, Alaka street shasha")}}/>
                                </div>
                                <div className="row g-3 mt-2">
                                    <div className="col-md">
                                        <div className="form-label">Country</div>
                                        <InputField field={{value: useState("Nigeria")}}/>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-label">State</div>
                                        <InputField field={{value: useState("Lagos")}}/>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-label">City</div>
                                        <InputField field={{value: useState("Ikeja")}}/>
                                    </div>
                                </div>

                                <h3 className="card-title mt-4">Public profile</h3>
                                <p className="card-subtitle">Making your profile public means that anyone on the
                                    Dashkit network will be able to find
                                    you.</p>
                                <div>
                                    <label className="form-check form-switch form-switch-lg">
                                        <input className="form-check-input" type="checkbox"/>
                                        <span
                                            className="form-check-label form-check-label-on">You're currently visible</span>
                                        <span className="form-check-label form-check-label-off">You're
                          currently invisible</span>
                                    </label>
                                </div>
                            </div>
                            <div className="card-footer bg-transparent mt-auto">
                                <div className="btn-list justify-content-end">
                                    <a href="#" className="btn">
                                        Cancel
                                    </a>
                                    <a href="#" className="btn btn-primary">
                                        Submit
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
);

export default ProfilePage;
