export interface IForecast {
    coord:      Coord;
    weather:    Weather[];
    base:       string;
    main:       Main;
    visibility: number;
    wind:       Wind;
    clouds:     Clouds;
    dt:         number;
    sys:        Sys;
    timezone:   number;
    id:         number;
    name:       string;
    cod:        number;
}

export interface Clouds {
    all: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Main {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    humidity:   number;
}

export interface Sys {
    type:    number;
    id:      number;
    country: string;
    sunrise: number;
    sunset:  number;
}

export interface IWeather {
    id:          number;
    main:        string;
    description: string;
    icon:        string;
}

export interface Wind {
    speed: number;
    deg:   number;
    gust:  number;
}
export interface IFutureForecastArray {
    forecast: IFullForecast[]
}
export interface IFullForecast {
lat: number;
lon: number;
timezone: string;
timezone_offset: number;
current: ICurrent;
minutely: IMinute[];
hourly: ICurrent[];
daily:  IDailyForecast[];
}


export interface ICurrent {
    dt:         number;
    sunrise?:   number;
    sunset?:    number;
    temp:       number;
    feels_like: number;
    pressure:   number;
    humidity:   number;
    dew_point:  number;
    uvi:        number;
    clouds:     number;
    visibility: number;
    wind_speed: number;
    wind_deg:   number;
    weather:    Weather[];
    wind_gust?: number;
    pop?:       number;
}

export interface Weather {
    id:          number;
    main:        Main;
    description: string;
    icon:        Icon;
}

export enum IDescription {
    ClearSky = "clear sky",
    FewClouds = "few clouds",
    OvercastClouds = "overcast clouds",
    ScatteredClouds = "scattered clouds",
}

export enum Icon {
    The01D = "01d",
    The01N = "01n",
    The02D = "02d",
    The02N = "02n",
    The03D = "03d",
    The04D = "04d",
}

export enum IMain {
    Clear = "Clear",
    Clouds = "Clouds",
}


export interface IDailyForecast {
    dt:         number;
    sunrise:    number;
    sunset:     number;
    moonrise:   number;
    moonset:    number;
    moon_phase: number;
    temp:       ITemp;
    feels_like: IFeelsLike;
    pressure:   number;
    humidity:   number;
    dew_point:  number;
    wind_speed: number;
    wind_deg:   number;
    wind_gust:  number;
    weather:    Weather[];
    clouds:     number;
    pop:        number;
    uvi:        number;
}

export interface IFeelsLike {
    day:   number;
    night: number;
    eve:   number;
    morn:  number;
}

export interface ITemp {
    day:   number;
    min:   number;
    max:   number;
    night: number;
    eve:   number;
    morn:  number;
}


export interface IMinute {
    dt: number;
    precipitation: number;
}
