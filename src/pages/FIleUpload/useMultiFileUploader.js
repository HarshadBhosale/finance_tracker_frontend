import CallAPI from "../../utils/call_api";

const useMultiFileUploader = async ({formBody}) => {

    let api_json = {
        url : "/multi-file-upload",
        method : "post",
        data : formBody,
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }

    let uploaded = await CallAPI(api_json)
    if(uploaded.data === 1){
        console.log("Succesfully uploaded");
    }
}

export default useMultiFileUploader;