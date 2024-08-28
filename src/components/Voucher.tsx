import React from 'react';
import Button from './LinkButton';
import Image from './Image';
import { useTranslation } from 'react-i18next';
import { VoucherProps } from '../interfaces/Voucher.type';

const Voucher: React.FC<VoucherProps> = ({ voucher }) => {
    const { title, subTitle, condition = [], notes = [], image, reverse } = voucher;
    const { t } = useTranslation();

    return (
        <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} my-8 text-default-color gap-4`}>
            <div className="w-7/12">
                <Image src={image} className="w-full h-auto p-4" />
            </div>

            <div className="w-5/12 p-4 flex flex-col">
                <h2 className="text-2xl font-bold tracking-tighter">{title}</h2>
                <p className="text-sm mb-4">{subTitle}</p>
                <div>
                    <p className="font-semibold mb-4">{t('discount.condition')}:</p>
                    <ul className="list-disc ml-5 text-sm">
                        {condition.map((condition, index) => (
                            <li key={index} className="my-1">{condition}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8 mb-6">
                    <p className="font-semibold mb-4">{t('discount.note')}:</p>
                    <ul className="list-disc ml-5 text-sm">
                        {notes.map((note, index) => (
                            <li key={index} className="my-1">{note}</li>
                        ))}
                    </ul>
                </div>
                <Button href="#" className="hover:hover-color-white btn--pri text-black px-20 w-fit">{t('button.buyNow')}</Button>
            </div>
        </div>
    );
}

export default Voucher;
