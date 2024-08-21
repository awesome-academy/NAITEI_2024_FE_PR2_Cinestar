import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Movie from '../components/Movie';
import { MovieProps } from "../interfaces/Movie.type";
import '../i18n';
import { useTranslation } from "react-i18next";
import { fetchOnGoingMovies } from '../api/onGoing.api';

function OnGoing() {
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

    const { t } = useTranslation();

    return (
        <div className="App bg-[#0f172a]">
            <Header />
            <div className="mt-40 bg-[#0f172a]">
                <div className="container mx-auto flex flex-col items-center justify-center mb-32 mt-16">
                    <div className="text-default-color uppercase text-4xl text-center font-bold mb-8 tracking-tighter">
                        {t('label.onGoing')}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
                        {movies.map((movie, index) => (
                            <div key={index} className="px-2">
                                <Movie movie={movie} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default OnGoing;
