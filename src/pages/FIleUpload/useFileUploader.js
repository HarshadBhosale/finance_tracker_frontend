import CallAPI from "../../utils/call_api";

const useFileUpload = async ({formBody}) => {

    let api_json = {
        url : "/file-upload",
        method : "post",
        data : formBody,
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }

    let uploaded = await CallAPI(api_json)
    if(uploaded.data === 1){
        console.log("Succesfully uploaded");
    }
}

export default useFileUpload;