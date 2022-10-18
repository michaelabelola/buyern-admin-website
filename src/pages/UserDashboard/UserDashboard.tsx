import React, {FC} from 'react';
import './UserDashboard.css';
import logo from './../../logo.svg';
import {
    IconBrandFacebook,
    IconBrandTwitter,
    IconCurrencyDollar,
    IconMinus,
    IconShoppingCart,
    IconTrendingUp,
} from "@tabler/icons";
import PageHeader from "../../components/PageHeader/PageHeader.lazy";
import DashboardCard1 from "../../components/DashboardElements/DashboardElements";

interface UserDashboardProps {
}

const UserDashboard: FC<UserDashboardProps> = () => (
    <div className="page-wrapper UserDashboard page_main">

        {/*Page header*/}
        <PageHeader title={"Dashboard"} smallText={"Account"} actionList={
            [
                <button key={1} className={"d-none d-sm-inline btn btn-md btn-outline-secondary"}>weyrey</button>,
                <button key={2} className={"d-none d-sm-inline btn btn-md btn-outline-white"}>weyrey</button>,
                ]
        }/>

        <div className="page-body">
            <div className="container-xl">
                <div className="row row-deck row-cards">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="subheader">Sales</div>
                                    <div className="ms-auto lh-1">
                                        <div className="dropdown">
                                            <a className="dropdown-toggle text-muted" href="/" data-bs-toggle="dropdown"
                                               aria-expanded="false">Last 7 days</a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item active" href="/">Last 7 days</a>
                                                <a className="dropdown-item" href="/">Last 30 days</a>
                                                <a className="dropdown-item" href="/">Last 3 months</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h1 mb-3">75%</div>
                                <div className="d-flex mb-2">
                                    <div>Conversion rate</div>
                                    <div className="ms-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          7% <IconTrendingUp/>
                        </span>
                                    </div>
                                </div>
                                <div className="progress progress-sm">
                                    <div className="progress-bar bg-primary" style={{width: "75%"}} role="progressbar"
                                         aria-label="75% Complete">
                                        <span className="visually-hidden">75% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="subheader">Revenue</div>
                                    <div className="ms-auto lh-1">
                                        <div className="dropdown">
                                            <a className="dropdown-toggle text-muted" href="/" data-bs-toggle="dropdown"
                                               aria-expanded="false">Last 7 days</a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item active" href="/">Last 7 days</a>
                                                <a className="dropdown-item" href="/">Last 30 days</a>
                                                <a className="dropdown-item" href="/">Last 3 months</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline">
                                    <div className="h1 mb-0 me-2">$4,300</div>
                                    <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8% <IconTrendingUp/>
                        </span>
                                    </div>
                                </div>
                            </div>
                            <div id="chart-revenue-bg" className="chart-sm"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="subheader">New clients</div>
                                    <div className="ms-auto lh-1">
                                        <div className="dropdown">
                                            <a className="dropdown-toggle text-muted" href="/" data-bs-toggle="dropdown"
                                               aria-expanded="false">Last 7 days</a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item active" href="/">Last 7 days</a>
                                                <a className="dropdown-item" href="/">Last 30 days</a>
                                                <a className="dropdown-item" href="/">Last 3 months</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline">
                                    <div className="h1 mb-3 me-2">6,782</div>
                                    <div className="me-auto">
                        <span className="text-yellow d-inline-flex align-items-center lh-1">
                          0% <IconMinus/>
                        </span>
                                    </div>
                                </div>
                                <div id="chart-new-clients" className="chart-sm"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="subheader">Active users</div>
                                    <div className="ms-auto lh-1">
                                        <div className="dropdown">
                                            <a className="dropdown-toggle text-muted" href="/" data-bs-toggle="dropdown"
                                               aria-expanded="false">Last 7 days</a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item active" href="/">Last 7 days</a>
                                                <a className="dropdown-item" href="/">Last 30 days</a>
                                                <a className="dropdown-item" href="/">Last 3 months</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline">
                                    <div className="h1 mb-3 me-2">2,986</div>
                                    <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          4% <IconTrendingUp/>
                        </span>
                                    </div>
                                </div>
                                <div id="chart-active-users" className="chart-sm"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cards mt-1">
                    <DashboardCard1 icon={<IconCurrencyDollar/>} topic={"132 Sales"}
                                    subText={"12 waiting payments"}/>
                    <DashboardCard1 icon={<IconShoppingCart/>} topic={"78 Orders"} subText={"32 shipped"}/>
                    <DashboardCard1 icon={<IconBrandTwitter/>} topic={"623 Shares"} subText={"16 today"}/>
                    <DashboardCard1 icon={<IconBrandFacebook/>} topic={"132 Likes"} subText={"21 today"}/>

                </div>
                <div className="col-md-6 col-lg-4 mt-2">
                    <a href="https://github.com/sponsors/codecalm" className="card card-sponsor" target="_blank"
                       rel="noreferrer" style={{backgroundImage: `url(${logo})`}}
                       aria-label="Sponsor Buyern!">
                        <div className="card-body"/>
                    </a>
                </div>
            </div>
        </div>

    </div>
);

export default UserDashboard;