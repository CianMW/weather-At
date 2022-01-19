
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
        600: "partly-cloudy-day-snow.svg",
        601: "snow.svg",
        602: "extreme-day-snow.svg",
        611: "partly-cloudy-day-sleet.svg",
        612: "partly-cloudy-day-sleet.svg",
        613: "partly-cloudy-day-sleet.svg",
        615: "partly-cloudy-day-sleet.svg",
        616: "overcast-sleet.svg",
        620: "partly-cloudy-day-snow.svg",
        621: "overcast-day-snow.svg",
        622: "extreme-snow.svg",
        701: "mist.svg",
        711: "extreme-smoke.svg",
        721: "haze.svg",
        731: "dust-wind.svg",
        741: "fog.svg",
        751: "dust-wind.svg",
        761: "dust-wind.svg",
        762: "dust-wind.svg",
        771: "umbrella-wind-alt.svg",
        781: "tornado.svg",
        800: "clear-day.svg",
        801: "partly-cloudy-day.svg",
        802: "overcast-day.svg",
        803: "overcast-day.svg",
        804: "overcast.svg"
    };

  const weatherAddress =  Object.fromEntries(Object.entries(weatherObject).filter(([key]) => key === weatherCode.toString()));

    return(
        <>
        {console.log("The weather icon", Object.values(weatherAddress)[0])}
        {weatherCode && <img width="120px" height="120px" src={`/final/${Object.values(weatherAddress)[0]}`}/>}
        </>
    )
}


export default WeatherIcon