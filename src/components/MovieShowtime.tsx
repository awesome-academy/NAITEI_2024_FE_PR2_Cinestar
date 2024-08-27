import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import LinkButton from './LinkButton';
import { MovieShowtimeProps } from '../interfaces/MovieShowtime.type';
import { iconTags } from '../contracts/IconTag.contract';
import { useTranslation } from 'react-i18next';
import diacritics from 'diacritics';
import { defaultShowtimes } from '../contracts/Showtimes.contract';

const MovieShowtime: React.FC<MovieShowtimeProps> = ({ image, title, tags, rating, cinemas }) => {
    const { t } = useTranslation();

    const getRatingContent = (rating: string) => {
        switch (rating) {
            case 'T13':
                return t('rating.t13');
            case 'T16':
                return t('rating.t16');
            case 'T18':
                return t('rating.t18');
            case 'K':
                return t('rating.k')
        }
    };

    const generateMovieUrl = (title: string) => {
        let normalizedTitle = diacritics.remove(title);
        normalizedTitle = normalizedTitle.replace(/:/g, '');
        normalizedTitle = normalizedTitle.replace(/\(.*?\)/g, '');
        normalizedTitle = normalizedTitle.trim();
        return normalizedTitle.toLowerCase().replace(/\s+/g, '_');
    };

    return (
        <div className="container mx-auto flex flex-row mb-4 mt-6 border-b-2 border-gray-600 pb-5">
            <div className="flex-2 w-1/3 mr-2">
                <Link to={`/movies/${generateMovieUrl(title)}`} className="block">
                    <div className="relative">
                        <Image
                            src={image}
                            alt={title}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-100 border border-gray-400 rounded-sm"
                            sizes="(max-width: 768px) 135px, 280px"
                        />
                    </div>
                </Link>
                <Link to={`/movies/${generateMovieUrl(title)}`} className="block">
                    <h2 className="text-2xl font-bold text-white mt-6">{title}</h2>
                </Link>
                <div className="flex flex-col mt-2">
                    {tags.map((tag, index) => (
                        <div key={index} className="text-xs text-default-color py-1 mb-1 flex gap-1 font-bold">
                            <Image src={iconTags[index]} alt={`icon-${index}`} className="w-4 h-4 mr-2" />
                            {tag}
                        </div>
                    ))}
                    <div className="text-xs text-default-color py-1 mb-1 flex gap-1 font-bold">
                        <i className="fa-solid fa-user-check text-hover-color w-4 h-4 mr-2"></i>
                        {rating}: {getRatingContent(rating)}
                    </div>
                </div>
            </div>
            <div className="flex-3 w-2/3">
                <div className="space-y-4">
                    {cinemas.map((cinema, index) => (
                        <div key={index} className="border-t border-gray-600 pt-4 flex pl-5">
                            <div className="flex-1 w-1/3 h-full text-default-color flex flex-col gap-y-1">
                                <p className="text-base">Cinestar</p>
                                <h4 className="text-2xl font-bold">{cinema.name}</h4>
                                <p className="text-base">{cinema.address}</p>
                            </div>
                            <div className="flex-2 w-2/3 flex mt-2 ml-8 space-x-4">
                                {defaultShowtimes.map((showtime, idx) => (
                                    <LinkButton
                                        href="#"
                                        key={idx}
                                        className={`text-[#f3ea28] h-fit ${idx === 0 ? "border-[0.1rem] border-[#f3ea28]" : "bg-transparent border-[0.1rem] text-default-color border-defaul-color hover:hover-color hover:border-[#f3ea28]"}`}
                                    >
                                        {showtime.time}
                                    </LinkButton>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieShowtime;
