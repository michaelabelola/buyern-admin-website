import React, {FC} from 'react';
import './UserSettingsPage.css';
import PageHeader from "../../components/PageHeader/PageHeader.lazy";
import logo from "../../logo.svg";

interface UserSettingsPageProps {
}

const UserSettingsPage: FC<UserSettingsPageProps> = () => (
    <div className="UserSettingsPage page-wrapper EntitiesGalleryPage page_main">
        <PageHeader title={"Account Setting"} smallText={""}/>
        <div className={"container-fluid row"}>
            <div className="page-body">
                <div className="container-xl">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-3 d-none d-md-block border-end">
                                <div className="card-body">
                                    <h4 className="subheader">Business settings</h4>
                                    <div className="list-group list-group-transparent">
                                        <a href="./settings.html"
                                           className="list-group-item list-group-item-action d-flex align-items-center active">My
                                            Account</a>
                                        <a href="#"
                                           className="list-group-item list-group-item-action d-flex align-items-center">My
                                            Notifications</a>
                                        <a href="#"
                                           className="list-group-item list-group-item-action d-flex align-items-center">Connected
                                            Apps</a>
                                        <a href="./settings-plan.html"
                                           className="list-group-item list-group-item-action d-flex align-items-center">Plans</a>
                                        <a href="#"
                                           className="list-group-item list-group-item-action d-flex align-items-center">Billing
                                            & Invoices</a>
                                    </div>
                                    <h4 className="subheader mt-4">Experience</h4>
                                    <div className="list-group list-group-transparent">
                                        <a href="#"
                                           className="list-group-item list-group-item-action d-flex justify-content-start">Give
                                            Feedback</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex flex-column">
                                <div className="card-body">
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
                                    <h3 className="card-title mt-4">Business Profile</h3>
                                    <div className="row g-3">
                                        <div className="col-md">
                                            <div className="form-label">Business Name</div>
                                            <input type="text" className="form-control" value="Tabler"/>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-label">Business ID</div>
                                            <input type="text" className="form-control" value="560afc32"/>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-label">Location</div>
                                            <input type="text" className="form-control"
                                                   value="Peimei, China"/>
                                        </div>
                                    </div>
                                    <h3 className="card-title mt-4">Email</h3>
                                    <p className="card-subtitle">This contact will be shown to others publicly, so
                                        choose it carefully.</p>
                                    <div>
                                        <div className="row g-2">
                                            <div className="col-auto">
                                                <input type="text" className="form-control w-auto"
                                                       value="paweluna@howstuffworks.com"/>
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
                                    <h3 className="card-title mt-4">Public profile</h3>
                                    <p className="card-subtitle">Making your profile public means that anyone on the
                                        Dashkit network will be able to find
                                        you.</p>
                                    <div>
                                        <label className="form-check form-switch form-switch-lg">
                                            <input className="form-check-input" type="checkbox"/>
                                            <span className="form-check-label form-check-label-on">You're currently visible</span>
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
    </div>
);

export default UserSettingsPage;
