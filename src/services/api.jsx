import axios from 'axios'; 


export const fetchImages = async ( search, pages) => {
    const response = await axios.get ('https://pixabay.com/api/', {
        method: 'get',
        params: {
            q: search,
            page: pages,
            key: '31081943-fde7852d3c642a63447541410',
            orientation: 'horizontal',
            per_page: 12,
            image_type: 'photo',
        }
    }
    );
    return response.data.hits;
};