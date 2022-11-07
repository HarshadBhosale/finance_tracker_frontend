import CallAPI from "../../utils/call_api";

const useGetStats = async ({
    userId = '',
    data = {},
    setStats = () => {},
}) => {
    if (userId === ''){
        return
    }

    let api_json = {
        url : "/stats",
        method : "post",
        data : {
            "user_id" : userId,
            ...data,
        }
    }

    let stats = await CallAPI(api_json)
    setStats(stats.data)
}

export default useGetStats;