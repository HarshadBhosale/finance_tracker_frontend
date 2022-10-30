import React, { useEffect, useState } from "react";
import CallAPI from "../../utils/call_api";

const UserTransactions = (props) => {
    const[userTransactions, setUserTransactions] = useState([]);
    const[loading, setLoading] = useState(false);

    const getUserTransactions = async () => {
        setLoading(true)
        let user_transactions = await CallAPI({url:"http://127.0.0.1:8000/transactions", method:"post", data:{"user_id":props.userId}})
        setUserTransactions(user_transactions.data.transactions)
        setLoading(false)
    }

    useEffect(()=>{
        getUserTransactions();
    }, [UserTransactions])

    return(
        <>
            <div>
                {userTransactions.map((transaction)=>{
                    return(
                        <div>
                            <div>{transaction.event}  {transaction.category}  {transaction.description?transaction.description:""}  {transaction.amount}</div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default UserTransactions;