

interface IProps {
sunrisePreParse:number;
sunsetPreParse:number;
weatherCode:number;
}

interface IWeatherObject {
    val:string
}


const WeatherIcon = ({sunsetPreParse, sunrisePreParse, weatherCode }:IProps) => {
    

    const weatherObject = {
        200:"thunderstorms-day-rain.svg",
        201: "thunderstorms-extreme-rain.svg",
        202: "thunderstorms-extreme-rain.svg",
        210: "thunderstorms-day.svg",
        211: "thunderstorms-day-overcast.svg",
        212: "thunderstorms-day-extreme.svg",
        221: "thunderstorms-day.svg",
        230: "thunderstorms-day-rain.svg",
        231: "thunderstorms-day-overcast-rain.svg",
        232: "thunderstorms-extreme-rain.svg",
        300: "partly-cloudy-day-drizzle.svg",
        301: "partly-cloudy-day-drizzle.svg",
        302: "extreme-day-drizzle.svg",
        310: "drizzle.svg",
        311: "overcast-drizzle.svg",
        312: "extreme-day-drizzle.svg",
        313: "overcast-day-drizzle.svg",
        314: "extreme-day-drizzle.svg",
        321: "overcast-rain.svg",
        500: "partly-cloudy-day-rain.svg",
        501: "overcast-day-rain.svg",
        502: "extreme-day-rain.svg",
        503: "extreme-rain.svg",
        504: "extreme-rain.svg",
        511: "overcast-sleet.svg",
        520: "overcast-drizzle.svg",
        521: "rain.svg",
        522: "overcast-rain.svg",
        531: "extreme-rain.svg",
    }
    return(
        <>

Group 6xx: Snow
ID	Main	Description	Icon
600	Snow	light snow	 13d
601	Snow	Snow	 13d
602	Snow	Heavy snow	 13d
611	Snow	Sleet	 13d
612	Snow	Light shower sleet	 13d
613	Snow	Shower sleet	 13d
615	Snow	Light rain and snow	 13d
616	Snow	Rain and snow	 13d
620	Snow	Light shower snow	 13d
621	Snow	Shower snow	 13d
622	Snow	Heavy shower snow	 13d
Group 7xx: Atmosphere
ID	Main	Description	Icon
701	Mist	mist	 50d
711	Smoke	Smoke	 50d
721	Haze	Haze	 50d
731	Dust	sand/ dust whirls	 50d
741	Fog	fog	 50d
751	Sand	sand	 50d
761	Dust	dust	 50d
762	Ash	volcanic ash	 50d
771	Squall	squalls	 50d
781	Tornado	tornado	 50d
Group 800: Clear
ID	Main	Description	Icon
800	Clear	clear sky	 01d
 01n
Group 80x: Clouds
ID	Main	Description	Icon
801	Clouds	few clouds: 11-25%	 02d
 02n
802	Clouds	scattered clouds: 25-50%	 03d
 03n
803	Clouds	broken clouds: 51-84%	 04d
 04n
804	Clouds	overcast clouds: 85-100%	 04d
 04n




        

        </>
    )
}


export default WeatherIcon