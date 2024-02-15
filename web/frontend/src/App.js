import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Entry from './pages/Entry';
import Signup from './pages/Signup';


export default function App(){
    return (
        <Router>
            <Routes>
                <Route index exact path="/" element={<Entry/>}/>
                <Route exact path="/signup" element={<Signup/>}/>
            </Routes>
        </Router>
    )
}