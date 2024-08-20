import React, { useEffect, useState } from 'react';
import Movie from "./Movie";
import Button from './Button';
import Slider from "react-slick";
import { MovieProps } from "../interfaces/Movie.type";
import '../i18n';
import { useTranslation } from "react-i18next";
import { fetchOnGoingMovies } from '../api/onGoing.api';

const OnGoing: React.FC = () => {
    const [movies, setMovies] = useState<MovieProps['movie'][]>([]);

    useEffect(() => {
        const getOnGoingMovies = async () => {
            try {
                const data = await fetchOnGoingMovies();
                setMovies(data);
            } catch (error) {
                console.error('Error setting movies:', error);
            }
        };

        getOnGoingMovies();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };

    const { t } = useTranslation();

    return (
        <div className="container mx-auto flex flex-col items-center justify-center mb-32 mt-10">
            <div className="text-default-color uppercase text-4xl text-center font-bold mb-8">
                {t('label.onGoing')}
            </div>
            <div className="container mx-auto mb-14">
                <Slider {...settings}>
                    {movies.map((movie, index) => (
                        <div key={index} className="px-2">
                            <Movie movie={movie} />
                        </div>
                    ))}
                </Slider>
            </div>
            <Button href="#" className="border-[0.1rem] border-[#f3ea28] text-[#f3ea28] hover:hover-color-white btn--second before:bg-transparent px-20">
                {t('button.see')}
            </Button>
        </div>
    );
};

export default OnGoing;
