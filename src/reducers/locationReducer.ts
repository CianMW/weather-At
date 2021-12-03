import { AnyAction } from "redux"
import { initialState } from "../store"

const locationReducer = (state = initialState.locations, action: AnyAction) => {
    switch (action.type) {
        case 'SET_CURRENT_LOCATION':
      return {
        ...state,
        currentCity: action.payload,
      }
      default:
        return state
    }
  }
  
  export default locationReducer