import CallAPI from "../../utils/call_api";

const useCreateTransaction = async ({
    userId = '',
    data = {},
}) => {
    if (userId === ''){
        return
    }

    let api_json = {
        url : "http://127.0.0.1:8000/create/transaction",
        method : "post",
        data : {
            ...data,
            "user_id" : userId,
        },
    }
    await CallAPI(api_json)
}

export default useCreateTransaction;