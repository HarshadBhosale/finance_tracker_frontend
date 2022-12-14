import React, { useEffect, useState } from "react";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import GraphicsStyles from "./graphics_styles";
import useGetGraphics from "./useGetGraphics";
import BarChart from "../../utils/chart";

const Graphics = ({
    userId = '',
    setError = () => {},
}) => {
    const[loading, setLoading] = useState(false);
    const[year, setYear] = useState(2022);
    const[graphics, setGraphics] = useState({});
    const transactionYears = [2019, 2020, 2021, 2022];
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
    let arr=[10, 6, 4, 36, 23, 47, 10, 6, 4, 26, 23, 47, 10, 6, 4, 36, 23, 47, 10, 6, 4, 26, 23, 47];

    const GetGraphics = async () => {
        setLoading(true);
        useGetGraphics({
            userId: userId,
            setGraphics: setGraphics,
        });
        setLoading(false);
    }

    useEffect(()=>{
        GetGraphics();
    }, [year])
    
    
    const ExpenseData = {
        labels: months,
        datasets: [
            {
            label: `${year} Expense`,
            data: months.map((month)=>{
                return graphics[year]?.[month]['Total Expense'];
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
                return graphics[year]?.[month]['Total Income'];
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
                return graphics[transactionYear]?.['Total Expense'];
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
                return graphics[transactionYear]?.['Total Income'];
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
        <BarChart arr={arr} />
        {/* <div style={GraphicsStyles.ChartContainer}>
            {
                [ExpenseData, IncomeData].map((data)=>{
                    return(<Line style={GraphicsStyles.Charts} data={data} />)
                })
            }
            {
                [YearExpenseData, YearIncomeData].map((data)=>{
                    return(<Line style={GraphicsStyles.Charts} data={data} />)
                })
            }
        </div> */}
        </>
    )

}

export default Graphics;