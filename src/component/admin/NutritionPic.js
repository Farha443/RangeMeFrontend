import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

export default class NutritionPic extends Component {
    render(){
        return (
            <div className="profile-up-main">
              
                <ImageUploader
                withIcon={true}
                buttonText='Choose Profile'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview="true"
    />
            </div>


            
        )
    }
}





