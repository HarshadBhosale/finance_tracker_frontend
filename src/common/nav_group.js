import React from "react";
import {Link, BrowserRouter, Route, Routes} from "react-router-dom";
import UserStats from "../pages/UserStats/user_stats";
import UserProfile from "../pages/UserProfile/user_profile";
import UserTransactions from "../pages/UserTransactions/user_transactions";
import UserVisualStats from "../pages/UserVisualStats/user_visual_stats";
import NavGroupStyles from "./nav_group_styles";

const NavGroup = (props) => {
    const options = ["stats", "profile", "transactions", "graphics"];
    const views = [<UserStats userId={props.userId}/>, <UserProfile userId={props.userId} setIsSigned={props.setIsSigned}/>, <UserTransactions userId={props.userId}/>, <UserVisualStats userId={props.userId}/>];

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
                        <Route exact path="/" element={<UserStats userId={props.userId} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        </>
    );
}

export default NavGroup;