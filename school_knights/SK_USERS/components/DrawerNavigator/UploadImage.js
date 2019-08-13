/************************
 * @author Hale Ramsey
 * @copyright Department of Computer Science, SFSU, 2019
 * This is a component that allows the user to select an image from their file system and upload
 * it. 
 * 
 */

import React from 'react'
const axios = require("axios");

class UploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/upload",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="fileUpload">
                <div><label>File Upload</label></div>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit" style={{marginLeft: 15}}>Upload</button>
                </div>
            </form>
        )
    }
}

export default UploadImage