import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Input from "../comoponent/Input";
import Button from "../comoponent/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../statemanagement/actions/action";
import * as Yup from "yup";
import { useFormik } from "formik";

const UpdateUser = () => {
  const [updateUserName, setUpdateUserName] = useState();
  const [updateUserEmail, setUpdateUserEmail] = useState();
  const [updatePassword, setUpdatePassword] = useState();
  const [updatedata, setUpdateData] = useState();
  const [userStatus, setUserStates] = useState(false);
        
  const suscribe = useSelector((state) => state.users.user);
  console.log("suscrive...........",suscribe)
  const dispatch = useDispatch();
  const { id } = useParams();
  const length=suscribe.length - 1
       
  // useEffect(() => {
      
  // setUpdateUserName(suscribe[length].username);
  //     setUpdateUserEmail(suscribe[length].email);
  //     setUpdatePassword(suscribe[length].password);
  //     setUpdateData(suscribe);
    


  // }, [])
 
  
  console.log("suscrive user update......",suscribe)
    

    
  const schema = Yup.object().shape({
    username: Yup.string().required(),
      email: Yup.string().email().required(),
    password:Yup.string().required().min(8)
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    isValid,
    values,
    errors,
    setValues
  } = useFormik({
    initialValues: {
      username: "",
          email: "",
      password:""
    },
    onSubmit: userUpdate,
    validationSchema: schema,
  });

  useEffect(() => {
    if (suscribe) {
      setValues("username" ,suscribe[0].username);
      setValues("email",suscribe[length].email);
      

    }

  },[])

  function userUpdate(event){
    
    if (updatedata) {
      const updateObject = {
        id: updatedata._id,
        username: updateUserName,
        email: updateUserEmail,
        password: updatePassword,
        status: updatedata.status,
      };

    
    }
  };

  return (
    <>
      <div className="flex flex-col w-min-full h-min-full mt-12 ">
        <form
          onSubmit={handleSubmit}
          autoComplete="on"
          className="flex flex-col gap-3 items-center justify-center"
        >
          <Input
            placeholder={"input user name"}
            type={"text"}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            name={"username"}
            value={values.username}
            
          />
          <Input
            placeholder={"input email"}
            type={"email"}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            name={"email"}
            value={values.email}
            
            
          />

          <Input
            placeholder={"password"}
            required={true}
            type={"password"}
            onChange={handleChange}
            onBlur={handleBlur}
            name={"password"}
          />
        </form>
      </div>
    </>
  );
};

export default UpdateUser;
