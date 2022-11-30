import React, { useEffect, useState } from "react";
import NavGroup from "./common/nav_group";
import UserRegistration from "./pages/UserRegistration/user_registration";
import Header from "./common/header";
import FinanceTrackerAppStyles from "./finance_tracker_app_styles";

const FinanceTrackerApp = () => {
    const[userId, setUserId] = useState(sessionStorage.getItem("user_id"));
    const [isSigned, setIsSigned] = useState(()=>{return userId?true:false});
    const [error, setError] = useState(undefined);

    useEffect(()=>{
        if(error){
            console.log(error);
        }
        setError('')
    }, [error]);

    return(
        <div style={FinanceTrackerAppStyles.Root}>
            <Header isSigned={isSigned} setError={setError}/>
            {
                isSigned ?
                <NavGroup userId={userId} setIsSigned={setIsSigned} setError={setError} /> :
                <UserRegistration setIsSigned={setIsSigned} setUserId={setUserId} setError={setError} />
            }
        </div>
    )
}

export default FinanceTrackerApp;