import CallAPI from "../utils/call_api";

const useGetCurrencies = async () => {
    let api_json = {
        url : "/currencies",
        method : "get",
    }
    let currencies = await CallAPI(api_json)
    
    return currencies.data.currencies
}

export default useGetCurrencies;