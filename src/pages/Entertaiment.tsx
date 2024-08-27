import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";
import { useTranslation } from "react-i18next";
import '../i18n';
import { Link } from "react-router-dom";

function Entertaiment() {
    const { t } = useTranslation();

    return (
        <div className="App bg-[#0f172a]">
            <Header />
            <div className="mt-40 bg-[#0f172a] text-default-color">
                <div className="container mx-auto flex flex-col items-center justify-center">
                    <p className="text-5xl tracking-tighter font-bold uppercase mt-10">{t('label.allEntertaiment')}</p>
                    <div className="mt-12 mb-20 flex flex-col items-center gap-10 w-full">
                        <Link to="/kidzone/" className="hover:shadow-[0_.5rem_1.5rem_#e3d530] w-full">
                            <Image src={`${process.env.PUBLIC_URL}/images/services/all/kidzone.png`} alt="Kidzone" className="w-full object-cover h-full"/>
                        </Link>

                        <Link to="/restaurant/" className="hover:shadow-[0_.5rem_1.5rem_#e3d530] w-full">
                            <Image src={`${process.env.PUBLIC_URL}/images/services/all/restaurant.png`} alt="Restaurant" className="w-full object-cover h-full"/>
                        </Link>

                        <Link to="/bowling/" className="hover:shadow-[0_.5rem_1.5rem_#e3d530] w-full">
                            <Image src={`${process.env.PUBLIC_URL}/images/services/all/bowling.png`} alt="Bowling" className="w-full object-cover h-full"/>
                        </Link>

                        <Link to="/billiard/" className="hover:shadow-[0_.5rem_1.5rem_#e3d530] w-full">
                            <Image src={`${process.env.PUBLIC_URL}/images/services/all/billiard.png`} alt="Billards" className="w-full object-cover h-full"/>
                        </Link>

                        <Link to="/opera/" className="hover:shadow-[0_.5rem_1.5rem_#e3d530] w-full">
                            <Image src={`${process.env.PUBLIC_URL}/images/services/all/opera.png`} alt="Opera" className="w-full object-cover h-full"/>
                        </Link>

                        <Link to="/gym/" className="hover:shadow-[0_.5rem_1.5rem_#e3d530] w-full">
                            <Image src={`${process.env.PUBLIC_URL}/images/services/all/gym.png`} alt="Gym" className="w-full object-cover h-full"/>
                        </Link>

                        <Link to="/coffee/" className="hover:shadow-[0_.5rem_1.5rem_#e3d530] w-full">
                            <Image src={`${process.env.PUBLIC_URL}/images/services/all/coffee.png`} alt="Coffee" className="w-full object-cover h-full"/>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Entertaiment;
