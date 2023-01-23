import { Component } from "react";
import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

import css from '../ImageGallery/ImageGallery.module.css'

export class ImageGallery extends Component {

    render() {

        const { images, onOpen } = this.props;

        return (
            <ul className={css.imageGallery}>
                { images.map (image => (
                    <ImageGalleryItem
                    key={image.id}
                    webformatURL={image.webformatURL}
                    largeImageURL={image.largeImageURL}
                    onOpen={onOpen}
                    tags={image.tags}
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
            tags: PropTypes.string.isRequired,
        })
    )
}