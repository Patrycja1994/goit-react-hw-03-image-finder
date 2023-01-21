import { Component } from "react";
import PropTypes from 'prop-types';

import css from '../ImageGalleryItem/ImageGalleryItem.module.css'

export class ImageGalleryItem extends Component {
    render() {
        const {webformatURL, largeImageURL, onOpen} = this.props;

        return (
            <li className={css.imageGalleryItem}>
                <img className={css.imageGalleryItem__image}
                src={webformatURL}
                alt="" 
                onClick={() => onOpen(largeImageURL)} 
                />
            </li>
        )
    }
}

ImageGalleryItem.propTypes = {
    onOpen: PropTypes.func,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
} 