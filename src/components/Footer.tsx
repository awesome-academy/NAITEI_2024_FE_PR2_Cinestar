import React from 'react';
import { useTranslation } from "react-i18next";
import Button from './Button';
import Image from './Image';
import '../i18n';

const Footer = () => {
    const { t, i18n } = useTranslation();

    const currentLanguage = i18n.language;

    return (
        <footer className="bg-gradient-to-r from-[#639] to-[#36C] via-[#639] bg-[106deg] pb-16 relative">
            <div>
                <div className="container mx-auto px-4 text-[#F8FAFC]">
                    <div className="pt-40">
                        <div>&nbsp;</div>
                        <div className="pb-10 grid grid-cols-12 gap-4">
                            <div className="flex flex-col gap-x-0 gap-y-8 col-span-4">
                                <a href="#" className="" aria-label="The logo of Cinestar">
                                    <Image
                                        width="170"
                                        height="60"
                                        sizes="100vw"
                                        src={`${process.env.PUBLIC_URL}/images/header-logo.png`} />
                                </a>
                                <div>
                                    <p className="uppercase text-[#F8FAFC]">BE HAPPY, BE A STAR</p>
                                </div>
                                <div className="flex gap-4">
                                    <Button href="#" className="hover:hover-color-white btn--pri text-[#0f172a]">
                                        {t('header.buyTicket')}
                                    </Button>
                                    <Button href="#" className="border-[0.1rem] border-[#f3ea28] text-[#f3ea28] hover:hover-color-white btn--second">
                                        {t('header.buyPopCorn')}
                                    </Button>
                                </div>
                                <div>
                                    <ul className="flex items-center gap-x-5 list-none">
                                        <li>
                                            <a href="https://www.facebook.com/cinestarcinemasvietnam" aria-label="Facebook of Cinestar">
                                                <Image
                                                    width="24"
                                                    height="24"
                                                    src={`${process.env.PUBLIC_URL}/images/icons/footer-facebook.svg`} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/@CinestarCinemasVietnam" aria-label="Youtube of Cinestar">
                                                <Image
                                                    width="24"
                                                    height="24"
                                                    src={`${process.env.PUBLIC_URL}/images/icons/footer-youtube.svg`} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.tiktok.com/@cinestar_cinemas?is_from_webapp=1&sender_device=pc" aria-label="Tiktok of Cinestar">
                                                <Image
                                                    width="24"
                                                    height="24"
                                                    src={`${process.env.PUBLIC_URL}/images/icons/footer-tiktok.svg`} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://zalo.me/2861828859391058401" aria-label="Zalo of Cinestar">
                                                <Image
                                                    width="24"
                                                    height="24"
                                                    src={`${process.env.PUBLIC_URL}/images/icons/footer-zalo.svg`} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-[#F8FAFC] flex gap-x-8 items-center">
                                    {t('footer.lang')}: {currentLanguage === 'vi' ? (
                                        <div className="flex gap-x-2">
                                            <Image
                                                src={`${process.env.PUBLIC_URL}/images/icons/footer-vietnam.svg`}
                                                width="24"
                                                height="24" />
                                            <p>VN</p>
                                        </div>
                                    ) : (
                                        <div className="flex gap-x-2">
                                            <Image
                                            src={`${process.env.PUBLIC_URL}/images/icons/footer-america.webp`}
                                            width="24"
                                            height="24" />
                                            <p>ENG</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-span-4 grid grid-cols-2 gap-4 text-[#F8FAFC]">
                               <div className="col-span-1">
                                    <div className="uppercase font-bold mb-4">{t('footer.account.title')}</div>
                                    <ul className="list-none flex flex-col gap-4">
                                        <li>
                                            <a href="#" className="hover:hover-shine">{t('footer.account.acc1')}</a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:hover-shine">{t('footer.account.acc2')}</a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:hover-shine">{t('footer.account.acc3')}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-span-1">
                                    <div className="uppercase font-bold mb-4">{t('footer.rent.title')}</div>
                                    <ul className="list-none flex flex-col gap-4">
                                        <li>
                                            <a href="#" className="hover:hover-shine">{t('footer.rent.rent1')}</a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:hover-shine pr-4">{t('footer.rent.rent2')}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-span-1">
                                    <div className="uppercase font-bold mb-4">{t('footer.show.title')}</div>
                                    <ul className="list-none flex flex-col gap-4">
                                        <li>
                                            <a href="#" className="hover:hover-shine">{t('footer.show.show1')}</a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:hover-shine">{t('footer.show.show2')}</a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:hover-shine">{t('footer.show.show3')}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-span-1">
                                    <div className="uppercase font-bold mb-4">{t('footer.cines.title')}</div>
                                    <ul className="list-none flex flex-col gap-4">
                                        <li>
                                            <a href="#" className="hover:hover-shine">{t('footer.cines.cine1')}</a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:hover-shine">{t('footer.cines.cine2')}</a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:hover-shine">{t('footer.cines.cine3')}</a>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                            <div className="col-span-2 text-[#F8FAFC]">
                                <div className="uppercase font-bold mb-4">{t('footer.service.title')}</div>
                                <ul className="list-none flex flex-col gap-4">
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.service.dv1')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.service.dv2')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.service.dv3')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.service.dv4')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.service.dv5')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.service.dv6')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.service.dv7')}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-2 text-[#F8FAFC]">
                                <div className="uppercase font-bold mb-4">{t('footer.loca.title')}</div>
                                <ul className="list-none flex flex-col gap-4">
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.loca.locaAll')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.loca.loca1')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.loca.loca2')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.loca.loca3')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.loca.loca4')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.loca.loca5')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.loca.loca6')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.loca.loca7')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:hover-shine">{t('footer.loca.loca8')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-[#f8fafc] flex justify-between pt-6">
                        <div>© 2023 Cinestar. All rights reserved.</div>
                        <ul className="flex list-none gap-x-6">
                            <li>
                                <a href="https://cinestar.com.vn/chinh-sach-bao-mat/" className="no-underline cursor-pointer transition-all duration-300 hover:hover-shine">{t('footer.policy.link1')}</a>
                            </li>
                            <li>
                                <a href="https://cinestar.com.vn/news/" className="no-underline cursor-pointer transition-all duration-300 hover:hover-shine">{t('footer.policy.link2')}</a>
                            </li>
                            <li>
                                <a href="https://cinestar.com.vn/faqs/" className="no-underline cursor-pointer transition-all duration-300 hover:hover-shine">{t('footer.policy.link3')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <div className="w-40 my-3 mx-auto">
                            <a href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=51406" aria-label="Ministry of Industry and Trade recognized Cinestar">
                                <Image
                                    width="150"
                                    height="60"
                                    sizes="100vw"
                                    src={`${process.env.PUBLIC_URL}/images/icons/footer-bct.webp`} />
                            </a>
                        </div>
                        <div className="text-xs">
                            <ul className="list-none flex flex-col gap-4">
                                <li>
                                    {t('footer.bct.li1')}                                  
                                </li>
                                <li>
                                    {t('footer.bct.li2')} 
                                </li>
                                <li>
                                    {t('footer.bct.li3')} 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
