import React, {FC, ReactElement} from 'react';
import logo from '../../logo.svg';
import './SideNavigationView.css';
import {
    IconAsset,
    IconBox, IconBuilding, IconCashBanknote, IconDashboard,
    IconLifebuoy,
    IconLockAccess, IconManualGearbox, IconPhoneCall,
    IconPigMoney, IconSettings, IconStars,
    TablerIcon
} from "@tabler/icons";
import {NavLink, useParams} from "react-router-dom";

interface SideNavigationViewProps {
}

const SideNavigationView: FC<SideNavigationViewProps> = () => {
    let {entityUid} = useParams();
    // console.log(useMatches())
    // console.log(useResolvedPath("aa/ss/rr"))
    // console.log(useParams())
    // check if path is an entity path
    // console.log(entityUid)
    return (
        <div className="SideNavigationView">
            <aside className="navbar navbar-vertical navbar-expand-lg">
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

                            {
                                entityUid ?
                                    <ul>
                                        <SideNavigationViewItem text={"Inventory"} icon={IconBox}>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/inventory/dashboard`}
                                                text={"Dashboard"}/>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/inventory/all`}
                                                text={"All Inventories"}/>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/inventory/Archive`}
                                                text={"Archive"}/>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/inventory/trash`}
                                                text={"Trash"}/>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/inventory/add`}
                                                text={"Add Inventory"}/>
                                        </SideNavigationViewItem>
                                        <SideNavigationViewItem text={"Assets Manager"} icon={IconAsset}>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/assets/dashboard`}
                                                                       text={"Dashboard"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/assets/all`}
                                                                       text={"View Assets"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/assets/active`}
                                                                       text={"Active Assets"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/assets/register`}
                                                                       text={"Register Asset"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/assets/trash`}
                                                                       text={"Trash"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/assets/archive`}
                                                                       text={"Archive"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/assets/groups`}
                                                                       text={"Groups"}/>
                                        </SideNavigationViewItem>
                                        <SideNavigationViewItem text={"Finance"} icon={IconPigMoney}>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/finance/dashboard`}
                                                                       text={"Dashboard"}/>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/finance/transactions`}
                                                text={"Transactions"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/finance/disputes`}
                                                                       text={"Disputes"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/finance/accounts`}
                                                                       text={"Accounts"}/>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/finance/transactionHistory`}
                                                text={"Transaction History"}/>
                                        </SideNavigationViewItem>
                                        <SideNavigationViewItem text={"Stakeholders"} icon={IconLockAccess}>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/Stakeholders/dashboard`}
                                                text={"Dashboard"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/Stakeholders/all`}
                                                                       text={"All Stakeholders"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/Stakeholders/staffs`}
                                                                       text={"Staffs"}/>
                                            {/*for delivery company show*/}
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/Stakeholders/dashboard`}
                                                text={"Drivers"}/>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/Stakeholders/register`}
                                                text={"Register"}/>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/Stakeholders/Archive`}
                                                text={"Archive"}/>
                                        </SideNavigationViewItem>
                                        <SideNavigationViewItem text={"Roles/Permissions"} icon={IconLockAccess}>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/roles-permissions/dashboard`}
                                                text={"Dashboard"}/>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/roles-permissions/dashboard`}
                                                text={"Session Tracker"}/>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/roles-permissions/roles/view`}
                                                text={"View Role"}/>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/roles-permissions/roles/create`}
                                                text={"Create Role"}/>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/roles-permissions/permissions/view`}
                                                text={"View Permission"}/>
                                            <SideNavigationViewSubItem
                                                link={`/entity/${entityUid}/roles-permissions/permissions/create`}
                                                text={"Create Permission"}/>
                                        </SideNavigationViewItem>
                                        <SideNavigationViewItem text={"Issues Tracker"} icon={IconPhoneCall}>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/cs`}
                                                                       text={"Dashboard"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/cs`}
                                                                       text={"Open A New Issues"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/cs`}
                                                                       text={"Closed Issues"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/cs`}
                                                                       text={"Archived Issues"}/>
                                        </SideNavigationViewItem>
                                        <SideNavigationViewItem text={"Customer Service"} icon={IconPhoneCall}>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/cs`}
                                                                       text={"Dashboard"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/cs`} text={"Chat"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/cs`}
                                                                       text={"All Customers"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/cs`}
                                                                       text={"Current Issues"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/cs`}
                                                                       text={"Completed Issues"}/>
                                        </SideNavigationViewItem>
                                        <SideNavigationViewItem text={"Help"} icon={IconLifebuoy}>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Inventories"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Asset"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Finance"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Stakeholders"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Roles/Permissions"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Inventories"}/>
                                        </SideNavigationViewItem>
                                        <SideNavigationViewItem text={"Review/Rating System"} icon={IconStars}>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"All Reviews"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Asset"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Finance"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Stakeholders"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Roles/Permissions"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Inventories"}/>
                                        </SideNavigationViewItem>
                                        <SideNavigationViewItem text={"Settings"} icon={IconSettings}>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Inventories"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Asset"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Finance"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Stakeholders"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Roles/Permissions"}/>
                                            <SideNavigationViewSubItem link={`/entity/${entityUid}/help`}
                                                                       text={"Inventories"}/>
                                        </SideNavigationViewItem>
                                    </ul>
                                    :
                                    <ul>
                                        <SideNavigationViewItem text={"Dashboard"} link={"/account/dashboard"}
                                                                icon={IconDashboard}/>
                                        <SideNavigationViewItem text={"My Account"} link={"/account/profile"}
                                                                icon={IconBox}/>
                                        <SideNavigationViewItem text={"Entities"} link={"/account/entities"}
                                                                icon={IconBuilding}/>
                                        <SideNavigationViewItem text={"Finance"} link={"/account/finance"}
                                                                icon={IconCashBanknote}/>
                                        <SideNavigationViewItem text={"Settings"} link={"/account/settings"}
                                                                icon={IconManualGearbox}/>
                                    </ul>
                            }
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    )
};


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

                <NavLink to={props.link ? props.link : ""} className={({isActive}) =>
                    isActive ? "nav-link active" : "nav-link"}>
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
                </NavLink>
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

                <div className="dropdown-menu show custom-dropdown-menu" data-bs-popper="static">
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
        <div className="dropdown-menu-column ps-lg-4 mt-1">
            <NavLink to={props.link ? props.link : ""} className={({isActive}) =>
                isActive ? "dropdown-menu active d-block p-1 bg-transparent" : "dropdown-menu d-block p-1 bg-transparent"}
                     style={{background: "red !important"}}>
                {props.text}
            </NavLink>
        </div>
    )
}
export default SideNavigationView;
