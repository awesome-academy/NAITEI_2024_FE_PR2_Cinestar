interface Address {
    location: string;
    address: string;
    link: string;
}

export interface ServiceProps {
    id: string;
    title: string;
    description: string[];
    address: Address[];
}
