import React from "react";
import {Link, BrowserRouter, Route, Routes} from "react-router-dom";
import Stats from "../pages/Stats/stats";
import Profile from "../pages/Profile/profile";
import Transactions from "../pages/Transactions/transactions";
import Graphics from "../pages/Graphics/graphics";
import NavGroupStyles from "./nav_group_styles";
import Home from "../pages/Home/home";

const NavGroup = (props) => {
    const options = ["home", "stats", "profile", "transactions", "graphics"];
    const views = [<Home userId={props.userId}/>, <Stats userId={props.userId}/>, <Profile userId={props.userId} setIsSigned={props.setIsSigned}/>, <Transactions userId={props.userId}/>, <Graphics userId={props.userId}/>];

    return(
        <>
        <BrowserRouter>
            <div style={NavGroupStyles.Group}>
                <div style={NavGroupStyles.Options}>
                    {options.map((option)=>{
                        return(
                            <Link style={NavGroupStyles.LinkOptions} key={`${option}`} to = {`/${option}`}> {option} </Link>
                        )
                    })}
                </div>

                <div style={NavGroupStyles.Views}>
                    <Routes>
                        {views.map((view, index)=>{
                            return(
                                <Route exact path={`/${options[index]}`} key={`${view}`} element= {view} />
                            )
                        })}
                        <Route exact path="/" element={<Home userId={props.userId} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        </>
    );
}

export default NavGroup;