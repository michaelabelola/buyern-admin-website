import React, {FC} from 'react';
import {Route, Routes, Navigate, useParams} from 'react-router-dom';
import './App.css';
import SideNavigationView from "./components/SideNavigationView/SideNavigationView.lazy";
import MainHeader from "./components/MainHeader/MainHeader.lazy";
import InventoriesPage from "./pages/InventoriesPage/InventoriesPage.lazy";
import LoginPage from "./pages/LoginPage/LoginPage.lazy";
import SignUp from "./pages/SignUp/SignUp.lazy";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage.lazy";

const Redirect: FC<{ to: string }> = (props) => {
    return <Navigate to={`/${useParams().entityId + props.to}`} replace/>
}

function App() {
    return (

        <div className="App page">
            {/*side nav routes*/}
            <Routes>
                <Route path={"/account"}>
                    <Route index={true} path={"*"} element={<SideNavigationView />}/>
                </Route>
                <Route path={"/entity"}>
                    <Route index={true} path={"*"} element={<SideNavigationView />}/>
                    {/*<Route path={"/entity/:entityUid"} element={}/>*/}
                </Route>
            </Routes>

            {/*Header routes*/}
            <Routes>
                <Route path={"/account"}>
                    <Route index={true} path={"*"} element={<MainHeader />}/>
                </Route>
                <Route path={"/entity"}>
                    <Route index={true} path={"*"} element={<MainHeader />}/>
                </Route>
            </Routes>

            <Routes>
                <Route path={"/account"}>
                    <Route index={true} element={<Navigate to={`/account/dashboard`} replace/>}/>
                    <Route index={true} path={"/account/dashboard"} element={<MainHeader />}/>
                </Route>
                <Route path={"/entity"}>
                    <Route index={true} element={<Navigate to={`/account/entities`} replace/>}/>
                    if entityId is undefined, redirect to account/entities
                </Route>
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


const _InventoriesPage: FC = () => {
    return <div>aa</div>
}


export default App;
