import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

export default class GalleryPhotoUpload extends Component {
    render(){
        return (
            <div className="gallery-choose-inp">
                {/* <div className="upload-imf-direction-text ">
                <h6> Company Logo </h6>
                  <p>Image must be at least 800 x 800px.
                     File formats JPG, PNG, GIF.</p>
                </div> */}
                <ImageUploader
                withIcon={false}
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





