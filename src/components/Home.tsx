import { useEffect, useState } from "react"
import ReduxStore from "../types/ReduxStore"
import { Action } from "redux"
import { connect } from 'react-redux'
import { getWeatherForecastAction, setCurrentCoordinatesAction, setCurrentLocationAction } from "../actions"
import { IDailyForecast, IForecast, IFullForecast, IFutureForecastArray } from "../types/weather"
import {  ThunkDispatch } from "redux-thunk"
import {Button, Container, Row, Col, FormControl, Form, InputGroup, FloatingLabel} from "react-bootstrap"
import WeatherIcon from "./WeatherIcon"
import LocationAndTime from "./LocationAndTime"
import DateAndDay from "./DateAndDay"
import { ICoordinateObject, ICoordinates } from "../types/ActionInterfaces"


interface IHomeProps {
  currentWeather: IForecast[]
  currentCity: string;
  weekForecast: IFullForecast[];
  coordinates: ICoordinates;
  getWeatherForecast: (c:string|null, x:ICoordinates|null) => void
  setCurrentLocation: (c:string) => void
  setCurrentCoordinates: (c:ICoordinateObject) => void
}



const mapStateToProps = (state: ReduxStore) => ({
    currentWeather: state.weather.current,
   currentCity: state.locations.currentCity,
   coordinates: state.locations.coordinates,
   weekForecast: state.weather.forecast
  })

