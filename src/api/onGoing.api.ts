export const fetchOnGoingMovies = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/movies?onGoing=true`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching on-going movies:', error);
        throw error;
    }
};
