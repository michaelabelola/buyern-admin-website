import React, {useState} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import SideNavigationView from "./components/SideNavigationView/SideNavigationView.lazy";
import MainHeader from "./components/MainHeader/MainHeader.lazy";
import InventoriesPage from "./pages/InventoriesPage/InventoriesPage.lazy";
import UserDashboard from "./pages/UserDashboard/UserDashboard.lazy";
import EntitiesGalleryPage from "./pages/EntitiesGalleryPage/EntitiesGalleryPage.lazy";
import Dashboard from "./components/Dashboard/Dashboard.lazy";
import UserFinancePage from "./components/UserFinancePage/UserFinancePage.lazy";
import SignUp from "./pages/SignUp/SignUp.lazy";
import LoginPage from "./pages/LoginPage/LoginPage.lazy";
import ProfilePage from "./pages/ProfilePage/ProfilePage.lazy";
import UserSettingsPage from "./pages/UserSettingsPage/UserSettingsPage.lazy";

// const Redirect: FC<{ to: string }> = (props) => {
//     return <Navigate to={`/${useParams().entityId + props.to}`} replace/>
// }

function App() {
    let [entityUid] = useState("rsgeareruigharelisv");
    return (

        <div className="App page">
            {/*side nav routes*/}
            <Routes>
                <Route path={"/"} element={<Navigate to={`/account`} replace/>}/>
                <Route path={"/account"}>
                    <Route index={true} path={"*"} element={<SideNavigationView/>}/>
                </Route>
                <Route path={"/entity"}>
                    <Route index={true} path={"/entity/:entityUid/*"} element={<SideNavigationView/>}/>
                    {/*<Route index={true} path={"entity/:entityUid/inventory"} element={<SideNavigationView/>}/>*/}
                    {/*<Route path={"/entity/:entityUid"} element={}/>*/}
                </Route>
            </Routes>
            {/*Header routes*/}
            <Routes>
                <Route path={"/account"}>
                    <Route index={true} path={"*"} element={<MainHeader/>}/>
                </Route>
                <Route path={"/entity"}>
                    <Route index={true} path={"*"} element={<MainHeader/>}/>
                </Route>
            </Routes>
            <Routes>
                <Route path={"/account"}>
                    <Route index={true} element={<Navigate to={`/account/dashboard`} replace/>}/>
                    <Route path={"/account/dashboard"} element={<UserDashboard/>}/>
                    <Route path={"/account/profile"} element={<ProfilePage/>}/>
                    <Route path={"/account/settings"} element={<UserSettingsPage/>}/>
                    <Route path={"/account/entities"} element={<EntitiesGalleryPage/>}/>
                    <Route path={"/account/finance"} element={<UserFinancePage/>}/>
                </Route>
                <Route path={"/entity"}>
                    <Route index={true} element={<Navigate to={`/entity/${entityUid}/inventory`} replace/>}/>
                    <Route path={"/entity/:entityUid/inventory"}>
                        <Route index={true}
                               element={<Navigate to={`/entity/${entityUid}/inventory/dashboard`} replace/>}/>
                        <Route path={'/entity/:entityUid/inventory/dashboard'} element={<Dashboard/>}/>
                        <Route path={'/entity/:entityUid/inventory/all'} element={<InventoriesPage/>}/>
                    </Route>
                    {/*if entityId is undefined, redirect to account/entities*/}
                </Route>
                <Route path={"/register"} element={<SignUp/>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
            </Routes>
        </div>
        // <div className="App page">
        //     <Routes>
        //         <Route path={"/entity"}>
        //             <Routes location={"/entity"}>
        //
        //             </Routes>
        //             <Route path={"/entity/:entityUid"} element={
        //                 <div>
        //                     <InventoriesPage/>
        //                 </div>
        //             }/>
        //         </Route>
        //
        //         <Route path={"/login"} element={<LoginPage/>}/>
        //         <Route path={"/register"} element={<SignUp/>}/>
        //         <Route path={"/forgot-password"} element={<ForgotPasswordPage/>}/>
        //     </Routes>
        //
        // </div>
    );
}

export default App;
