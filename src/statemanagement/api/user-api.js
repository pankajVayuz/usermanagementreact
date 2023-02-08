import axios from "axios";


export const  getAllUsers = async () => {
    console.log("getUserlist called....");
   
   const data = await axios.get('http://localhost:9000/admin/v1/users');
   return data.data;

}