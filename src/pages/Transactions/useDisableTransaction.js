import CallAPI from "../../utils/call_api";

const useDisableTransaction = async ({
    data = {},
}) => {
    let api_json = {
        url : "/disable/transaction",
        method : "post",
        data : data
    }
    await CallAPI(api_json)
}

export default useDisableTransaction;