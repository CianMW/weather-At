import { useEffect, useState } from "react"
import ReduxStore from "../types/ReduxStore"
import { Action } from "redux"
import { connect } from 'react-redux'
import { getWeatherForecastAction, setCurrentLocationAction } from "../actions"
import { IForecast } from "../types/weather"
import {  ThunkDispatch } from "redux-thunk"
import {Button, Container, Row, Col, FormControl, Form, InputGroup, FloatingLabel} from "react-bootstrap"
import WeatherIcon from "./WeatherIcon"
import LocationAndTime from "./LocationAndTime"


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
const [selectedCity, setSelectedCity] = useState<string | []>(currentCity);

  // const getWeather = async () => {
  //     getWeatherForecast(selectedCity as any)

  //     console.log(currentWeather)

  //   } 
   

    useEffect(() => {
      getWeatherForecast(currentCity)
  }, [currentCity])

    useEffect(() => {
      if (selectedCity.length > 3){
        setCurrentLocation(selectedCity as any)

      }
       
    }, [selectedCity])
    return(
        <>
        {/* test start */}
        <Row>
          <Col sm={3} className="p-0 m-0"></Col>
          <Col sm={6} id="weather-column" className="col-12 m-1">
            {/* inner test */}

        <Container className="mt-5 rounded Main-forecast p-4">
          <Row className="search-location justify-content-between">
            <div>
              <span>home location</span>
            </div>
          <Form className="d-flex search-area">
            <InputGroup className="p-0">
            <FloatingLabel
              controlId="floatingInput"
              label="Weather in ..."
              className="m-0"
            >
        <FormControl type="text" value={selectedCity} onChange={e => setSelectedCity(e.target.value)} placeholder="Search" className="m-0" />
        </FloatingLabel>
        <InputGroup.Text >
        <i className="bi bi-geo-alt-fill"></i>
        </InputGroup.Text>
            </InputGroup>
        </Form>

          </Row>
          <Row>
          <Col className="p-0">
        {currentWeather.length === 1 && (currentWeather.map(weather =>
        
          <Container id="weather-container" className="p-3">
  
              {weather.name && weather.dt && <LocationAndTime location={weather.name} currentTime={weather.dt} /> }
          
            
            <Row className="align-items-center ">
              <Col className="col-6 p-0 d-flex-column border-right">
              <div >
                <WeatherIcon sunrisePreParse={weather.sys.sunrise} sunsetPreParse={weather.sys.sunset} weatherCode={weather.weather[0].id} />
              </div>
              <div className="d-flex-row justify-content-center "><h5 className="font-weight-bold">{weather.weather[0].description}</h5></div>
              <div className="d-flex-row justify-content-center "><h5 className="font-weight-bold">{weather.main.temp}°C</h5></div>
              </Col>
              <Col className="col-6 p-0 d-flex-column ">
             <div id="feels-like-container d-flex-row justify-content-left text-nowrap"><p className="m-0 mt-2 font-weight-bold text-center text-nowrap">Feels Like: {weather.main.feels_like}°C</p></div>
             <Row>
               <Col className="col-6 p-0 pr-1 border-right border-dark">
               <span className="text-nowrap">
                  <img src="/final/thermometer-warmer.svg" width="50px"/>
                  <span className=" font-weight-bold text-center align-middle text-nowrap">Max</span>
               </span>
                <p className="pr-sm-5 pl-2 font-weight-bold text-center text-nowrap">{weather.main.temp_max}°C</p>
               </Col>
               <Col className="col-6 p-0 pl-1">
               <span className="text-nowrap">
                  <span className=" font-weight-bold text-center align-middle text-nowrap">Min</span>
                  <img src="/final/thermometer-colder.svg" width="50px"/>
               </span>
              <p className="font-weight-bold pl-1 text-center text-nowrap">{weather.main.temp_min}°C</p>
               </Col>
             </Row>
             <Row id="wind-row">
                 <Col className="d-flex-row">
               {weather.wind.speed >= 11 ? (
               <span className="text-bottom">
                  <img src="/final/windsock.svg"/>
                  <span className=" font-weight-bold text-center align-bottom text-nowrap">Wind Speed: {weather.wind.speed} m/s</span>
                </span>
               ) : (
                <span className="text-bottom">
                 <img src="/final/windsock-weak.svg" width="50px"/>
                <span className=" font-weight-bold text-center align-bottom text-nowrap">Wind:{weather.wind.speed}m/s</span>
                
                </span>
               ) }
              </Col>               
             </Row>
             </Col>
            </Row>
          </Container>
        
        
        ))

        }
          </Col>
          </Row>

        </Container>



            {/* inner test end */}

          </Col>
          <Col sm={3} className="p-0 m-0 "></Col>
        </Row>

        {/* test end */}

        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)