import CallAPI from "../../utils/call_api";

const useCreateTransaction = async ({
    userId = '',
    data = {},
}) => {
    if (userId === ''){
        return
    }

    let api_json = {
        url : "/create/transaction",
        method : "post",
        data : {
            ...data,
            "user_id" : userId,
        },
    }
    await CallAPI(api_json)
}

export default useCreateTransaction;