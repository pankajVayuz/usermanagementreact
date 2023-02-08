import axios from "axios";
/**import action constent */
import {
  ADD_USER,
  GET_USER_BY_ID,
  GET_USER_LIST,
  UPDATE_USER_DATA,
} from "./constent";

/**fatch all user data async call action creater */
export const getAllUser = async (dispatch, getState) => {

  const response = await axios.get("http://localhost:9000/admin/v1/users");
  dispatch({ type: GET_USER_LIST, payload: response.data });
};
/**fatch add user data async call action creater */

export const addUser = (userObj) => {
  return (dispatch) => {
    axios
      .post("http://localhost:9000/admin/v1/users/add", userObj)
      .then((response) => {
        dispatch({
          type: ADD_USER,
          payload: response.data,
        });
        alert("user added.........")
        console.log("user add response......",response.data)
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
      .get(`http://localhost:9000/admin/v1/users/${id}`).then((response) => {dispatch({ type: GET_USER_BY_ID, payload: response.data });
  console.log("id res............", response.data);

      })

      .catch((error) => {
        console.log(error);
      });
  };
};

// export const updateUserData = ({id,updateObject}) => {
//   console.log("id............", id,updateObject);
//   return (dispatch) => {
//     axios
//       .patch(`http://localhost:9000/admin/v1/users/update/${id}`,updateObject).then((response) => {
//         dispatch({ type:UPDATE_USER_DATA, payload: response.data});
//       })

//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };