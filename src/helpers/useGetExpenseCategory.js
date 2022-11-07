import CallAPI from "../utils/call_api";

const useGetExpenseCategory = async () => {
    let api_json = {
        url : "/category/expense",
        method : "get",
    }
    let expenseCategory = await CallAPI(api_json)
    
    return expenseCategory.data.expenseCategory
}

export default useGetExpenseCategory;