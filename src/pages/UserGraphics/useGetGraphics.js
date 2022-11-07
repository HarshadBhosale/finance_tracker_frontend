import CallAPI from "../../utils/call_api";

const useGetGraphics = async ({
    userId = '',
    setGraphics = () => {},
}) => {
    if (userId === ''){
        return
    }

    let api_json = {
        url : "http://127.0.0.1:8000/graphics",
        method : "post",
        data : {
            "user_id" : userId,
        }
    }

    let graphics = await CallAPI(api_json)
    setGraphics(graphics.data)
}

export default useGetGraphics;