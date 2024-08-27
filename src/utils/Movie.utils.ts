import { fetchOnGoingMovies } from '../api/onGoing.api';

export const getOnGoingMovieTitles = async () => {
    const movies = await fetchOnGoingMovies();
    return movies.map((movie: { title: string }) => movie.title);
};
