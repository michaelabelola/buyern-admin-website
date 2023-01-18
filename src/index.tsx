import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import axios from "axios";
import {BaseUrls} from "./enums/BaseUrls";
import {userAccessToken} from "./helpers/AccessToken";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
axios.interceptors.request.use(config => {
    if (config.baseURL === BaseUrls.USER_URL) {
        if (config.headers)
            config.headers[userAccessToken.tokenId] = userAccessToken.token;
        else
            config.headers = {
                [userAccessToken.tokenId]: userAccessToken.token
            }
    }
    return config;
})
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
