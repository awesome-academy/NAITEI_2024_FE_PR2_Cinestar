import React from "react";
import Slider from "react-slick";
import Button from "./Button";
import Image from "./Image";
import '../i18n';
import { useTranslation } from "react-i18next";
import { discountTag } from "../contracts/DiscountTag.contract";

const DiscountSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    const { t } = useTranslation();
    
    return (
        <div className="container mx-auto mb-32 mt-10 relative">
            <div className="text-default-color uppercase text-4xl font-bold mb-8 ml-2">
                {t('label.discount')}
            </div>
            <div className="container mx-auto mb-14">
                <Slider {...settings}>
                    {discountTag.map((image, index) => (
                        <div key={index} className="px-2">
                            <Image src={image} alt="banner-promotion" className="w-full h-auto object-cover rounded-md"/>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="flex justify-center">
                <Button href="#" className="hover:hover-color-white btn--pri w-fit">
                    {t('button.all')}
                </Button>
            </div>
        </div>
    );
};

export default DiscountSlider
