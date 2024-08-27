export const fetchEvents = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/events`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};
