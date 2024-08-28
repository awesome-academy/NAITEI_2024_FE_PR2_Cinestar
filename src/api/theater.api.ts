import { Theater } from "../interfaces/Theater.type";

export const fetchOpenTheaters = async (): Promise<Theater[]> => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/theater?type=theater&status=open`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const filteredTheaters = (data as Theater[]).filter((theater) => 
            theater.type === 'theater' && theater.status === 'open'
        );

        return filteredTheaters;
    } catch (error) {
        console.error('Error fetching open theaters:', error);
        throw error;
    }
};

export const fetchAllTheaters = async (): Promise<Theater[]> => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/theater?type=theater`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const filteredTheaters = (data as Theater[]).filter((theater) => 
            theater.type === 'theater'
        );

        return filteredTheaters;
    } catch (error) {
        console.error('Error fetching all theaters:', error);
        throw error;
    }
};

export const fetchHeadquarters = async (): Promise<Theater[]> => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/theater?type=headquarter`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const filteredHeadquarters = (data as Theater[]).filter((theater) => 
            theater.type === 'headquarter'
        );

        return filteredHeadquarters;
    } catch (error) {
        console.error('Error fetching headquarters:', error);
        throw error;
    }
};

export const fetchOpenTheatersAndHeadquarters = async (): Promise<{ openTheaters: Theater[], headquarters: Theater[] }> => {
    try {
        const [openTheatersResponse, headquartersResponse] = await Promise.all([
            fetchOpenTheaters(),
            fetchHeadquarters()
        ]);

        return {
            openTheaters: openTheatersResponse,
            headquarters: headquartersResponse
        };
    } catch (error) {
        console.error('Error fetching combined data:', error);
        throw error;
    }
};