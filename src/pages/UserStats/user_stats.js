import React, { useEffect, useState } from "react";
import useGetStats from "./useGetStats";
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

    const GetStats = async (data) => {
        setLoading(true)
        useGetStats({
            userId : props.userId,
            data : data,
            setStats : setStats,
        })
        setLoading(false)
    }

    useEffect(()=>{
        GetStats({ "year": year });
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