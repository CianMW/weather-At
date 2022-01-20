interface ReduxStore {
    locations:{

            currentCity: string;
            homeCity: string;
            coordinates: {
                longitude: string;
                latitude: string
            }
    }
    weather: {
        current: [];
        forecast: [];
    } 
}

export default ReduxStore