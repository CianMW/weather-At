import { Dispatch } from 'redux'
import { weatherKey } from '../EnvSetup';
import { ICoordinateObject, ICoordinates } from '../types/ActionInterfaces';
require('dotenv').config()
//import dotenv from "dotenv/config"


export const getWeatherForecastAction = (city:string|null, coordinates:ICoordinates|null) => {
    // do fetch stuff

    const url = coordinates ? `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}` : `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}` 
    return async (dispatch: Dispatch) => {
      console.log("THIS IS THE URL", city);
      console.log("THIS IS THE env", process.env.REACT_APP_WEATHER_KEY);
      
  
      // dispatch({
      //   type: "TOGGLE_LOADER",
      //   payload: true,
      // });
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log("HERE IS THE FETCHED DATA :", data);
        await dispatch({
          type: "SET_CURRENT_LOCATION_WEATHER",
          payload: data,
        });
        // setTimeout(() => {
        //   dispatch({
        //     type: "TOGGLE_LOADER",
        //     payload: false,
        //   });
        // }, 1000);
        const longitude = data.coord.lon
        const latitude = data.coord.lat
        console.log("the coordinates", longitude, latitude)
        const weekForecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`)
        if (weekForecastResponse.ok){
          const forecastData = await weekForecastResponse.json();
          console.log("THE WEEK DATA", forecastData)
          await dispatch({
            type: "SET_FORECAST",
            payload: forecastData,
          });
        }else {
          console.log("ERROR: could not fetch further data")
        }
      } else {
        console.log("ERROR: could not fetch data");
      }
    };
  };

export const setCurrentLocationAction = (city:string) => {

    return async (dispatch: Dispatch) => {
console.log("SETTING CURRENT CITY TO :", city)
        await dispatch({
          type: "SET_CURRENT_LOCATION",
          payload: city,
        });
        // setTimeout(() => {
        //   dispatch({
        //     type: "TOGGLE_LOADER",
        //     payload: false,
        //   });
        // }, 1000);
    };
  };
export const setCurrentCoordinatesAction = (coordinates:ICoordinateObject) => {

    return async (dispatch: Dispatch) => {
console.log("SETTING CURRENT COORDINATES TO :", coordinates.coordinates)
        await dispatch({
          type: "SET_CURRENT_COORDINATES",
          payload: coordinates.coordinates,
        });
        // setTimeout(() => {
        //   dispatch({
        //     type: "TOGGLE_LOADER",
        //     payload: false,
        //   });
        // }, 1000);
    };
  };
