import React, { useState } from "react";
import UserRegistration from "./pages/user_registration";
import UserProfile from "./pages/user_profile";
import UserStats from "./pages/user_stats";
import UserTransactions from "./pages/user_transactions";
import UserVisualStats from "./pages/user_visual_stats";
import {Link, BrowserRouter, Routes, Route} from "react-router-dom";

const FinanceTrackerApp = () => {
    const[isSigned, setIsSigned] = useState(false);
    
    return(
        <>
        <BrowserRouter>
            <div>
                <Link to = "/signin"> signin </Link>
            </div>
            <div>
                <Link to = "/profile"> profile </Link>
            </div>
            <div>
                <Link to = "/stats"> stats </Link>
            </div>
            <div>
                <Link to = "/transactions"> transactions </Link>
            </div>
            <div>
                <Link to = "/graphics"> graphics </Link>
            </div>

            <Routes>
                <Route path="/signin" element={<UserRegistration/>}/>
                <Route path="/profile" element={<UserProfile/>} />
                <Route path="/stats" element={<UserStats/>} />
                <Route path="/transactions" element={<UserTransactions/>} />
                <Route path="/graphics" element={<UserVisualStats/>} />
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default FinanceTrackerApp;