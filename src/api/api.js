import axios from 'axios';


export const getUserList = async () => {
     console.log("getUserlist called....");
    
    const data = await axios.get('http://localhost:9000/admin/v1/users');
    return data.data;

}

export const createUser = (userobject) => {

    console.log("user object data at create user api ", userobject);
    const options = {
      headers: { "Content-Type": "application/json" },
    };
    return axios
      .post(
        "http://localhost:9000/admin/v1/users/add",
        userobject,
        options
      )
      .then((res) => res.data);
  };