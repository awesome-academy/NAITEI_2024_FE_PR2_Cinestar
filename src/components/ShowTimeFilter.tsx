import React, { useEffect, useState } from "react";
import Image from "./Image";
import Dropdown from "./Dropdown";
import { GetDaysOfWeek } from '../utils/Date.utils';
import { getOnGoingMovieTitles } from "../utils/Movie.utils";
import { fetchOpenTheaters } from "../api/theater.api";
import { useTranslation } from "react-i18next";

const ShowTimeFilter: React.FC = () => {
    const { t } = useTranslation();
    const [movieTitles, setMovieTitles] = useState<string[]>([]);
    const [theaterNames, setTheaterNames] = useState<string[]>([]);

    useEffect(() => {
        const fetchMovieTitles = async () => {
            try {
                const titles = await getOnGoingMovieTitles();
                setMovieTitles(titles);
            } catch (error) {
                console.error('Error fetching movie titles:', error);
            }
        };
    
        const fetchTheaterNames = async () => {
            try {
                const theaters = await fetchOpenTheaters();
                const names = theaters.map(theater => `Cinestar ${theater.name}`);
                setTheaterNames(names);
            } catch (error) {
                console.error('Error fetching theater names:', error);
            }
        };
    
        fetchMovieTitles();
        fetchTheaterNames();
    }, []);

    return (
        <section className="mt-20 mx-0">
            <div className="container mx-auto flex">
                <div className="border-b border-gray-400 flex gap-4 justify-between pb-20 w-full font-bold">
                    <div className="border border-gray-400 rounded-lg flex flex-col basis-1/4 p-4">
                        <div className="items-center text-[2.4rem] text-hover-color flex justify-between mb-4 w-full">
                            <span className="leading-none text-nowrap text-2xl">
                                1. {t('filter.date')}
                            </span>
                            <span className="text-hover-color">
                                <Image width="30" height="30" src={`${process.env.PUBLIC_URL}/images/icons/icon-calendar.svg`} className="max-h-10 fill-current"/>
                            </span>
                        </div>
                        <div className="mt-auto capitalize items-center flex gap-2 mx-auto max-w-full w-full relative">
                            <Dropdown
                                getOptions={GetDaysOfWeek}
                                onChange={(value) => value}
                                defaultValue={GetDaysOfWeek()[0]}
                                renderOption={(day) => day}/>
                        </div>
                    </div>
                    <div className="border border-gray-400 rounded-lg flex flex-col basis-1/2 p-4">
                        <div className="items-center text-[2.4rem] text-hover-color flex justify-between mb-4 w-full">
                            <span className="leading-none text-nowrap text-2xl">
                                2. {t('filter.movie')}
                            </span>
                            <span className="text-hover-color">
                                <Image width="30" height="30" src={`${process.env.PUBLIC_URL}/images/icons/icon-movie.svg`} className="max-h-10 fill-current"/>
                            </span>
                        </div>
                        <div className="mt-auto capitalize items-center flex gap-2 mx-auto max-w-full w-full relative">
                            <Dropdown
                                options={movieTitles}
                                onChange={(value) => value}
                                defaultValue={t('filter.movieFill')}
                                renderOption={(title) => title}/>
                        </div>
                    </div>
                    <div className="border border-gray-400 rounded-lg flex flex-col basis-1/4 p-4">
                        <div className="items-center text-[2.4rem] text-hover-color flex justify-between mb-4 w-full">
                            <span className="leading-none text-nowrap text-2xl">
                                3. {t('filter.theater')}
                            </span>
                            <span className="text-hover-color">
                                <Image width="30" height="30" src={`${process.env.PUBLIC_URL}/images/icons/icon-maps.svg`} className="max-h-10 fill-current"/>
                            </span>
                        </div>
                        <div className="mt-auto capitalize items-center flex gap-2 mx-auto max-w-full w-full relative">
                            <Dropdown
                                options={theaterNames}
                                onChange={(value) => value}
                                defaultValue={t('filter.theaterFill')}
                                renderOption={(name) => name}/>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    )
}

export default ShowTimeFilter;
