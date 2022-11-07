import CallAPI from "../../utils/call_api";

const useGetProfile = async ({
    userId = '',
    setProfile = () => {},
}) => {
    if (userId === ''){
        return
    }

    let api_json = {
        url : "/profile",
        method : "post",
        data : {
            "user_id" : userId,
        }
    }

    let user_profile = await CallAPI(api_json)
    setProfile(user_profile.data)
}

export default useGetProfile;