import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchServices } from '../api/service.api';
import Image from '../components/Image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ServiceProps } from '../interfaces/Service.type';

function ServiceDetail() {
    const { serviceId } = useParams<{ serviceId: string }>();
    const [service, setService] = useState<ServiceProps | null>(null);

    useEffect(() => {
        const getServiceData = async () => {
            try {
                const services: ServiceProps[] = await fetchServices();
                const selectedService = services.find((s: ServiceProps) => s.id === serviceId);
                setService(selectedService || null);
            } catch (error) {
                console.error('Error fetching service:', error);
            }
        };
    
        getServiceData();
    }, [serviceId]);

    return (
        <div className="App bg-[#0f172a]">
            <Header />
            {service && (
                <div className="mt-40 bg-[#0f172a] text-default-color">
                    <div className="container mx-auto flex flex-col items-center justify-center">
                        <Image src={`${process.env.PUBLIC_URL}/images/services/all/${service.id}.png`} className="w-full object-cover"/>
                        <p className="text-6xl uppercase font-extrabold tracking-tighter mt-20">{service.title}</p>
                        <div className="flex flex-col items-center justify-center gap-4 mt-16 px-40">
                            {service.description.map((desc, index) => (
                                <p key={index} className="text-center font-semibold">{desc}</p>
                            ))}
                        </div>
                        <div className="w-full mt-10">
                            <div className="flex flex-wrap -mx-4">
                                {service.address.map((addr, index) => (
                                    <div key={index} className="w-full md:w-1/2 px-4 mb-8">
                                        <div className="p-4 flex flex-col gap-4">
                                            <p className="font-bold text-3xl tracking-tighter">{addr.location}</p>
                                            <div className="flex gap-2 items-center">
                                                <Image src={`${process.env.PUBLIC_URL}/images/icons/ic-branch-map.svg`}/>
                                                <p className="hover:hover-color">{addr.address}</p>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <Image src={`${process.env.PUBLIC_URL}/images/icons/ic-facebook.svg`}/>
                                                <a href={addr.link} className="hover:hover-color underline underline-offset-2">{addr.link}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default ServiceDetail;
