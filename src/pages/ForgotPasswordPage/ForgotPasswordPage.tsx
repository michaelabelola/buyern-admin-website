import React, {FC} from 'react';
import logo from '../../logo.svg';
import './ForgotPasswordPage.css';
import {IconMail} from "@tabler/icons";

interface ForgotPasswordPageProps {
}

const ForgotPasswordPage: FC<ForgotPasswordPageProps> = () => (
    <div className="page page-center">
        <div className="container container-tight py-4">
            <div className="text-center mb-4">
                <a href="." className="navbar-brand navbar-brand-autodark">
                    <img src={logo} height="36" alt=""/>
                </a>
            </div>
            <form className="card card-md" action="./" method="get" autoComplete="off" noValidate>
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Forgot password</h2>
                    <p className="text-muted mb-4">Enter your email address and your password will be reset and emailed
                        to you.</p>
                    <div className="mb-3 d-flex flex-column align-items-start">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"/>
                    </div>
                    <div className="form-footer">
                        <a href={"/"} className="btn btn-primary w-100">
                            <IconMail/>
                            Send Password Reset Link
                        </a>
                    </div>
                </div>
            </form>
            <div className="text-center text-muted mt-3">
                Forget it, <a href={"/login"}>send me back</a> to the sign in screen.
            </div>
        </div>
    </div>

);

export default ForgotPasswordPage;
