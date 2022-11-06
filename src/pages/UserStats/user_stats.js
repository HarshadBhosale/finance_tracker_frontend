import React, { useEffect, useState } from "react";
import CallAPI from "../../utils/call_api";
import UserStatsStyles from './user_stats_styles'

const UserStats = (props) => {
    const[loading, setLoading] = useState(false);
    const[year, setYear] = useState(2022);
    const[stats, setStats] = useState({});
    const transactionYears = [2022, 2021, 2020, 2019];
    let StatsTable = {
        'Month' : ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'],
        'Expense' : ['Food', 'Grocery', 'Gift', 'Family', 'Transport', 'Rent', 'EMI', 'Electricity', 'Subscription', 'Other'],
        'Income' : ['Salary', 'Investments', 'Business'],
    };

    const getUserStats = async () => {
        setLoading(true)
        let stats = await CallAPI({url:"http://127.0.0.1:8000/stats", method:"post", data:{"user_id":props.userId, "year": year}})
        setStats(stats.data);
        setLoading(false)
    }

    useEffect(()=>{
        getUserStats();
    }, [UserStats, year])

    return(
        <>
            <div>
                <select value={year} style={UserStatsStyles} onChange={(event)=>{setYear(parseInt(event.target.value))}}>
                    {transactionYears.map((inputFieldValue)=>{
                        return (<option value={inputFieldValue}>{inputFieldValue}</option>)
                    })}
                </select>
                <div style={UserStatsStyles.Stats}>
                    <div style={UserStatsStyles.StatsTableElement}>
                        Month
                    </div>
                    {StatsTable['Expense'].map((expenseCat)=>{
                        return(
                            <div style={UserStatsStyles.StatsTableElement}>
                                {expenseCat}
                            </div>
                        )
                    })}
                    {StatsTable['Income'].map((incomeCat)=>{
                        return(
                            <div style={UserStatsStyles.StatsTableElement}>
                                {incomeCat}
                            </div>
                        )
                    })}
                    {StatsTable["Month"].map((month)=>{
                        return(
                            <>
                                <div style={UserStatsStyles.StatsTableElement}>
                                    {month}
                                </div>
                                {StatsTable['Expense'].map((expenseCat)=>{
                                    return(
                                        <div style={UserStatsStyles.StatsTableElement}>
                                            {stats[month]?.['Expense'][expenseCat]}
                                        </div>
                                    )
                                })}
                                {StatsTable['Income'].map((incomeCat)=>{
                                    return(
                                        <div style={UserStatsStyles.StatsTableElement}>
                                            {stats[month]?.['Income'][incomeCat]}
                                        </div>
                                    )
                                })}
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default UserStats;