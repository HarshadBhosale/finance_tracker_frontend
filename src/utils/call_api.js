import axios from "axios";
import { useState } from "react";
import BACKEND_URL from "../env";

const CallAPI = async ({
    url = '',
    method = '',
    data = {},
}) => {
    let response = {}

    try {
        response = await axios.request(
            {
                url : (BACKEND_URL + url),
                method : method,
                data : data,
            }
        )
    }
    catch(error) {
        console.log(error);
    }
    return(
        response
    )
}

export default CallAPI;