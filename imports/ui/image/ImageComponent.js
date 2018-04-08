import React, {Component} from 'react';

import {importPicture} from '../../../utils/ImageUtils';
import {inputSelection} from '../../../utils/ImageUtils';

export default class Image extends Component {
    constructor(props) {
        super(props);

        //input params
        this.props.inputId = props.inputId;

        //image params
        this.props.className = props.className;
        this.props.imageId = props.imageId;
        this.props.imageSource = props.imageSource;
    }

    render() {
        return (
            <div>

                <input
                    id={this.props.inputId}
                    type='file'
                    accept='image/*'
                    onChange={importPicture}
                />
                {/*// onChange={importPicture}*/}
                <img
                    src={this.props.imageSource}
                    id={this.props.imageId}
                    className={this.props.className}
                    onClick={inputSelection}
                />
                {/*// onClick={inputSelection}*/}

            </div>
        );
    }

}