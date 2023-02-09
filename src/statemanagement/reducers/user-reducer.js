
import {
  SET_LOADING,
  GET_USER_LIST,
  ADD_USER,
  DELETE_USER,
  GET_USER_BY_ID,
  UPDATE_USER_DATA,
} from "../actions/constent";

const initialState = {
  users: [],
  user:{},
  updateuser:[],
  status:false
}

  


const userReducer = (state = initialState, action) => {
  
    switch (action.type) {
       
      case GET_USER_LIST: 
        return {
          ...state,
          users:action.payload
        }
      case ADD_USER:
        return {
          ...state,
          users:[...state.users,action.payload]
        }
      case GET_USER_BY_ID:
        return {
          ...state, user:action.payload
        }
      case UPDATE_USER_DATA:
        return {
          ...state,updateuser:[state.updateuser,action.payload]
        }
      
        default:
            return state
    }
}
export default userReducer;
