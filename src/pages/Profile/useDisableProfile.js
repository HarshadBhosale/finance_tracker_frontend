import CallAPI from "../../utils/call_api";

const useDisableProfile = async ({
    userId = '',
}) => {
    if (userId === ''){
        return
    }

    let api_json = {
        url : "/disable/profile",
        method : "post",
        data : {
            "user_id" : userId,
        }
    }

    await CallAPI(api_json)
}

export default useDisableProfile;