import React from 'react';
import { TagInput } from 'reactjs-tag-input'

class InputTags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tags: []}
        this.onTagsChanged = this.onTagsChanged.bind(this);
    }

    onTagsChanged(tags) {
        this.setState({tags})
    }

    render() {
        return <TagInput tags={this.state.tags} onTagsChanged={this.onTagsChanged} />
    }
}

export default InputTags