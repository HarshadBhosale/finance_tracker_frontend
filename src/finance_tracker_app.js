import React, { useState } from "react";
import NavGroup from "./common/nav_group";
import UserRegistration from "./pages/UserRegistration/user_registration";
import Header from "./common/header";
import FinanceTrackerAppStyles from "./finance_tracker_app_styles";

const FinanceTrackerApp = () => {
    const [isSigned, setIsSigned] = useState(false);
    const[userId, setUserId] = useState();
    
    return(
        <div style={FinanceTrackerAppStyles.Root}>
            <Header />
            {
                isSigned ?
                <NavGroup /> :
                <UserRegistration setIsSigned={setIsSigned} setUserId={setUserId} />
            }
        </div>
    )
}

export default FinanceTrackerApp;