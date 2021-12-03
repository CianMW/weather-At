import { AnyAction } from "redux"
import { initialState } from "../store"

const locationReducer = (state = initialState.locations, action: AnyAction) => {
    switch (action.type) {
      default:
        return state
    }
  }
  
  export default locationReducer