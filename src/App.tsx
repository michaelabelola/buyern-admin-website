import React from 'react';
import {Navigate, Route, Routes, useParams} from 'react-router-dom';
import './App.css';
import SideNavigationView from "./components/SideNavigationView/SideNavigationView.lazy";
import MainHeader from "./components/MainHeader/MainHeader.lazy";
import InventoriesPage from "./pages/InventoriesPage/InventoriesPage.lazy";

function App() {
    return (
        <div className="App page">
            <Routes>
                <Route path={"/:entityUid"}>

                    <Route path={"/:entityUid"} element={
                        <div>
                            <MainHeader/>
                            <InventoriesPage/>
                            <SideNavigationView/>
                        </div>
                    }/>

                </Route>

                <Route path={"/login"} element={
                    <div>
                    </div>
                }/>
            </Routes>

        </div>
    );
}

export default App;
