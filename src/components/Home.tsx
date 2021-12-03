import { useEffect, useState } from "react"
import ReduxStore from "../types/ReduxStore"
import { Action } from "redux"
import { connect } from 'react-redux'
import { getWeatherForecastAction, setCurrentLocationAction } from "../actions"
import { IForecast } from "../types/weather"
import {  ThunkDispatch } from "redux-thunk"
import {Button, Container, Row, Col, FormControl, Form} from "react-bootstrap"


interface homeProps {
  currentWeather: IForecast[]
  currentCity: string
  getWeatherForecast: (c:string) => void
  setCurrentLocation: (c:string) => void
}

const mapStateToProps = (state: ReduxStore) => ({
    currentWeather: state.weather.current,
   currentCity: state.locations.currentCity
  })

const mapDispatchToProps = (dispatch: ThunkDispatch<Action, any , any>) => ({
    getWeatherForecast: (city:string ) => {
      dispatch(getWeatherForecastAction(city))
    },
    setCurrentLocation: (city:string ) => {
      dispatch(setCurrentLocationAction(city))
    },
  })

const Home = ({currentWeather, currentCity, getWeatherForecast, setCurrentLocation}:homeProps )=> {
const [selectedCity, setSelectedCity] = useState<string | []>("glasgow");

  // const getWeather = async () => {
  //     getWeatherForecast(selectedCity as any)

  //     console.log(currentWeather)

  //   } 
   

    useEffect(() => {
      getWeatherForecast(currentCity)
  }, [currentCity])

    useEffect(() => {
      setCurrentLocation(selectedCity as any)
       
    }, [])
    return(
        <>
        <Button onClick={() => console.log(selectedCity)}>Click here</Button>
        <Container className="mt-5 Main-forecast p-4">
          <Row className="search-location justify-content-between">
            <div>
              <span>home location</span>
            </div>
          <Form className="d-flex search-area">
        <FormControl type="text" value={selectedCity} onChange={e => setSelectedCity(e.target.value)} placeholder="Search" className="mr-sm-2" />
        </Form>

          </Row>
          <Row>
          <Col className="">
        {currentWeather.length === 1 && (currentWeather.map(weather =>
        
          <Container className="bordered p-3">
            <Row>
              <Col sm={4} className="bordered p-0 d-flex-column">
              <Col sm={6}>
              <div><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/></div>

              </Col>
              <Col sm={6} className="current-weather-description mt-1">
              <div><h6><p>{weather.weather[0].description}</p></h6></div>
              </Col>
              </Col>
              <Col className="bordered d-flex">

              <div className="wrapping-temperature">
                <Col>
              <div className="d-flex"><span className="mr-2">now:</span><h3>{weather.main.temp}°C</h3></div>
              </Col>
              <div>Real Feal: {weather.main.feels_like}°C</div>
              </div>
              <div>{weather.main.temp_max}</div>
              <div>{weather.main.temp_min}</div>
              <div>{weather.main.humidity}</div>
           
              </Col>
            </Row>
            
          
          </Container>
        
        
        ))

        }
          </Col>
          </Row>

        </Container>

        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)