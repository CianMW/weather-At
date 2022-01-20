interface ReduxStore {
    locations:{

            currentCity: string;
            homeCity: string;
    }
    weather: {
        current: [];
        forecast: [];
    } 
}

export default ReduxStore