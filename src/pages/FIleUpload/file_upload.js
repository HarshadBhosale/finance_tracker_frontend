import { useState } from "react";
import useFileUpload from "./useFileUploader";


const FileUpload = ({
    userId = '',
    setError = () =>{}
}) => {
    const[file, setFile] = useState()


    const Handler = (event) =>{
        event.preventDefault();
        const body = new FormData();
        body.append("file", file)
        useFileUpload({
            formBody:body
        });
    }

    return (
        <div className="container">
            <div className="row">
                <form>
                    <h3>React File Upload</h3>
                    <div className="form-group">
                        <input name="file" type="file" accept="image/png" onChange={(e)=>{setFile(e.target.files[0]); console.log(e.target.files);}} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={Handler}>Upload</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FileUpload;