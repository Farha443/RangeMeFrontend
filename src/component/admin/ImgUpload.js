import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
 
// class default ImgUploader React.Component {
 
//     constructor(props) {
//         super(props);
//          this.state = { pictures: [] };
//          this.onDrop = this.onDrop.bind(this);
//     }
 
//     onDrop(picture) {
//         this.setState({
//             pictures: this.state.pictures.concat(picture),
//         });
//     }
 
//     render() {
//         return (
//             <ImageUploader
//                 withIcon={true}
//                 buttonText='Add Photos'
//                 onChange={this.onDrop}
//                 imgExtension={['.jpg', '.gif', '.png', '.gif']}
//                 maxFileSize={5242880}
//                 withPreview="true"
//             />
//         );
//     }
// }



export default class ImgUploader extends Component {
    render(){
        return (
            <ImageUploader
        withIcon={true}
        buttonText='Add Photos'
        onChange={this.onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
        withPreview="true"
    />
        )
    }
}





