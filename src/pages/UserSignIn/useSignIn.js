import CallAPI from "../../utils/call_api";

const useSignIn = async ({
    data = {},
    setUserId = () => {},
}) => {
    let api_json = {
        url : "/signin",
        method : "post",
        data : data
    }

    let user = await CallAPI(api_json)
    setUserId(user.data.id)

    sessionStorage.setItem("user_id", user.data.id); // remove this later
}

export default useSignIn;