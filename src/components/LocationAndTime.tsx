import { Col, Row } from "react-bootstrap"

interface IProps {
    location: string;
    currentTime: number;
}

const LocationAndTime = ({location, currentTime}:IProps) => {
let sec = currentTime;
let date = new Date(sec * 1000)
let currentDate = new Date(sec * 1000).toISOString().split("T")[0]
let timestr = date.toLocaleTimeString("en-GB").split(":");

//TODO: Change to OpenWeather one call and use local time string
    return(   
        <Row className="justify-content-between">
        {console.log("THE DATE:", date)}
        <Col className="col-4 ">
        <span className="font-weight-bold border-bottom border-dark">{location}      </span>
        </Col>
        <Col className="col-4 border-bottom ">
        <span className="font-weight-bold border-bottom border-dark">{timestr[0]}:{timestr[1]}   </span>
        </Col>
        <Col className="col-4 ">
        <span className="font-weight-bold text-nowrap border-bottom border-dark">{currentDate}</span>
        </Col>
        </Row>
        
    )
}

export default LocationAndTime