import React, { Component } from 'react';

import '../ui/css/ModalStyleScheet.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    handleOutsideClick(e) {
        const { onCloseRequest } = this.props;

        if (this.modal !== undefined) {
            if (!this.modal.contains(e.target)) {
                onCloseRequest();
                document.removeEventListener('click', this.handleOutsideClick, false);
            }
        }
    }

    render() {
        const {
            onCloseRequest,
            children
        } =  this.props;

        return (
            <div className='overlay'>
                <div className='bucketful-modal' ref={ node => this.modal = node }>
                    <span className="close" onClick={onCloseRequest}>&times;</span>
                    <div className='modal-content'>
                        { children }
                    </div>
                </div>
            </div>
        )
    }
}