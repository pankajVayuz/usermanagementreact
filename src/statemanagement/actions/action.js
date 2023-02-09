import axios from "axios";
/**import action constent */
import {
  ADD_USER,
  GET_USER_BY_ID,
  GET_USER_LIST,
  UPDATE_USER_DATA,
} from "./constent";

/**fatch add user data async call action creater */

export const getAllUser = (dispatch) => {
  axios
    .get("https://usermangement.onrender.com/admin/v1/users")
    .then((res) => {
      dispatch({
        type: GET_USER_LIST,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addUser = (userObj) => {
  return (dispatch) => {
    axios
      .post("https://usermangement.onrender.com/admin/v1/users/add", userObj)
      .then((response) => {
        dispatch({
          type: ADD_USER,
          payload: response.data,
        });
        alert("user added.........");
     
      })

      .catch((error) => {
        console.log(error);
      });
  };
};
/**fatch singal user data by id async call action creater */

export const getUserByID = (id) => {
  return (dispatch) => {
    axios
      .get(`https://usermangement.onrender.com/admin/v1/users/${id}`)
      .then((response) => {
        dispatch({ type: GET_USER_BY_ID, payload: response.data });
      })

      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateUserData = ({ id, updateObject }) => {
  console.log("action  page......id  update data", id, updateObject);
  return (dispatch) => {
    axios
      .patch(`https://usermangement.onrender.com/admin/v1/users/update/${id}`, updateObject)
      .then((response) => {
        dispatch({ type: UPDATE_USER_DATA, payload: response.data });
        alert("update success....")
      })

      .catch((error) => {
        console.log(error);
      });
  };
};
