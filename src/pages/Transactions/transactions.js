import React, { useEffect, useState } from "react";
import CallAPI from "../../utils/call_api";
import TransactionsStyles from "./transactions_styles";
import useGetTransactions from "./useGetTransactions";
import useCreateTransaction from "./useCreateTransaction";

const Transactions = (props) => {
    const[transactions, setTransactions] = useState([]);
    const[loading, setLoading] = useState(false);
    const[eventValue, setEventValue] = useState({category: "Expense"});
    const[categoryValue, setCategoryValue] = useState("");
    let event = ["Expense", "Income"];
    let currency = ["INR", "USD"];
    let expenseCategory = ["Food", "Grocery", "Gift", "Family", "Transport", "Rent", "EMI", "Electricity", "Subscription", "Other"];
    let incomeCategory = ["Salary", "Investments", "Business"];
    let transactionHeaders = [""]

    const GetTransactions = async () => {
        setLoading(true)
        useGetTransactions({
            userId: props.userId,
            setTransactions: setTransactions
        });
        setLoading(false)
    }

    const CreateTransaction = async (data) => {
        setLoading(true)
        useCreateTransaction({
            userId: props.userId,
            data: data
        });
        setLoading(false)
    }

    const transactionFormHandle = async (event) => {
        event.preventDefault();
        let data = {};
        let fields = ["event", "category", "currency", "amount", "description", "date"];
        fields.forEach((element) => {
            data[element] = event.target[element].value;
        });
        data.event === "Expense" ? data.event = -1 : data.event = 1;
        await CreateTransaction(data);
        GetTransactions()
        event.target.reset();
    }

    useEffect(()=>{
        GetTransactions();
    }, [transactions])

    return(
        <>
            <div style={TransactionsStyles.Transactions}>
                <form style={TransactionsStyles.TrasactionForm} onSubmit={transactionFormHandle}>
                    <select name="event" value={eventValue.category} style={TransactionsStyles.Input} onChange={(event)=>{setEventValue({category:event.target.value})}}>
                        {event.map((inputFieldValue)=>{
                            return (<option value={inputFieldValue}>{inputFieldValue}</option>)
                        })}
                    </select>
                    {
                        eventValue.category === "Expense" ? 
                        (<select name="category" value={categoryValue} style={TransactionsStyles.Input} onChange={(event)=>{setCategoryValue(event.target.value)}}>
                            {expenseCategory.map((inputFieldValue)=>{
                                return (<option value={inputFieldValue}>{inputFieldValue}</option>)
                            })}
                        </select>) :
                        (<select name="category" value={categoryValue} style={TransactionsStyles.Input} onChange={(event)=>{setCategoryValue(event.target.value)}}>
                            {incomeCategory.map((inputFieldValue)=>{
                                return (<option value={inputFieldValue}>{inputFieldValue}</option>)
                            })}
                        </select>)
                    }
                    <input type="text" name="description" style={TransactionsStyles.Input} placeholder="Description..." />
                    <select name="currency" style={TransactionsStyles.Input}>
                        {currency.map((currencyValue)=>{
                            return (<option value={currencyValue}>{currencyValue}</option>)
                        })}
                    </select>
                    <input type="number" name="amount" style={TransactionsStyles.Input} placeholder="Amount..." />
                    <input type="datetime-local" name="date" style={TransactionsStyles.Input} placeholder="Date..."  />
                    <button type="submit" style={TransactionsStyles.Button}> Add {eventValue.category} </button>
                </form>

                <div style={TransactionsStyles.Transaction}>

                    <div style={TransactionsStyles.TransactionHeaders}>
                        Event
                    </div>
                    <div style={TransactionsStyles.TransactionHeaders}>
                        Category
                    </div>
                    <div style={TransactionsStyles.TransactionHeaders}>
                        Description
                    </div>
                    <div style={TransactionsStyles.TransactionHeaders}>
                        Amount
                    </div>
                </div>

                {transactions.map((transaction)=>{
                    return(
                        <div style={TransactionsStyles.Transaction}>
                            <div style={TransactionsStyles.TransactionFields}>
                                {transaction.event==="1"?"Income":"Expense"}
                            </div>
                            <div style={TransactionsStyles.TransactionFields}>
                                {transaction.category}
                            </div>
                            <div style={TransactionsStyles.TransactionFields}>
                                {transaction.description?transaction.description:""}
                            </div>
                            <div style={TransactionsStyles.TransactionFields}>
                                {transaction.amount}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Transactions;