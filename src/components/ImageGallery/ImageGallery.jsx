import { Component } from "react";
import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

import css from '../ImageGallery/ImageGallery.module.css'

export class ImageGallery extends Component {

    render() {

        const { images, onOpen } = this.props;

        return (
            <ul className={css.imageGallery}>
                { images.map(({ id, webformatURL, largeImageURL,}) => (
                    <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    onOpen={onOpen}
                    />
                ))}
            </ul>
        )
    }
}

ImageGallery.propTypes = {
    onOpen: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        })
    )
}