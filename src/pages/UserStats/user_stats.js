import React, { useEffect, useState } from "react";
import CallAPI from "../../utils/call_api";

const UserStats = (props) => {
    const[loading, setLoading] = useState(false);

    const getUserStats = async () => {
        setLoading(true)
        let user = await CallAPI({url:"http://127.0.0.1:8000/users/get/stats", method:"post", data:{"user_id":props.userId}})
        setLoading(false)
    }

    useEffect(()=>{
        getUserStats();
    }, [UserStats])

    return(
        <>
            <div>
                {}
            </div>
        </>
    );
}

export default UserStats;