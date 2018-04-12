import React, {Component} from 'react';

export default class TextArea extends Component {
    constructor(props) {
        super(props);

        this.areaHeight = props.areaHeight;
        this.areaWidth = props.areaWidth;
        this.textEntry = props.textEntry;
    }

    render() {
        return (
            <article>
                <textarea rows={this.areaHeight} cols={this.areaWidth}>
                    {this.textEntry}
                </textarea>
            </article>
        )
    };
}