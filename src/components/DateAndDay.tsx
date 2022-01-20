

import { Col, Row } from "react-bootstrap"

interface IProps {
    time: number;
}

const DateAndDay = ({time}:IProps) => {
let sec = time;
let date = new Date(sec * 1000)
let currentDate = new Date(sec * 1000).toISOString()
let timestr = date.toLocaleTimeString("en-GB");

let utcTime = date.toUTCString().split(" ")

//TODO: Change to OpenWeather one call and use local time string
    return(   
        <div>
        <p className="m-0">
            {utcTime[0].split(",")[0]}
        </p>
        <span>
            {utcTime[1]} / {utcTime[2]}
        </span>

        </div>
    )
}

export default DateAndDay