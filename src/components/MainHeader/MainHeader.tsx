import React, {FC} from 'react';
import './MainHeader.css';
import logo from '../../logo.svg';
import {
    IconAdjustmentsAlt,
    IconBell,
    IconMoon,
    IconSearch,
    IconStar,
    IconSun
} from "@tabler/icons";

interface MainHeaderProps {
}

const MainHeader: FC<MainHeaderProps> = () => {
    return (
        <header className="MainHeader navbar navbar-expand-md navbar-light d-none d-lg-flex d-print-none">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbar-menu">
                    <span className="navbar-toggler-icon"/>
                </button>
                <HeaderSearch/>
                <HeaderNotificationView/>
            </div>
        </header>
    )
};

const HeaderNotificationView: FC<MainHeaderProps> = () => {

    return (
        <div className="navbar-nav flex-row order-md-last">
            <div className="d-none d-md-flex">
                <div className="nav-link px-0 hide-theme-dark" data-bs-toggle="tooltip"
                     data-bs-placement="bottom" aria-label="Enable dark mode">

                    <IconMoon strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={2}
                              stroke={"currentColor"}/>
                </div>
                <div className="nav-link px-0 hide-theme-light" data-bs-toggle="tooltip"
                     data-bs-placement="bottom" aria-label="Enable light mode">

                    <IconSun strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={2}
                             stroke={"currentColor"}/>
                </div>

                <div className="nav-item dropdown d-none d-md-flex me-3">
                    <a href="/" className="nav-link px-0" data-bs-toggle="dropdown" tabIndex={-1}
                       aria-label="Show notifications" style={{position: "relative"}}>

                        <IconBell strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={2}
                                  stroke={"currentColor"}/>
                        <span
                            className="status-dot status-dot-animated bg-red d-block position-absolute top-0 end-0"/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Last updates</h3>
                            </div>
                            <div className="list-group list-group-flush list-group-hoverable">
                                <div className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-auto"><span
                                            className="status-dot status-dot-animated bg-red d-block"/>
                                        </div>
                                        <div className="col text-truncate">
                                            <a href="/" className="text-body d-block">Example 1</a>
                                            <div className="d-block text-muted text-truncate mt-n1">
                                                Change deprecated html tags to text decoration classes (#29604)
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <a href="/" className="list-group-item-actions">

                                                <IconStar strokeLinecap={"round"} strokeLinejoin={"round"} scale={0.5}
                                                          strokeWidth={2} stroke={"currentColor"}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-auto"><span className="status-dot d-block"/>
                                        </div>
                                        <div className="col text-truncate">
                                            <a href="/" className="text-body d-block">Example 2</a>
                                            <div className="d-block text-muted text-truncate mt-n1">
                                                justify-content:between ⇒ justify-content:space-between (#29734)
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <a href="/" className="list-group-item-actions show">

                                                <IconStar strokeLinecap={"round"} strokeLinejoin={"round"}
                                                          strokeWidth={2} stroke={"currentColor"}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-auto"><span className="status-dot d-block"/>
                                        </div>
                                        <div className="col text-truncate">
                                            <a href="/" className="text-body d-block">Example 3</a>
                                            <div className="d-block text-muted text-truncate mt-n1">
                                                Update change-version.js (#29736)
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <a href="/" className="list-group-item-actions">

                                                <IconStar strokeLinecap={"round"} strokeLinejoin={"round"}
                                                          strokeWidth={2} stroke={"currentColor"}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-auto"><span
                                            className="status-dot status-dot-animated bg-green d-block"/>
                                        </div>
                                        <div className="col text-truncate">
                                            <a href="/" className="text-body d-block">Example 4</a>
                                            <div className="d-block text-muted text-truncate mt-n1">
                                                Regenerate package-lock.json (#29730)
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <a href="/" className="list-group-item-actions">

                                                <IconStar strokeLinecap={"round"} strokeLinejoin={"round"}
                                                          strokeWidth={2} stroke={"currentColor"}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <UserMenu/>
        </div>
    )
}

const UserMenu: FC<MainHeaderProps> = () => {
    return (
        <div className="nav-item dropdown">
            <a href="/" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown"
               aria-label="Open user menu">
                            <span className="avatar avatar-sm rounded-circle p-2"
                                  style={{backgroundImage: `url(${logo})`}}/>
                <div className="d-none d-xl-block ps-2">
                    <div>Abel M.</div>
                    <div className="mt-1 small text-muted">Attendant</div>
                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow UserMenuDropDownMenu">
                <a href="/" className="dropdown-item">Online
                    <span className="status-dot status-dot-animated bg-green d-block"
                          style={{marginLeft: "5px", marginRight: "5px"}}/>
                </a>
                <a href="/" className="dropdown-item">Profile</a>
                <a href="/" className="dropdown-item">Feedback</a>
                <a href="/" className="dropdown-item">Finances</a>
                <div className="dropdown-divider"/>
                <a href="/" className="dropdown-item"> Settings</a>
                <a href="/" className="dropdown-item"> Logout</a>
            </div>
        </div>
    )
}

const HeaderSearch: FC<MainHeaderProps> = () => {
    return (
        <div className="navbar-brand d-none-navbar-horizontal pe-0 pe-md-3" id="navbar-menu">
            <div>
                <form action="./" method="get" autoComplete="off" noValidate>
                    <div className="input-icon input-group input-group-flat">
                  <span className="input-icon-addon">
                    <IconSearch strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={2}
                                stroke={"currentColor"}/>
                  </span>

                        <input type="text" className="form-control border-0" placeholder="Search…"
                               aria-label="Search Everywhere or search Inventories"/>
                        <span
                            className="input-icon-addon border-0 justify-content-center align-items-center cursor-pointer">
                                     <IconAdjustmentsAlt strokeLinecap={"round"} strokeLinejoin={"round"}
                                                         strokeWidth={2} className={"cursor-pointer"}
                                                         stroke={"currentColor"}/>
                              </span>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default MainHeader;
