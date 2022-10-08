import React, {FC, ReactElement} from 'react';
import logo from '../../logo.svg';
import './SideNavigationView.css';
import {
    IconAsset,
    IconBox,
    IconLifebuoy,
    IconLockAccess, IconPhoneCall,
    IconPigMoney, IconSettings, IconStars,
    TablerIcon
} from "@tabler/icons";
import {NavLink} from "react-router-dom";

interface SideNavigationViewProps {
}

const SideNavigationView: FC<SideNavigationViewProps> = () => (
    <div className="SideNavigationView">
        <aside className="navbar navbar-vertical navbar-expand-lg navbar-transparent">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbar-menu">
                    <span className="navbar-toggler-icon"/>
                </button>
                <h1 className="navbar-brand navbar-brand-autodark">
                    <a href="/">
                        <img src={logo} width="110" height="32" alt="Buyern" className="navbar-brand-image"/>
                    </a>
                </h1>
                <div className="collapse navbar-collapse pb-3" id="navbar-menu">
                    <ul className="navbar-nav pt-lg-3">
                        <SideNavigationViewItem text={"Inventories"} icon={IconBox}>
                            <SideNavigationViewSubItem link={"/inventories/dashboard"} text={"Dashboard"}/>
                            <SideNavigationViewSubItem link={"/inventories/dashboard"} text={"View All"}/>
                            <SideNavigationViewSubItem link={"/inventories/dashboard"} text={"Archive"}/>
                            <SideNavigationViewSubItem link={"/inventories/dashboard"} text={"Trash"}/>
                            <SideNavigationViewSubItem link={"/inventories/dashboard"} text={"Add Inventory"}/>
                            <SideNavigationViewSubItem link={"/inventories/dashboard"} text={"Add Inventory"}/>
                        </SideNavigationViewItem>
                        <SideNavigationViewItem text={"Assets Manager"} icon={IconAsset}>
                            <SideNavigationViewSubItem link={"/assets/dashboard"} text={"Dashboard"}/>
                            <SideNavigationViewSubItem link={"/assets/all"} text={"View Assets"}/>
                            <SideNavigationViewSubItem link={"/assets/active"} text={"Active Assets"}/>
                            <SideNavigationViewSubItem link={"/assets/register"} text={"Register Asset"}/>
                            <SideNavigationViewSubItem link={"/assets/trash"} text={"Trash"}/>
                            <SideNavigationViewSubItem link={"/assets/archive"} text={"Archive"}/>
                            <SideNavigationViewSubItem link={"/assets/groups"} text={"Groups"}/>
                        </SideNavigationViewItem>
                        <SideNavigationViewItem text={"Finance"} icon={IconPigMoney}>
                            <SideNavigationViewSubItem link={"/finance/dashboard"} text={"Dashboard"}/>
                            <SideNavigationViewSubItem link={"/finance/transactions"} text={"Transactions"}/>
                            <SideNavigationViewSubItem link={"/finance/disputes"} text={"Disputes"}/>
                            <SideNavigationViewSubItem link={"/finance/accounts"} text={"Accounts"}/>
                            <SideNavigationViewSubItem link={"/finance/transactionHistory"}
                                                       text={"Transaction History"}/>
                        </SideNavigationViewItem>

                        <SideNavigationViewItem text={"Stakeholders"} icon={IconLockAccess}>
                            <SideNavigationViewSubItem link={"/Stakeholders/dashboard"} text={"Dashboard"}/>
                            <SideNavigationViewSubItem link={"/Stakeholders/all"} text={"All Stakeholders"}/>
                            <SideNavigationViewSubItem link={"/Stakeholders/staffs"} text={"Staffs"}/>
                            {/*for delivery company show*/}
                            <SideNavigationViewSubItem link={"/Stakeholders/dashboard"} text={"Drivers"}/>
                            <SideNavigationViewSubItem link={"/Stakeholders/register"} text={"Register"}/>
                            <SideNavigationViewSubItem link={"/Stakeholders/Archive"} text={"Archive"}/>
                        </SideNavigationViewItem>
                        <SideNavigationViewItem text={"Roles/Permissions"} icon={IconLockAccess}>
                            <SideNavigationViewSubItem link={"/roles-permissions/dashboard"} text={"Dashboard"}/>
                            <SideNavigationViewSubItem link={"/roles-permissions/dashboard"} text={"Session Tracker"}/>
                            <SideNavigationViewSubItem link={"/roles-permissions/roles/view"} text={"View Role"}/>
                            <SideNavigationViewSubItem link={"/roles-permissions/roles/create"} text={"Create Role"}/>
                            <SideNavigationViewSubItem link={"/roles-permissions/permissions/view"}
                                                       text={"View Permission"}/>
                            <SideNavigationViewSubItem link={"/roles-permissions/permissions/create"}
                                                       text={"Create Permission"}/>
                        </SideNavigationViewItem>

                        <SideNavigationViewItem text={"Issues Tracker"} icon={IconPhoneCall}>
                            <SideNavigationViewSubItem link={"/cs"} text={"Dashboard"}/>
                            <SideNavigationViewSubItem link={"/cs"} text={"Open A New Issues"}/>
                            <SideNavigationViewSubItem link={"/cs"} text={"Closed Issues"}/>
                            <SideNavigationViewSubItem link={"/cs"} text={"Archived Issues"}/>
                        </SideNavigationViewItem>
                        <SideNavigationViewItem text={"Customer Service"} icon={IconPhoneCall}>
                            <SideNavigationViewSubItem link={"/cs"} text={"Dashboard"}/>
                            <SideNavigationViewSubItem link={"/cs"} text={"Chat"}/>
                            <SideNavigationViewSubItem link={"/cs"} text={"All Customers"}/>
                            <SideNavigationViewSubItem link={"/cs"} text={"Current Issues"}/>
                            <SideNavigationViewSubItem link={"/cs"} text={"Completed Issues"}/>
                        </SideNavigationViewItem>
                        <SideNavigationViewItem text={"Help"} icon={IconLifebuoy}>
                            <SideNavigationViewSubItem link={"/help"} text={"Inventories"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Asset"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Finance"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Stakeholders"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Roles/Permissions"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Inventories"}/>
                        </SideNavigationViewItem>

                        <SideNavigationViewItem text={"Review/Rating System"} icon={IconStars}>
                            <SideNavigationViewSubItem link={"/help"} text={"All Reviews"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Asset"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Finance"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Stakeholders"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Roles/Permissions"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Inventories"}/>
                        </SideNavigationViewItem>

                        <SideNavigationViewItem text={"Settings"} icon={IconSettings}>
                            <SideNavigationViewSubItem link={"/help"} text={"Inventories"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Asset"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Finance"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Stakeholders"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Roles/Permissions"}/>
                            <SideNavigationViewSubItem link={"/help"} text={"Inventories"}/>
                        </SideNavigationViewItem>

                    </ul>
                </div>
            </div>
        </aside>
    </div>
);


interface SideNavigationViewItemProps {
    link?: string;
    children?: any;
    icon?: TablerIcon;
    text?: string | ReactElement;
}

const SideNavigationViewItem: FC<SideNavigationViewItemProps> = (props) => {
    if (!props.children || (props.children && props.children.length <= 0))
        return (
            <li className="nav-item">
                <a className="nav-link" href={props.link}>
                    {
                        props.icon ?
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                {React.createElement(props.icon, {strokeLinecap: "round"})}
                            </span>
                            :
                            ""
                    }
                    {
                        props.text ?
                            <span className="nav-link-title">
                                {props.text}
                            </span>
                            :
                            ""
                    }
                </a>
            </li>
        )
    else
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle show" href="#navbar-base" data-bs-toggle="dropdown"
                   data-bs-auto-close="false" role="button" aria-expanded="true">
                    {
                        props.icon ?
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                {React.createElement(props.icon, {strokeLinecap: "round"})}
                            </span>
                            :
                            ""
                    }
                    {
                        props.text ?
                            <span className="nav-link-title">
                                {props.text}
                            </span>
                            :
                            ""
                    }

                </a>

                <div className="dropdown-menu show" data-bs-popper="static">
                    <div className="dropdown-menu-columns">
                        {props.children}
                    </div>
                </div>
            </li>
        )


}

interface SideNavigationViewSubItemProps {
    link?: string;
    text?: string;
}

const SideNavigationViewSubItem: FC<SideNavigationViewSubItemProps> = (props) => {

    return (
        <div className="dropdown-menu-column ps-lg-4">
            <NavLink to={props.link ? props.link : ""} className={"dropdown-item"}>
                {props.text}
            </NavLink>
        </div>
    )
}
export default SideNavigationView;
