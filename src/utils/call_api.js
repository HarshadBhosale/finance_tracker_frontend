import axios from "axios";
import BACKEND_URL from "../env";

const CallAPI = async (props) => {
    let x = await axios.request(
        {
            url : (BACKEND_URL + props.url),
            method : props.method,
            data : props.data,
        }
    )
    return(
        x
    )
}

export default CallAPI;