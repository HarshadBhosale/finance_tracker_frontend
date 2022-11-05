import React, { useEffect, useState } from "react";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import CallAPI from "../../utils/call_api";
import UserVisualStatsStyles from "./user_visual_stats_styles";

const UserVisualStats = (props) => {
    const[loading, setLoading] = useState(false);
    const[year, setYear] = useState(2022);
    const[stats, setStats] = useState({});
    const transactionYears = [2022, 2021, 2020, 2019];



    const getUserStats = async () => {
        setLoading(true)
        let stats = await CallAPI({url:"http://127.0.0.1:8000/users/get/stats", method:"post", data:{"user_id":props.userId}})
        setStats(stats.data[year]);
        setLoading(false)
    }

    useEffect(()=>{
        getUserStats();
    }, [year])

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const ExpenseData = {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'],
    datasets: [
        {
        label: 'Expense',
        data: [
            stats?.[1]?.['Total Expense'] ? stats?.[1]?.['Total Expense'] : 0,
            stats?.[2]?.['Total Expense'] ? stats?.[2]?.['Total Expense'] : 0,
            stats?.[3]?.['Total Expense'] ? stats?.[3]?.['Total Expense'] : 0,
            stats?.[4]?.['Total Expense'] ? stats?.[4]?.['Total Expense'] : 0,
            stats?.[5]?.['Total Expense'] ? stats?.[5]?.['Total Expense'] : 0,
            stats?.[6]?.['Total Expense'] ? stats?.[6]?.['Total Expense'] : 0,
            stats?.[7]?.['Total Expense'] ? stats?.[7]?.['Total Expense'] : 0,
            stats?.[8]?.['Total Expense'] ? stats?.[8]?.['Total Expense'] : 0,
            stats?.[9]?.['Total Expense'] ? stats?.[9]?.['Total Expense'] : 0,
            stats?.[10]?.['Total Expense'] ? stats?.[10]?.['Total Expense'] : 0,
            stats?.[11]?.['Total Expense'] ? stats?.[11]?.['Total Expense'] : 0,
            stats?.[12]?.['Total Expense'] ? stats?.[12]?.['Total Expense'] : 0,
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};
const IncomeData = {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'],
    datasets: [
        {
        label: 'Income',
        data: [
            stats?.[1]?.['Total Income'] ? stats?.[1]?.['Total Income'] : 0,
            stats?.[2]?.['Total Income'] ? stats?.[2]?.['Total Income'] : 0,
            stats?.[3]?.['Total Income'] ? stats?.[3]?.['Total Income'] : 0,
            stats?.[4]?.['Total Income'] ? stats?.[4]?.['Total Income'] : 0,
            stats?.[5]?.['Total Income'] ? stats?.[5]?.['Total Income'] : 0,
            stats?.[6]?.['Total Income'] ? stats?.[6]?.['Total Income'] : 0,
            stats?.[7]?.['Total Income'] ? stats?.[7]?.['Total Income'] : 0,
            stats?.[8]?.['Total Income'] ? stats?.[8]?.['Total Income'] : 0,
            stats?.[9]?.['Total Income'] ? stats?.[9]?.['Total Income'] : 0,
            stats?.[10]?.['Total Income'] ? stats?.[10]?.['Total Income'] : 0,
            stats?.[11]?.['Total Income'] ? stats?.[11]?.['Total Income'] : 0,
            stats?.[12]?.['Total Income'] ? stats?.[12]?.['Total Income'] : 0,
        ],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

    return(
        <>
        <select value={year} onChange={(event)=>{setYear(parseInt(event.target.value))}}>
            {transactionYears.map((inputFieldValue)=>{
                return (<option value={inputFieldValue}>{inputFieldValue}</option>)
            })}
        </select>
        <div style={UserVisualStatsStyles.ChartContainer}>
            <Line style={UserVisualStatsStyles.Charts} data={ExpenseData} />
            <Line style={UserVisualStatsStyles.Charts} data={IncomeData} />
            <Line style={UserVisualStatsStyles.Charts} data={ExpenseData} />
            <Line style={UserVisualStatsStyles.Charts} data={IncomeData} />
        </div>
        </>
    )

}

export default UserVisualStats;