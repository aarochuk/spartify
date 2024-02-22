import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Entry from './pages/Entry';
import Signup from './pages/Signup';
import Home from "./pages/Home";
import Party from "./pages/Party";
import MyMusic from "./pages/MyMusic";

export default function App(){
    return (
        <Router>
            <Routes>
                <Route index exact path="/" element={<Entry/>}/>
                <Route exact path="/signup" element={<Signup/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/party" element={<Party/>}/>
                <Route exact path="/mymusic" element={<MyMusic/>}/>
            </Routes>
        </Router>
    )
}