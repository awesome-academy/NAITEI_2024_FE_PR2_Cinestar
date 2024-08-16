import React, { useEffect, useState } from 'react';
import Image from './Image';
import { useTranslation } from 'react-i18next';
import '../i18n';
import { EntertainmentProps } from '../interfaces/Entertaiment.type';

const Entertainment: React.FC = () => {
    const [entertainments, setEntertainments] = useState<EntertainmentProps[]>([]);
    const { t } = useTranslation();

    useEffect(() => {
        fetch('http://localhost:5000/entertainments')
        .then(response => response.json())
        .then(data => setEntertainments(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container mx-auto flex flex-col items-center justify-center mt-32 mb-24 gap-y-16">
            <div className="text-white text-4xl font-bold uppercase">{t('label.option')}</div>
            <div className="text-default-color text-xs font-bold tracking-widest">
                {t('label.optionDes')}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {entertainments.map((item, index) => (
                <a 
                    key={index} 
                    href={`/${item.alt}`} 
                    className="relative block rounded-lg overflow-hidden"
                >
                    <Image 
                    src={item.image} 
                    alt={item.alt} 
                    className="object-cover w-full h-full"
                    />
                </a>
                ))}
            </div>
        </div>
    );
};

export default Entertainment;
