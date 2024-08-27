import React, { useEffect, useState } from 'react';
import MovieShowtime from './MovieShowtime';
import LinkButton from './TypeButton';
import { fetchMovies } from '../api/movie.api';
import { fetchOpenTheaters } from '../api/theater.api';
import { MovieShowtimeProps } from '../interfaces/MovieShowtime.type';
import { Cinema } from '../interfaces/MovieShowtime.type';
import { useTranslation } from 'react-i18next';

const MovieShowtimeList: React.FC = () => {
    const [movies, setMovies] = useState<MovieShowtimeProps[]>([]);
    const [showAll, setShowAll] = useState<boolean>(false);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [moviesData, theatersData] = await Promise.all([
                    fetchMovies(),
                    fetchOpenTheaters()
                ]);

                const processedMovies: MovieShowtimeProps[] = (moviesData as MovieShowtimeProps[])
                    .filter((movie: MovieShowtimeProps) => movie.onGoing)
                    .map((movie: MovieShowtimeProps) => {
                        const cinemas = (theatersData as Cinema[]).map((theater: Cinema) => ({
                            name: theater.name,
                            address: theater.address,
                            showtimes: []
                        }));
                        return {
                            image: movie.image,
                            title: movie.title,
                            tags: movie.tags,
                            rating: movie.rating,
                            onGoing: movie.onGoing,
                            cinemas: cinemas
                        };
                    });

                setMovies(processedMovies);
            } catch (error) {
                console.error('Error fetching movies or theaters:', error);
            }
        };

        fetchData();
    }, []);

    const handleShowMore = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setShowAll(true);
    };

    return (
        <div className="mt-6 flex flex-col items-center justify-center">
            {movies.slice(0, showAll ? movies.length : 3).map((movie, index) => (
                <MovieShowtime
                    key={index}
                    image={movie.image}
                    title={movie.title}
                    tags={movie.tags}
                    rating={movie.rating}
                    cinemas={movie.cinemas}
                />
            ))}
            {!showAll && movies.length > 3 && (
                <div className="text-center mt-6">
                    <LinkButton
                        onClick={handleShowMore}
                        className="border-[0.1rem] border-[#f3ea28] text-[#f3ea28] hover:hover-color-white btn--second before:bg-transparent px-20"
                    >
                        {t('button.showTime')}
                    </LinkButton>
                </div>
            )}
        </div>
    );
};

export default MovieShowtimeList;
