import React, { useEffect, useState } from 'react';import Header from '../components/Header';
import Footer from '../components/Footer';
import ShowTimeFilter from '../components/ShowTimeFilter';
import MovieShowtimeList from '../components/MovieShowtimeList';
import Movie from '../components/Movie';
import Slider from "react-slick";
import { MovieProps } from "../interfaces/Movie.type";
import { fetchOnGoingMovies } from '../api/onGoing.api';

function ShowTime() {
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

  return (
    <div className="App bg-[#0f172a]">
      <Header />
      <div className="mt-40 bg-[#0f172a] mb-5">
        <ShowTimeFilter />
        <MovieShowtimeList />
        <div className="container mx-auto mb-14 mt-10">
          <Slider {...settings}>
            {movies.map((movie, index) => (
              <div key={index} className="px-2">
                <Movie movie={movie} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ShowTime;
