import CallAPI from "../../utils/call_api";

const useGetIncomeCategory = async () => {
    let api_json = {
        url : "/category/income",
        method : "get",
    }
    let incomeCategory = await CallAPI(api_json)
    
    return incomeCategory.data.incomeCategory
}

export default useGetIncomeCategory;