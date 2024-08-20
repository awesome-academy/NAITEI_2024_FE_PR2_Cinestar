import React from 'react';
import Button from './Button';
import Image from './Image';
import { useTranslation } from "react-i18next";
import '../i18n';

const Header = () => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <header className="fixed h-fit bg-[#0f172a] inline-block left-0 top-0 transition-all duration-400 w-full z-[55]">
            <div className="container mx-auto px-4 h-24">
                <div className="flex items-center h-full gap-12">
                    <a 
                    className="text-inherit no-underline flex w-32"
                    aria-label="The logo of Cinestar"
                    href="/"  >
                        <Image src={`${process.env.PUBLIC_URL}/images/header-logo.png`} alt="CineStar Logo" className="static h-full w-full text-transparent" sizes="100vw"/>
                    </a>

                    <div className="flex items-center justify-center flex-1 gap-4">
                        <Button href="#" icon={`${process.env.PUBLIC_URL}/images/icons/ic-ticket.svg`} className="hover:hover-color-white btn--pri">
                            {t('header.buyTicket')}
                        </Button>
                        <Button href="#" icon={`${process.env.PUBLIC_URL}/images/icons/ic-cor.svg`} className="btn--second text-gray-100">
                            {t('header.buyPopCorn')}
                        </Button>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="relative">
                            <div className="toggleBtn flex items-center justify-center border-2 border-white rounded-full cursor-pointer h-[2.4rem] w-[2.4rem] lg:hidden sm:hidden">
                                <Image src={`${process.env.PUBLIC_URL}/images/icons/icon-search.svg`} className="text-transparent w-1/2" width="15" height="15"/>
                            </div>

                            <div className="togglePanel">
                                <div className="searchForm">
                                    <div>
                                        <div className="flex items-center relative">
                                            <input
                                                className="bg-white rounded-[100rem] text-2 font-normal h-12 leading-none px-12 pl-8 w-full border-none text-[#475569] outline-none"
                                                type="text"
                                                value=""
                                                placeholder={t('header.search')}>
                                            </input>
                                            <button type="submit" className="absolute right-4 w-4">
                                                <Image src={`${process.env.PUBLIC_URL}/images/icons/ic-header-search.svg`} className="text-transparent w-full" width="15" height="15"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="min-w-[120px] desktop">
                            <div className="flex items-center relative gap-1 cursor-pointer top-[-0.2rem]">
                                <div className="flex-shrink-0 h-6 relative w-6">
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/ic-header-auth.svg`} className="h-full object-cover w-full"></img>
                                </div>
                                <div className="flex items-center gap-2 z-10">
                                    <a className="no-underline text-default-color hover:hover-color">
                                        <i className="fa-regular fa-user lg:opacity-0 relative top-[-0.3rem]"></i>
                                        {t('header.login')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <select onChange={handleChangeLanguage} value={i18n.language}>
                                <option value="vi">
                                    <span>
                                        <Image src={`${process.env.PUBLIC_URL}/images/icons/footer-vietnam.svg`} width="24" height="24" />
                                    </span>
                                    VI
                                </option>
                                <option value="en">
                                    <span>
                                        <Image src={`${process.env.PUBLIC_URL}/images/icons/footer-america.webp`} width="24" height="24" />
                                    </span>
                                    ENG
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-16">
                <div className="flex items-center relative cursor-pointer gap-4 h-full justify-between container mx-auto px-4 border-t border-gray-300">
                    <div className="flex gap-16">
                        <div className="group">
                            <span className="flex gap-2 text-default-color hover:hover-color">
                                <i className="fa-sharp fa-solid fa-location-dot"></i>
                                <span className="leading-none">{t('header.location')}</span>
                            </span>
                            <div className="absolute left-0 top-full w-full grid grid-cols-3 overflow-hidden p-6 pt-4 pb-4 gap-y-2 text-white bg-[#0f172a] border-[0.1rem] border-[rgba(248,250,252,0.1)] rounded-[0.4rem] opacity-0 translate-y-2 transition-all duration-300 ease-in-out invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible">
                                <a className="flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out whitespace-nowrap w-full hover:hover-color" href="#">{t('location.locat1')}</a>
                                <a className="flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out whitespace-nowrap w-full hover:hover-color" href="#">{t('location.locat2')}</a>
                                <a className="flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out whitespace-nowrap w-full hover:hover-color" href="#">{t('location.locat3')}</a>
                                <a className="flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out whitespace-nowrap w-full hover:hover-color" href="#">{t('location.locat4')}</a>
                                <a className="flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out whitespace-nowrap w-full hover:hover-color" href="#">{t('location.locat5')}</a>
                                <a className="flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out whitespace-nowrap w-full hover:hover-color" href="#">{t('location.locat6')}</a>
                                <a className="flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out whitespace-nowrap w-full hover:hover-color" href="#">{t('location.locat7')}</a>
                                <a className="flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out whitespace-nowrap w-full hover:hover-color" href="#">{t('location.locat8')}</a>
                            </div>
                        </div>
                        <div>
                        <span className="flex gap-2 text-default-color hover:hover-color">
                                <i className="fa-sharp fa-solid fa-location-dot"></i>
                                <span className="leading-none">{t('header.showtime')}</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 text-default-color">
                        <a className="flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out whitespace-nowrap w-full hover:underline-position-under hover:hover-color" href="#">{t('nav.discount')}</a>
                        <a className="flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out whitespace-nowrap w-full hover:underline-position-under hover:hover-color" href="#">{t('nav.rent')}</a>
                        <a className="flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out whitespace-nowrap w-full hover:underline-position-under hover:hover-color" href="#">{t('nav.entertainment')}</a>
                        <a className="flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out whitespace-nowrap w-full hover:underline-position-under hover:hover-color" href="#">{t('nav.aboutUs')}</a>
                        <a className="flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out whitespace-nowrap w-full hover:underline-position-under hover:hover-color" href="#">{t('nav.contact')}</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
