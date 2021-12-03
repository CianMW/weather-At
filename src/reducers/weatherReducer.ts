import { AnyAction } from "redux"
import { initialState } from "../store"

const weatherReducer = (state = initialState.locations, action: AnyAction) => {
    switch (action.type) {
      default:
        return state
    }
  }
  
  export default weatherReducer