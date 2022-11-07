import CallAPI from "../../utils/call_api";

const useGetGraphics = async ({
    userId = '',
    setGraphics = () => {},
}) => {
    if (userId === ''){
        return
    }

    let api_json = {
        url : "/graphics",
        method : "post",
        data : {
            "user_id" : userId,
        }
    }

    let graphics = await CallAPI(api_json)
    setGraphics(graphics.data)
}

export default useGetGraphics;