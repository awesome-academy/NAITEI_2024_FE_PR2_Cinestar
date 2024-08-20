import React, { useEffect, useState } from 'react';
import Slider from './Slider';

const Banner: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_HOST}/images`)
            .then(response => response.json())
            .then(data => {
                const imageUrls = data.map((item: { url: string }) => `${process.env.PUBLIC_URL}${item.url}`);
                setImages(imageUrls);
            })
            .catch(error => console.error('Error fetching images:', error));
    }, []);

    return (
        <div className="pt-5">
            <Slider images={images} />
        </div>
    );
};

export default Banner;
