import CallAPI from "../../utils/call_api";

const useGetTransactions = async ({
    userId = '',
    setTransactions = () => {},
}) => {
    if (userId === ''){
        return
    }

    let api_json = {
        url : "/transactions",
        method : "post",
        data : {
            "user_id" : userId,
        }
    }

    let user_transactions = await CallAPI(api_json)
    setTransactions(user_transactions.data.transactions)
}

export default useGetTransactions;