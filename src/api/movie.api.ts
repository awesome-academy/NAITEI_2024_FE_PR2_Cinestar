export const fetchMovies = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/movies`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};
