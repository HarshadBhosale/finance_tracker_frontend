import axios from "axios";

const CallAPI = async (props) => {
    let x = await axios.request(
        {
            url : props.url,
            method : props.method,
            data : props.data,
        }
    )
    return(
        x
    )
}

export default CallAPI;