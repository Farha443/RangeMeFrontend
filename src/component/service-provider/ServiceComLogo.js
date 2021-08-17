import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

export default class ServiceComLogo extends Component {
    render(){
        return (
            <div className="profile-up-main service-logo">
                <div className="upload-imf-direction-text ">
                <h6> Şirket Logosu </h6>
                  {/* <p>Image must be at least 800 x 800px.
                     File formats JPG, PNG, GIF.</p> */}
                </div>
                <ImageUploader
                withIcon={true}
                buttonText='Choose Logo'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview="true"
    />
            </div>


            
        )
    }
}





