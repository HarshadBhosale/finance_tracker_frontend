import { useState } from "react";
import useFileUpload from "./useFileUploader";
import useMultiFileUploader from "./useMultiFileUploader";


const FileUpload = ({
    userId = '',
    setError = () =>{}
}) => {
    const[file, setFile] = useState()
    const[files, setFiles] = useState([])


    const Handler = (event) =>{
        event.preventDefault();
        let body = new FormData();
        body.append("file", file)
        useFileUpload({
            formBody:body
        });
    }

    const MultiHandler = (event) =>{
        event.preventDefault();
        let body = new FormData();
        for (let index = 0; index < files.length; index++) {
            body.append("files", files[index])
        }
        useMultiFileUploader({
            formBody:body
        });
    }

    return (
        <div className="container">
            <div className="row">
                <form>
                    <h3>Single PNG Upload</h3>
                    <div className="form-group">
                        <input name="file" type="file" accept="image/png" onChange={(e)=>{setFile(e.target.files[0]); console.log(e.target.files);}}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={Handler}>Upload</button>
                    </div>
                </form>
                <form>
                    <h3>Single File Upload</h3>
                    <div className="form-group">
                        <input name="file" type="file"  onChange={(e)=>{setFile(e.target.files[0]); console.log(e.target.files);}}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={Handler}>Upload</button>
                    </div>
                </form>
                <form>
                    <h3>Multi File Upload</h3>
                    <div className="form-group">
                        <input name="file" type="file" onChange={(e)=>{
                            let x = []
                            for (let index = 0; index < e.target.files.length; index++) {
                                x.push(e.target.files[index])
                            }
                            setFiles(x)
                            }} multiple/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={MultiHandler}>Upload</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FileUpload;