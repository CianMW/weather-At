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
        <Button onClick={() => console.log(currentCity)}>Click here</Button>
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
        
          <Container className=" p-3">
            
            <Row className="align-items-center">
              <Col sm={3}>
              <Col sm={6} md={2} className="d-flex-column">
              <div ><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/></div>

              <div className="d-flex"><h5>{weather.weather[0].description}</h5></div>
              </Col>
              <Col sm={6} md={6} className="d-flex"><span className="mr-2">now:</span><h3>{weather.main.temp}°C</h3></Col>
                 </Col>
                 <Col sm={6} md={4}>
              <div className="wrapping-temperature">
              <div className="d-flex-column">
              <Col className=" d-flex justify-content-between temperatures bordered">
              <div><h5>Real Feal :</h5></div>
              <div>{weather.main.feels_like}°C</div>
              </Col>
              </div>
              <Col className="d-flex justify-content-between temperatures bordered">
              <div><h5>High/Low: </h5></div>
              <div>{weather.main.temp_max}/{weather.main.temp_min}</div>
              </Col>
              <Col className="d-flex justify-content-between temperatures bordered">
              <div><h5>Current Humidity: </h5></div>
              <div>{weather.main.humidity}%</div>
              </Col>
              </div>
              </Col > 
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