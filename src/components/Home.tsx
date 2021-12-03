import { useEffect, useState } from "react"
import ReduxStore from "../types/ReduxStore"
import { Action } from "redux"
import { connect } from 'react-redux'
import { getWeatherForecastAction } from "../actions"
import { IForecast } from "../types/weather"
import {  ThunkDispatch } from "redux-thunk"
import {Button} from "react-bootstrap"


interface homeProps {
  currentWeather: IForecast[]
  getWeatherForecast: (c:string) => void
}

const mapStateToProps = (state: ReduxStore) => ({
    currentWeather: state.weather.current,
  })

const mapDispatchToProps = (dispatch: ThunkDispatch<Action, any , any>) => ({
    getWeatherForecast: (city:string ) => {
      dispatch(getWeatherForecastAction(city))
    },
  })

const Home = ({currentWeather, getWeatherForecast}:homeProps )=> {
const [selectedCity, setSelectedCity] = useState<string | []>("glasgow");

  const getWeather = async () => {
      getWeatherForecast(selectedCity as any)
  }


    useEffect(() => {
      getWeather()
       
    })
    return(
        <>
        <Button onClick={()=> getWeather() }>Click here</Button>

        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)