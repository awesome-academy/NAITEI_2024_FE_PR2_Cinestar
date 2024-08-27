import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/LinkButton';
import Image from '../components/Image';
import '../i18n';
import { useTranslation } from "react-i18next";
import { fetchEvents } from '../api/event.api';

function Rental() {
    const { t } = useTranslation();
    const [events, setEvents] = useState<any[]>([]);

    useEffect(() => {
        const getEvents = async () => {
            try {
                const data = await fetchEvents();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        getEvents();
    }, []);

    return (
        <div className="App bg-[#0f172a]">
            <Header />
            <div className="mt-40 bg-[#0f172a] pt-10 text-default-color">
                <div className="container mx-auto flex flex-col items-center">
                    <p className="text-5xl uppercase font-bold tracking-tighter">{t('event.heading')}</p>
                    <p className="text-lg tracking-tighter mt-10">{t('event.desc1')}</p>
                    <p className="text-lg tracking-tighter mt-4">{t('event.desc2')}</p>
                    <div className="mt-10">
                        <div className="flex justify-center items-center">
                            <div className="w-1/2 h-auto pr-10">
                                <p className="text-3xl uppercase tracking-tighter font-bold">{t('event.event1.title')}</p>
                                <p className="mt-6">{t('event.event1.desc')}</p>
                                <Button href="#" className="mt-6 tracking-tighter px-10 w-fit hover:hover-color-white btn--pri text-black">{t('button.contact')}</Button>
                            </div>
                            <div className="w-1/2 h-auto">
                                <Image src={`${process.env.PUBLIC_URL}/images/rent/fanclub.png`} className="w-full"/>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="w-1/2 h-auto">
                                <Image src={`${process.env.PUBLIC_URL}/images/rent/chuong-trinh.png`} className="w-full"/>
                            </div>
                            <div className="w-1/2 h-auto pl-10">
                                <p className="text-3xl uppercase tracking-tighter font-bold">{t('event.event2.title')}</p>
                                <p className="mt-6">{t('event.event2.desc')}</p>
                                <Button href="#" className="mt-6 tracking-tighter px-10 w-fit hover:hover-color-white btn--pri text-black">{t('button.contact')}</Button>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="w-1/2 h-auto pr-10">
                                <p className="text-3xl uppercase tracking-tighter font-bold">{t('event.event3.title')}</p>
                                <p className="mt-6">{t('event.event3.desc')}</p>
                                <Button href="#" className="mt-6 tracking-tighter px-10 w-fit hover:hover-color-white btn--pri text-black">{t('button.contact')}</Button>
                            </div>
                            <div className="w-1/2 h-auto">
                                <Image src={`${process.env.PUBLIC_URL}/images/rent/noi-bo.png`} className="w-full"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 flex flex-col items-start justify-start w-full">
                        <p className="text-5xl uppercase font-bold tracking-tighter">{t('event.title')}</p>
                        <p className="text-lg tracking-tighter mt-6">{t('event.subTitle')}</p>
                        <div className="mt-10 w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {events.map((event, index) => (
                                    <div key={index} className= "rounded-lg flex flex-col items-center group overflow-hidden relative">
                                        <Image src={event.image} alt={event.title} className="w-full h-80 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"/>
                                        <div className="absolute left-0 top-0 w-full h-full bg-white opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                        <div className="relative w-full bg-[linear-gradient(106deg,_#639,_#36c_102.69%)]">
                                            <p className="text-center font-bold uppercase py-4 group-hover:hover-shine">{event.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 w-full mb-20 rounded-lg">
                        <Image src={`${process.env.PUBLIC_URL}/images/rent/web_banner_voucher.jpg`}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Rental;
