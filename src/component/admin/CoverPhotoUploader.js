import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

export default class CoverPhotoUploader extends Component {
    render(){
        return (
            <div className="profile-up-main cover-photo">
                <div className="upload-imf-direction-text ">
                <h6> Upload Cover Photo </h6>
                  <p>Image must be at least 1600 x 400 px.
                     File formats: JPG, PNG, GIF, jPEG</p>
                </div>
                <ImageUploader
                withIcon={true}
                buttonText='Choose Cover Photo'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif', 'jpeg']}
                maxFileSize={5242880}
                withPreview="true"
    />
            </div>


            
        )
    }
}





