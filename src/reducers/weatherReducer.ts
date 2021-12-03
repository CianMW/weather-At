import { AnyAction } from "redux"
import { initialState } from "../store"

const weatherReducer = (state = initialState.locations, action: AnyAction) => {
    switch (action.type) {
        case 'SET_CURRENT_LOCATION_WEATHER':
      return {
        ...state,
        current: [action.payload],
      }

      default:
        return state
    }
  }
  
  export default weatherReducer