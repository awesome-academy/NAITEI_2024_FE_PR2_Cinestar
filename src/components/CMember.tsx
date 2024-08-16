import React from "react";
import '../i18n';
import { useTranslation } from "react-i18next";
import Image from "./Image";
import Button from "./Button";

const CMember: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative">
            <div className="absolute inset-0 z-0">
                <Image
                src={`${process.env.PUBLIC_URL}/images/members/bg-cfriends.webp`}
                alt="C'Friend"
                data-nimg="fill"
                sizes="100vw"
                className="object-cover h-full w-full inset-0"
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
            <div className="relative z-20 container mx-auto flex flex-col items-center justify-center py-40">
                <div className="text-default-color uppercase text-4xl text-center font-bold mb-8">
                    {t('label.program')}
                </div>
                <div className="flex items-center justify-between gap-x-8 mt-10">
                    <div>
                        <a href="#" aria-label="Read more about membership" className="relative block overflow-hidden rounded-lg shadow-[0_12px_48px_0_rgba(243,234,40,0.5)]">
                            <Image 
                            src={`${process.env.PUBLIC_URL}/images/members/CMember.webp`}
                            width="590"
                            height="320"
                            sizes="(max-width: 426px) 200px, (max-width: 768px) 350px, 590px"
                            alt="CMember"/>
                        </a>
                        <div className="flex flex-col gap-y-5 mt-10 text-default-color">
                            <h3 className="uppercase text-4xl font-bold tracking-tighter">
                                <a href="https://cinestar.com.vn/membership">{t('label.cFriend')}</a>
                            </h3>
                            <p className="overflow-hidden text-ellipsis break-words line-clamp-3">{t('label.cFriendDes')}</p>
                            <Button href="https://cinestar.com.vn/membership" className="hover:hover-color-white btn--pri mt-auto min-w-[18rem] w-fit text-black font-bold">
                                {t('button.learn')}
                            </Button>
                        </div>
                    </div>
                    <div>
                        <a href="#" aria-label="Read more about membership" className="relative block overflow-hidden rounded-lg shadow-[0_12px_48px_0_rgba(243,234,40,0.5)]">
                            <Image 
                            src={`${process.env.PUBLIC_URL}/images/members/c-vip.webp`}
                            width="590"
                            height="320"
                            sizes="(max-width: 426px) 200px, (max-width: 768px) 350px, 590px"
                            alt="CMember"/>
                        </a>
                        <div className="flex flex-col gap-5 mt-10 text-default-color">
                            <h3 className="uppercase text-4xl font-bold tracking-tighter">
                                <a href="https://cinestar.com.vn/membership">{t('label.cVip')}</a>
                            </h3>
                            <p className="overflow-hidden text-ellipsis break-words line-clamp-3">{t('label.cVipDes')}</p>
                            <Button href="https://cinestar.com.vn/membership" className="hover:hover-color-white btn--pri mt-auto min-w-[18rem] w-fit text-black font-bold">
                                {t('button.learn')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CMember
