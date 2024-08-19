import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Movie from '../components/Movie';
import { MovieProps } from "../interfaces/Movie.type";
import '../i18n';
import { useTranslation } from "react-i18next";
import { fetchMovies } from '../api/movie.api';

function UpComing() {
    const { t } = useTranslation();
    const [movies, setMovies] = useState<MovieProps['movie'][]>([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await fetchMovies();
                const currentDate = new Date().toISOString().split("T")[0];
                const filteredMovies = data.filter((movie: MovieProps['movie']) => movie.releaseDate && movie.releaseDate > currentDate);
                setMovies(filteredMovies);
            } catch (error) {
                console.error('Error setting movies:', error);
            }
        };

        getMovies();
    }, []);

    return (
        <div className="App bg-[#0f172a]">
            <Header />
            <div className="mt-40 bg-[#0f172a]">
                <div className="container mx-auto flex flex-col items-center justify-center mb-32 mt-16">
                    <div className="text-default-color uppercase text-4xl text-center font-bold mb-8 tracking-tighter">
                        {t('label.upComing')}
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

export default UpComing;
