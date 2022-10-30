import React, { useState } from "react";
import NavGroup from "./common/nav_group";
import UserRegistration from "./pages/UserRegistration/user_registration";
import Header from "./common/header";
import FinanceTrackerAppStyles from "./finance_tracker_app_styles";

const FinanceTrackerApp = () => {
    const[userId, setUserId] = useState(sessionStorage.getItem("user_id"));
    const [isSigned, setIsSigned] = useState(()=>{return userId?true:false});
    
    return(
        <div style={FinanceTrackerAppStyles.Root}>
            <Header isSigned={isSigned}/>
            {
                isSigned ?
                <NavGroup userId={userId} setIsSigned={setIsSigned} /> :
                <UserRegistration setIsSigned={setIsSigned} setUserId={setUserId} />
            }
        </div>
    )
}

export default FinanceTrackerApp;