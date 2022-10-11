import React, {FC} from 'react';
import logo from '../../logo.svg';
import './LoginPage.css';
import StatusModal from "../../components/StatusModal/StatusModal.lazy";
import {Status} from "../../enums/Status";
import {ModalId} from "../../components/StatusModal/StatusModal";

interface LoginPageProps {
}

const LoginPage: FC<LoginPageProps> = () => {
    let loginModalId = new ModalId("loginModal");
    return (
        <div className="row g-0 flex-fill">
            <div
                className="col-12 col-lg-6 col-xl-4 border-top-wide border-primary d-flex flex-column justify-content-center"
                style={{background: "var(--tblr-card-bg)"}}>
                <div className="container container-tight my-5 px-lg-5">
                    <div className="text-center mb-4">
                        <a href="." className="navbar-brand navbar-brand-autodark">
                            <img src={logo} height="36" alt=""/>
                        </a>
                    </div>
                    <h2 className="h3 text-center mb-3">
                        Login to your account
                    </h2>
                    <form action="./" method="get" autoComplete="off" noValidate>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="your@email.com" autoComplete="off"/>
                        </div>
                        <div className="mb-2 d-flex flex-column align-items-start">
                            <label className="form-label d-flex">
                                <div className={"flex-grow-1"}>Password</div>
                                <div className="form-label-description">
                                    <a href={"/forgot-password"}>Forgot password</a>
                                </div>
                            </label>
                            <div className="input-group input-group-flat">
                                <input type="password" className="form-control" placeholder="Your password"
                                       autoComplete="off"/>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="form-check">
                                <input type="checkbox" className="form-check-input"/>
                                <span className="form-check-label text-start">Remember me on this device</span>
                            </label>
                        </div>
                        <div className="form-footer">
                            <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal"
                                    data-bs-target={loginModalId.openerId}>Sign in
                            </button>
                        </div>
                    </form>
                    <div className="text-center text-muted mt-3">
                        Don't have account yet? <a href={"/register"} tabIndex={-1}
                                                   className={"text-uppercase"}>Register</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-8 d-none d-lg-block">
                <div className="bg-cover h-100 min-vh-100" style={{backgroundImage: `url(${logo})`}}/>
            </div>
            <StatusModal title={"Account Created"} status={Status.SUCCESS}
                         text={<div>abelmichaelola@gmail.com <br/> Michael Abel</div>}
                         actionButton={{
                             text: "Go To Dashboard", callback: () => {
                             }
                         }}

                     modalId={loginModalId}
            />
        </div>

    )
};

export default LoginPage;