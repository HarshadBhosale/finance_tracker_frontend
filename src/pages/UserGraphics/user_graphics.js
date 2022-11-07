import React, { useEffect, useState } from "react";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import CallAPI from "../../utils/call_api";
import UserGraphicsStyles from "./user_graphics_styles";

const UserGraphics = (props) => {
    const[loading, setLoading] = useState(false);
    const[year, setYear] = useState(2022);
    const[stats, setStats] = useState({});
    const transactionYears = [2019, 2020, 2021, 2022];
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];

    const getUserStats = async () => {
        setLoading(true);
        let stats = await CallAPI({url:"http://127.0.0.1:8000/graphics", method:"post", data:{"user_id":props.userId}})
        setStats(stats.data);
        setLoading(false);
    }

    useEffect(()=>{
        getUserStats();
    }, [year])
    
    
    const ExpenseData = {
        labels: months,
        datasets: [
            {
            label: `${year} Expense`,
            data: months.map((month)=>{
                return stats[year]?.[month]['Total Expense'];
            }),
            borderColor: 'magenta',
            backgroundColor: 'orange',
            },
        ],
    };
    
    const IncomeData = {
        labels: months,
        datasets: [
            {
            label: `${year} Income`,
            data: months.map((month)=>{
                return stats[year]?.[month]['Total Income'];
            }),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const YearExpenseData = {
        labels: transactionYears,
        datasets: [
            {
            label: 'All Expense',
            data: transactionYears.map((transactionYear)=>{
                return stats[transactionYear]?.['Total Expense'];
            }),
            borderColor: 'magenta',
            backgroundColor: 'orange',
            },
        ],
    };
    
    const YearIncomeData = {
        labels: transactionYears,
        datasets: [
            {
            label: 'All Income',
            data: transactionYears.map((transactionYear)=>{
                return stats[transactionYear]?.['Total Income'];
            }),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

    return(
        <>
        <select value={year} onChange={(event)=>{setYear(parseInt(event.target.value))}}>
            {transactionYears.map((inputFieldValue)=>{
                return (<option value={inputFieldValue}>{inputFieldValue}</option>)
            })}
        </select>
        <div style={UserGraphicsStyles.ChartContainer}>
            {
                [ExpenseData, IncomeData].map((data)=>{
                    return(<Line style={UserGraphicsStyles.Charts} data={data} />)
                })
            }
            {
                [YearExpenseData, YearIncomeData].map((data)=>{
                    return(<Line style={UserGraphicsStyles.Charts} data={data} />)
                })
            }
        </div>
        </>
    )

}

export default UserGraphics;