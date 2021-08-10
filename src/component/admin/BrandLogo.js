import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

export default class BrandLogo extends Component {
    render(){
        return (
            <div className="profile-up-main brand-logo">
            <div className="upload-imf-direction-text ">
            <h6> Brand Logo </h6>
              <p>Image must be at least 800 x 800px.
                 File formats JPG, PNG, GIF, JPEG.</p>
            </div>
            <ImageUploader
            withIcon={true}
            buttonText='Choose Profile'
            onChange={this.onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif','jpeg']}
            maxFileSize={5242880}
            withPreview="true"
/>
        </div>


            
        )
    }
}





