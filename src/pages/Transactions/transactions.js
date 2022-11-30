import React, { useEffect, useState } from "react";
import TransactionsStyles from "./transactions_styles";
import useGetTransactions from "./useGetTransactions";
import useCreateTransaction from "./useCreateTransaction";
import useDisableTransaction from "./useDisableTransaction";

const Transactions = ({
    userId = '',
    setError = () => {}
}) => {
    const[transactions, setTransactions] = useState([]);
    const[loading, setLoading] = useState(false);
    const[eventValue, setEventValue] = useState({category: "Expense"});
    const[categoryValue, setCategoryValue] = useState("");
    let event = ["Expense", "Income"];
    let currency = ["INR", "USD"];
    let expenseCategory = ["Food", "Grocery", "Gift", "Family", "Transport", "Rent", "EMI", "Electricity", "Subscription", "Other"];
    let incomeCategory = ["Salary", "Investments", "Business"];
    let transactionHeaders = ["Event", "Category", "Description", "Currency", "Amount", "Date", ""]

    const GetTransactions = async () => {
        setLoading(true)
        useGetTransactions({
            userId: userId,
            setTransactions: setTransactions
        });
        setLoading(false)
    }

    const CreateTransaction = async (data) => {
        setLoading(true)
        useCreateTransaction({
            userId: userId,
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

    const DisableTransaction = async (transaction_id) => {
        let data = {
            "transaction_id" : transaction_id,
        }
        setLoading(true)
        useDisableTransaction({
            data: data
        });
        setLoading(false)
        GetTransactions();
    }

    useEffect(()=>{
        GetTransactions();
    }, [Transactions])

    return(
        <>
            <div style={TransactionsStyles.Transactions}>
                <form style={TransactionsStyles.TrasactionForm} onSubmit={transactionFormHandle}>
                    <select name="event" value={eventValue.category} style={TransactionsStyles.Input} onChange={(event)=>{setEventValue({category:event.target.value})}}>
                        {event.map((inputFieldValue)=>{
                            return (<option value={inputFieldValue}>{inputFieldValue}</option>)
                        })}
                    </select>

                    <select name="category" value={categoryValue} style={TransactionsStyles.Input} onChange={(event)=>{setCategoryValue(event.target.value)}}>
                        {
                            (eventValue.category === "Expense" ? expenseCategory : incomeCategory).map((inputFieldValue)=>{
                                return (<option value={inputFieldValue}>{inputFieldValue}</option>)
                            })
                        }
                    </select>

                    <input type="text" name="description" style={TransactionsStyles.Input} placeholder="Description..." />

                    <select name="currency" style={TransactionsStyles.Input}>
                        {currency.map((currencyValue)=>{
                            return (<option value={currencyValue}>{currencyValue}</option>)
                        })}
                    </select>

                    <input type="number" name="amount" style={TransactionsStyles.Input} placeholder="Amount..." />
                    <input type="datetime-local" name="date" style={TransactionsStyles.Input} placeholder="Date..."  />
                    <button type="submit" style={TransactionsStyles.Button}>
                        Add {eventValue.category}
                    </button>
                </form>

                <div style={TransactionsStyles.Transaction}>
                    {
                        transactionHeaders.map((header)=>{
                            return (
                                <div style={TransactionsStyles.TransactionHeaders}>
                                    {header}
                                </div>
                            )
                        })
                    }
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
                                {transaction.description}
                            </div>
                            <div style={TransactionsStyles.TransactionFields}>
                                {transaction.currency}
                            </div>
                            <div style={TransactionsStyles.TransactionFields}>
                                {transaction.amount}
                            </div>
                            <div style={TransactionsStyles.TransactionFields}>
                                {transaction.date}
                            </div>
                            <button style={TransactionsStyles.DisableTransaction} onClick={()=>{DisableTransaction(transaction.id)}}>
                                delete
                            </button>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Transactions;