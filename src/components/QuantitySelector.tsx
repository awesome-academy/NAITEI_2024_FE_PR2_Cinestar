import React, { useState } from 'react';
import { QuantitySelectorProps } from '../interfaces/QuantitySelector.type';

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ initialQuantity = 0, onQuantityChange, nameProduct, setDataQuantity, savedData }) => {
    const [quantity, setQuantity] = useState<number>(savedData[nameProduct] || initialQuantity);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            setDataQuantity(nameProduct, newQuantity)
            if (onQuantityChange) onQuantityChange(newQuantity);
            return newQuantity;
        });
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => {
            const newQuantity = Math.max(prevQuantity - 1, 0);
            if (onQuantityChange) onQuantityChange(newQuantity);
            return newQuantity;
        });
    };

    return (
        <div className="flex items-center group">
            <button 
                onClick={decreaseQuantity} 
                className="px-4 py-2 rounded-l flex items-center group-hover:bg-hover-color bg-gray-400 text-xl">
                -
            </button>
            <span className="px-4 py-2 flex items-center group-hover:bg-hover-color bg-gray-400 text-xl">{quantity}</span>
            <button 
                onClick={increaseQuantity} 
                className="px-4 py-2 rounded-r flex items-center group-hover:bg-hover-color bg-gray-400 text-xl">
                +
            </button>
        </div>
    );
};

export default QuantitySelector;
