import { Component } from "react";
import PropTypes from 'prop-types';

import css from '../Modal/Modal.module.css'


export class Modal extends Component {

    handleKeyDown = (event) => {
        if (event.code === 'Escape' || event.currentTarget === event.target) {
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
        const { largeImage } = this.props;
        return (
        <div className={css.overlayModal} onClick={this.handleKeyDown}>
            <div className = {css.modal}>
                    <img src={largeImage} className={css.largeImage} alt="" />
            </div>
        </div>
        )
    }
} 

Modal.propTypes = {
    onClose: PropTypes.func,
    largeImage: PropTypes.string.isRequired,
}

