import React from "react";
import ReactDOM from "react-dom/client";
import { MeditokenApp } from "./MeditokenApp";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "./style.css"



ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <MeditokenApp />
    </React.StrictMode>
);