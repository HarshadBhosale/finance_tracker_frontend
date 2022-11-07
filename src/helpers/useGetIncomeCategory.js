import CallAPI from "../../utils/call_api";

const useGetIncomeCategory = async () => {
    let api_json = {
        url : "http://127.0.0.1:8000/category/income",
        method : "get",
    }
    let incomeCategory = await CallAPI(api_json)
    
    return incomeCategory.data.incomeCategory
}

export default useGetIncomeCategory;