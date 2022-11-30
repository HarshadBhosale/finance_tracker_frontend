import CallAPI from "../../utils/call_api";

const useSignIn = async ({
    data = {},
    setUserId = () => {},
}) => {
    let api_json = {
        url : "/signin",
        method : "post",
        data : data,
    }
    let response = await CallAPI(api_json)

    if (response?.data?.message){
        return response?.data?.message
    }

    setUserId(response.data.id);
    sessionStorage.setItem("user_id", response.data.id); // remove this later
}

export default useSignIn;