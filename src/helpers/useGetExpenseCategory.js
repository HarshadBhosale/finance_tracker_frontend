import CallAPI from "../utils/call_api";

const useGetExpenseCategory = async () => {
    let api_json = {
        url : "http://127.0.0.1:8000/category/expense",
        method : "get",
    }
    let expenseCategory = await CallAPI(api_json)
    
    return expenseCategory.data.expenseCategory
}

export default useGetExpenseCategory;