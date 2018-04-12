import React, {Component} from 'react';

export default class TextArea extends Component {
    constructor(props) {
        super(props);

        this.areaRowHeight = props.areaRowHeight;
        this.areaColumnWidth = props.areaColumnWidth;
        this.className = props.className;
        this.textEntry = props.textEntry;
    }

    render() {
        return (
            <article>
                <textarea
                    rows={this.areaRowHeight}
                    cols={this.areaColumnWidth}
                    className={this.className}
                >
                    {this.textEntry}
                </textarea>
            </article>
        )
    };
}