import { Component } from "react";
import PropTypes from 'prop-types';

import css from '../ImageGalleryItem/ImageGalleryItem.module.css'

export class ImageGalleryItem extends Component {
    render() {
        const {webformatURL, largeImageURL, onOpen, tags} = this.props;

        return (
            <li className={css.imageGalleryItem}>
                <img className={css.imageGalleryItem__image}
                src={webformatURL}
                alt={tags}
                srcSet={largeImageURL}
                onClick={() => onOpen(largeImageURL)} 
                />
            </li>
        )
    }
}

ImageGalleryItem.propTypes = {
    onOpen: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
} 