const mapDispatchToProps = (dispatch: ThunkDispatch<Action, any , any>) => ({
    getWeatherForecast: (city:string|null, coordinates:ICoordinates|null ) => {
      dispatch(getWeatherForecastAction(city, coordinates))
    },
    setCurrentLocation: (city:string ) => {
      dispatch(setCurrentLocationAction(city))
    },
    setCurrentCoordinates: (coordinates:ICoordinateObject ) => {
      dispatch(setCurrentCoordinatesAction(coordinates))
    },
  })

  
  const Home = ({currentWeather, currentCity, getWeatherForecast, setCurrentLocation, setCurrentCoordinates, coordinates, weekForecast}:IHomeProps )=> {
    const [selectedCity, setSelectedCity] = useState<string | []>(currentCity);
    
    // const getWeather = async () => {
      //     getWeatherForecast(selectedCity as any)
      
      //     console.log(currentWeather)
      
      //   } 
      
    useEffect(() => {
      getWeatherForecast(null, coordinates)
  }, [coordinates])

    useEffect(() => {
      getWeatherForecast(currentCity, null)
  }, [currentCity])
    


    useEffect(() => {
      if (selectedCity.length > 3){
        setCurrentLocation(selectedCity as any)

      }
       
    }, [selectedCity])

    const getLocation = () => {

      if (navigator.geolocation) {
       navigator.geolocation.watchPosition(
         (position: any) => {
           console.log("THE COORDINATES",position.coords.longitude);
           let coordinates = {
             coordinates:{
               longitude: position.coords.longitude,
               latitude: position.coords.latitude
             }
           }
           setCurrentCoordinates(coordinates)
         }
       )
    }
   }

    return(
        <Container fluid className="m-0 p-3 p-sm-0">

        {/* test start */}
        <Row>
          <Col sm={2} className="p-0 m-0"></Col>
          <Col sm={8} id="weather-column" className="col-12 px-lg-5 p-0 m-0">
            {/* inner test */}

        <Container className="my-3 rounded Main-forecast p-4">
          <Row className="search-location justify-content-between">

          <Form className="d-flex search-area">
            <InputGroup className="p-0">
            <FloatingLabel
              controlId="floatingInput"
              label="Weather in ..."
              className="m-0"
              >
        <FormControl  type="text" value={selectedCity} onChange={e => setSelectedCity(e.target.value)} placeholder="Search" className="m-0" />
        </FloatingLabel>
        <InputGroup.Text onClick={getLocation}>
        <i className="bi bi-geo-alt-fill"></i>
        </InputGroup.Text>
            </InputGroup>
        </Form>

          </Row>
          <Row>
          <Col className="p-0">
        {currentWeather.length === 1 && (currentWeather.map(weather =>
        
        <Container id="weather-container" className="p-3">
            <Row>
              <h3 className="fw-bold">Current Weather</h3>
            </Row>
  
              {weather.name && weather.dt && <LocationAndTime location={weather.name} currentTime={weather.dt} /> }
          
            
            <Row className="align-items-center ">
              <Col className="col-6 p-0 d-flex-column border-end border-dark border-1">
              <div >
                <WeatherIcon sunrisePreParse={weather.sys.sunrise} sunsetPreParse={weather.sys.sunset} weatherCode={weather.weather[0].id} />
              </div>
              <div className="d-flex-row justify-content-center "><h5 className="fw-bold">{weather.weather[0].description}</h5></div>
              <div className="d-flex-row justify-content-center "><h5 className="fw-bold">{Math.round(weather.main.temp)}°C</h5></div>
              </Col>
              <Col className="col-6 p-0 d-flex-column ">
             <div id="feels-like-container d-flex-row justify-content-left text-nowrap"><p className="m-0 mt-2 fw-bold text-center text-nowrap">Feels Like: {Math.round(weather.main.feels_like)}°C</p></div>
             <Row>
               <Col className="col-6 p-0 pr-1 border-end border-1 border-dark">
               <span className="text-nowrap">
                  <img src="/final/thermometer-warmer.svg" width="50px"/>
                  <span className=" fw-bold text-center align-middle text-nowrap">Max</span>
               </span>
                <p className="pr-sm-5 pl-2 fw-bold text-center text-nowrap">{Math.round(weather.main.temp_max)}°C</p>
               </Col>
               <Col className="col-6 p-0 pl-1">
               <span className="text-nowrap">
                  <span className=" fw-bold text-center align-middle text-nowrap">Min</span>
                  <img src="/final/thermometer-colder.svg" width="50px"/>
               </span>
              <p className="fw-bold pl-1 text-center text-nowrap">{Math.round(weather.main.temp_min)}°C</p>
               </Col>
             </Row>
             <Row id="wind-row">
                 <Col className="d-flex-row">
               {weather.wind.speed >= 11 ? (
                 <span className="text-bottom">
                  <img src="/final/windsock.svg"/>
                  <span className=" fw-bold text-center align-bottom text-nowrap">Wind Speed: {weather.wind.speed} m/s</span>
                </span>
               ) : (
                 <span className="text-bottom">
                 <img src="/final/windsock-weak.svg" width="50px"/>
                <span className=" fw-bold text-center align-bottom text-nowrap">Wind:{weather.wind.speed}m/s</span>
                
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

        {/* Current Weather end */}



        {
          console.log("WEEKLY FORECAST",weekForecast)
          
        }
        {
          weekForecast.length === 1 && weekForecast.map(forecast => 
            <Container key="single-container" id="forecast-container" className="m-0 p-0">
              <Row>
                <Col className="col-3 p-0 m-0"></Col>
                <Col className="col-6 p-0 m-0">
          <span className="fw-bold align-center main-title text-nowrap">Daily Forecast</span>

                </Col>
                <Col className="col-3 p-0 m-0"></Col>
              </Row>
              <Row className="p-0 m-0 justify-content-center">
                {forecast.daily.map( day => 
                <Row style={{backgroundColor: "#ADD8E6"}} key={Math.random()} className="align-items-center rounded p-0 m-0 mb-2 day-container">
                  <Col className="col-3 m-0 p-0 day-forecast">
                  <DateAndDay time={day.dt} />
                  </Col>
                  <Col className="col-2 p-0 day-forecast">
                   <WeatherIcon sunrisePreParse={day.sunrise} sunsetPreParse={day.sunset} daily={true} weatherCode={day.weather[0].id} />
                  </Col>
                  <Col className="col-4 m-0 p-0 day-forecast">
                   <p className="m-0 fw-bold text-nowrap">{day.weather[0].description}</p>
                  </Col>
                  <Col className="col-3 m-0 p-0 day-forecast">
                  <div><span className="fw-bolder">{Math.round(day.temp.max)}°C 
                  <span className="fw-light"> / </span>
                  </span>
                  <span className="fw-light">
                    {Math.round(day.temp.min)}°C
                    </span>
                  </div>
                  </Col>
                </Row>
                )}
              </Row>

            </Container>

)
}
        {/* Weather week forecast  */}
            {/* inner test end */}

          </Col>
          <Col sm={2} className="p-0 m-0 "></Col>
        </Row>

        {/* test end */}

        </Container>
    )
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)