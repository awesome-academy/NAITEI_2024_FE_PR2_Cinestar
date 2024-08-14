import React from 'react';
import { ImageProps } from "../interfaces/Image.type";

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className, sizes }) => {
    return (
        <img 
            className={className} 
            loading="lazy" 
            width={width} 
            height={height} 
            decoding="async" 
            data-nimg="1"  
            src={src} 
            alt={alt}
            sizes={sizes}
        />
    );
};

export default Image;
