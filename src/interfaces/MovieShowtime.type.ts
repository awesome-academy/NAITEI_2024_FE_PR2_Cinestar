export interface Cinema {
    name: string;
    address: string;
    showtimes: string[];
}

export interface MovieShowtimeProps {
    image: string;
    title: string;
    tags: string[];
    rating: string;
    onGoing?: boolean;
    cinemas: Cinema[];
}
