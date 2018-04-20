import React, {Component} from 'react';

import '../ui/css/TextAreaStyleSheet.css';

export default class TextArea extends Component {
    constructor(props) {
        super(props);

        this.id = props.id;
        this.areaRowHeight = props.areaRowHeight;
        this.areaColumnWidth = props.areaColumnWidth;
        this.className = props.className;
        this.textEntry = props.textEntry;
    }

    render() {
        return (
            <article>
                <textarea
                    id={this.id}
                    rows={this.areaRowHeight}
                    cols={this.areaColumnWidth}
                    className={this.className}
                    style={{ resize: 'none' }}
                >
                    {this.textEntry}
                </textarea>
            </article>
        )
    };
}