import React, { Component } from 'react';
import Modal from './Modal';
import '../ui/css/ModalLauncherStyleSheet.css';

export default class ModalLauncher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    handleToggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        const { buttonLabel, children } = this.props;
        const { showModal } = this.state;

        return (
            <div>
                <button type='button' className='modalButton' onClick={ () => this.handleToggleModal() }>
                    { buttonLabel }
                </button>

                { showModal &&
                <Modal
                    onCloseRequest={() => this.handleToggleModal() }>
                    { children }
                </Modal> }
            </div>
        )
    }
}