import React, {Component} from 'react';

export default class Iterator extends Component {
    constructor(props) {
        super(props);

        this.num = props.num;
    }

    render() {
        let items = [];
        for (let i = 0; i < this.num; i++) {
            items.push(i);
        }
        return <div>{items}</div>;
    }

}