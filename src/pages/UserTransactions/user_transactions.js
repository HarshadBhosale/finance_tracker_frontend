import React, { useEffect, useState } from "react";
import CallAPI from "../../utils/call_api";
import UserTransactionsStyles from "./user_transactions_styles";

const UserTransactions = (props) => {
    const[userTransactions, setUserTransactions] = useState([]);
    const[loading, setLoading] = useState(false);
    const[eventValue, setEventValue] = useState({category: 'Expense'});
    const[categoryValue, setCategoryValue] = useState('');
    let event = ['Expense', 'Income'];
    let currency = ['INR', 'USD'];
    let expenseCategory = ['Food', 'Grocery', 'Gift', 'Family', 'Transport', 'Rent', 'EMI', 'Electricity', 'Subscription', 'Other'];
    let incomeCategory = ['Salary', 'Investments', 'Business'];

    const getUserTransactions = async () => {
        setLoading(true)
        let user_transactions = await CallAPI({url:"http://127.0.0.1:8000/transactions", method:"post", data:{"user_id":props.userId}})
        setUserTransactions(user_transactions.data.transactions)
        setLoading(false)
    }

    const createUserTransactions = async (api_json) => {
        setLoading(true)
        let user_transaction = await CallAPI({url:"http://127.0.0.1:8000/transactions/create", method:"post", data:api_json})
        console.log(user_transaction.data.id);
        setLoading(false)
    }

    const transactionFormHandle = async (event) => {
        event.preventDefault();
        setLoading(true)
        let api_json = {};
        let fields = ["event", "category", 'currency', "amount", "description", "date"];
        fields.forEach((element) => {
            api_json[element] = event.target[element].value;
        });
        api_json.event === 'Expense' ? api_json.event = -1 : api_json.event = 1;
        await createUserTransactions({...api_json, "user_id":props.userId});
        setLoading(false)
        getUserTransactions()
        event.target.reset();
    }

    useEffect(()=>{
        getUserTransactions();
    }, [UserTransactions])

    return(
        <>
            <div style={UserTransactionsStyles.Transactions}>
                <form style={UserTransactionsStyles.TrasactionForm} onSubmit={transactionFormHandle}>
                    <select name='event' value={eventValue.category} style={UserTransactionsStyles.Input} onChange={(event)=>{setEventValue({category:event.target.value})}}>
                        {event.map((inputFieldValue)=>{
                            return (<option value={inputFieldValue}>{inputFieldValue}</option>)
                        })}
                    </select>
                    {
                        eventValue.category === 'Expense' ? 
                        (<select name='category' value={categoryValue} style={UserTransactionsStyles.Input} onChange={(event)=>{setCategoryValue(event.target.value)}}>
                            {expenseCategory.map((inputFieldValue)=>{
                                return (<option value={inputFieldValue}>{inputFieldValue}</option>)
                            })}
                        </select>) :
                        (<select name='category' value={categoryValue} style={UserTransactionsStyles.Input} onChange={(event)=>{setCategoryValue(event.target.value)}}>
                            {incomeCategory.map((inputFieldValue)=>{
                                return (<option value={inputFieldValue}>{inputFieldValue}</option>)
                            })}
                        </select>)
                    }
                    <input type='text' name='description' style={UserTransactionsStyles.Input} placeholder="Description..." />
                    <select name='currency' style={UserTransactionsStyles.Input}>
                        {currency.map((currencyValue)=>{
                            return (<option value={currencyValue}>{currencyValue}</option>)
                        })}
                    </select>
                    <input type='number' name='amount' style={UserTransactionsStyles.Input} placeholder="Amount..." />
                    <input type="datetime-local" name='date' style={UserTransactionsStyles.Input} placeholder="Date..."  />
                    <button type='submit' style={UserTransactionsStyles.Button}> Add {eventValue.category} </button>
                </form>

                <div style={UserTransactionsStyles.Transaction}>
                    <div style={UserTransactionsStyles.TransactionHeaders}>
                        Event
                    </div>
                    <div style={UserTransactionsStyles.TransactionHeaders}>
                        Category
                    </div>
                    <div style={UserTransactionsStyles.TransactionHeaders}>
                        Description
                    </div>
                    <div style={UserTransactionsStyles.TransactionHeaders}>
                        Amount
                    </div>
                </div>

                {userTransactions.map((transaction)=>{
                    return(
                        <div style={UserTransactionsStyles.Transaction}>
                            <div style={UserTransactionsStyles.TransactionFields}>
                                {transaction.event==="1"?"Income":"Expense"}
                            </div>
                            <div style={UserTransactionsStyles.TransactionFields}>
                                {transaction.category}
                            </div>
                            <div style={UserTransactionsStyles.TransactionFields}>
                                {transaction.description?transaction.description:""}
                            </div>
                            <div style={UserTransactionsStyles.TransactionFields}>
                                {transaction.amount}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default UserTransactions;