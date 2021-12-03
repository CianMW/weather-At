interface ReduxStore {
    locations:{

            currentCity: string
            homeCity: string
    }
    weather: {
        current: []
    } 
}

export default ReduxStore