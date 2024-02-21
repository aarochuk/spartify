import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Entry from './pages/Entry';
import Signup from './pages/Signup';
import Home from "./pages/Home";


export default function App(){
    return (
        <Router>
            <Routes>
                <Route index exact path="/" element={<Entry/>}/>
                <Route exact path="/signup" element={<Signup/>}/>
                <Route exact path="/home" element={<Home/>}/>
            </Routes>
        </Router>
    )
}