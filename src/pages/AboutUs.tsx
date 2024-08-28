import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from '../components/Image';
import { useTranslation } from "react-i18next";
import '../i18n';
import { Theater } from '../interfaces/Theater.type';
import { fetchOpenTheatersAndHeadquarters, fetchAllTheaters } from '../api/theater.api';

function AboutUs() {
    const { t } = useTranslation();
    const [openTheaters, setOpenTheaters] = useState<Theater[]>([]);
    const [headquarters, setHeadquarters] = useState<Theater[]>([]);
    const [theaters, setTheaters] = useState<Theater[]>([]);

    useEffect(() => {
        const getTheatersAndHeadquarters = async () => {
            try {
                const data = await fetchOpenTheatersAndHeadquarters();
                setOpenTheaters(data.openTheaters);
                setHeadquarters(data.headquarters);
            } catch (error) {
                console.error('Error fetching theaters and headquarters:', error);
            }
        };

        getTheatersAndHeadquarters();
    }, []);

    useEffect(() => {
        const getAllTheaters = async () => {
            try {
                const data = await fetchAllTheaters();
                setTheaters(data);
            } catch (error) {
                console.error('Error fetching all theaters:', error);
            }
        };

        getAllTheaters();
    }, []);

  return (
    <div className="App bg-[#0f172a]">
        <Header />
        <div className="mt-40 bg-[#0f172a]">
            <div className="container mx-auto flex flex-col items-center justify-center text-default-color">
                <div className="relative w-full p-16 mt-10">
                    <Image src={`${process.env.PUBLIC_URL}/images/ht-qc-br.jpg`} className="absolute bottom-0 left-0 top-0 right-0 z-[1] w-full h-full object-cover" width="1791" height="600"/>
                    <div className="w-full relative z-[2]">
                        <h1 className="text-center text-4xl uppercase font-bold tracking-tighter">{t('aboutUs.heading1')}</h1>
                        <p className="text-sm px-40 text-center mt-8 font-semibold">{t('aboutUs.des1')}</p>
                    </div>
                </div>

                <div className="mt-20">
                    <h1 className="text-center text-4xl uppercase font-bold tracking-tighter">{t('aboutUs.heading2')}</h1>
                    <div className="flex items-center justify-between gap-6 mt-10">
                        <div className="bg-blue-700 bg-opacity-80 rounded-lg flex flex-col gap-6 flex-1 p-6 text-center">
                            <p className="text-hover-color text-3xl mx-auto font-bold leading-none">01</p>
                            <p className="text-sm text-center font-semibold">{t('aboutUs.mission1')}</p>
                        </div>
                        <div className="bg-blue-700 bg-opacity-80 rounded-lg flex flex-col gap-6 flex-1 p-6 text-center">
                            <p className="text-hover-color text-3xl mx-auto font-bold leading-none">02</p>
                            <p className="text-sm text-center font-semibold">{t('aboutUs.mission2')}</p>
                        </div>
                        <div className="bg-blue-700 bg-opacity-80 rounded-lg flex flex-col gap-6 flex-1 p-6 text-center">
                            <p className="text-hover-color text-3xl mx-auto font-bold leading-none">03</p>
                            <p className="text-sm text-center font-semibold">{t('aboutUs.mission3')}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        {theaters.map((theater, index) => (
                            <div key={index} className="text-center">
                                <Image src={`${process.env.PUBLIC_URL}${theater.image}`} className="object-cover w-full h-auto rounded-lg" alt={theater.name} />
                                <p className="text-lg font-bold mt-4 uppercase tracking-tighter">Cinestar {theater.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 h-auto">
                    <h1 className="text-center text-4xl uppercase font-bold tracking-tighter">{t('aboutUs.heading3')}</h1>
                    <p className="text-sm px-80 text-center mt-8 font-semibold">{t('aboutUs.des2')}</p>
                    { headquarters.map((hq, index) => (
                        <div key={index} className="relative w-full mt-16 h-fit">
                            <div className="absolute top-0 left-0 right-0 bottom-0 z-[1]">
                                <Image src={`${process.env.PUBLIC_URL}${hq.image}`} className="object-cover w-full h-full rounded-lg" alt={hq.name} />
                            </div>
                            <div className="relative z-[2] p-20 bg-opacity-80 rounded-lg">
                                <h2 className="text-4xl font-bold uppercase text-hover-color">{hq.name}</h2>
                                <p className="text-lg mt-8">{hq.address}</p>
                                <p className="text-lg mt-4">{hq.mail}</p>
                                <p className="text-lg mt-4">{hq.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32">
                    <h1 className="text-center text-4xl uppercase font-bold tracking-tighter">{t('aboutUs.heading4')}</h1>
                    <p className="text-sm px-80 text-center mt-8 font-semibold">{t('aboutUs.des2')}</p>
                    <div className="mt-20 flex">
                        <div className="flex-1">
                            <Image src={`${process.env.PUBLIC_URL}/images/theater-banner.png`}/>
                        </div>
                        <div className="flex-1"></div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default AboutUs;
