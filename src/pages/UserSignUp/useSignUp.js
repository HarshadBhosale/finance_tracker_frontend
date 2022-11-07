import CallAPI from "../../utils/call_api";

const useSignUp = async ({
    data = {},
    setUserId = () => {},
}) => {
    let api_json = {
        url : "/signup",
        method : "post",
        data : data
    }

    let user = await CallAPI(api_json)
    setUserId(user.data.id)

    window.sessionStorage.setItem("user_id", user.data.id); // remove this later
}

export default useSignUp;