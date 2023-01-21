import { Component } from "react";
import PropTypes from 'prop-types';

import css from '../Modal/Modal.module.css'


export class Modal extends Component {

    handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            return this.props.onClose();
        }
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    render() {
        const { largeImageURL } = this.props;
        return (
        <div className={css.overlayModal} onClick={this.handleKeyDown}>
            <div className = {css.modal}>
                    <img src={largeImageURL} className={css.largeImage} alt="" />
            </div>
        </div>
        )
    }
} 

Modal.propTypes = {
    onClose: PropTypes.func,
    largeImageURL: PropTypes.string.isRequired,
}

