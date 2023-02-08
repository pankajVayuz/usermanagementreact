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
  
        
  const suscribe = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  // const length = suscribe.length-1
       

      
 
  
  const singalUser = suscribe.filter((find)=>find._id===id)
  
  
  const userName = singalUser[0].username;
  const userEmail = singalUser[0].email;
  
  console.log("singal user......",singalUser)
  
    

    
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
      username:userName,
          email:userEmail,
      password:""
    },
    onSubmit: userUpdate,
    validationSchema: schema,
  });

  // useEffect(() => {
  //   if (suscribe) {
      // setValues("username" ,"myname");
      // setValues("email","myEmail");
      

  //   }

  // },[])

  function userUpdate(event){
    
    if (suscribe) {
      const updateObject = {
        username:values.username,
        email:values.email,
        password:values.password,
      };

      const data= {id:id,updateObject:updateObject}
      dispatch(updateUserData(data))
      
      console.log("user object update user..........",updateObject)
    
    }
  };

  userUpdate()

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
          {touched.username && errors.username && (
            <div className="text-red-500">{errors.username}</div>
          )}
          <Input
            placeholder={"input email"}
            type={"email"}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            name={"email"}
            value={values.email}
            
            
          />
          {touched.email && errors.email && (
            <div className="text-red-500">{errors.email}</div>
          )}

          <Input
            placeholder={"password"}
            required={true}
            type={"password"}
            onChange={handleChange}
            onBlur={handleBlur}
            name={"password"}
          />
          {touched.password && errors.password && (
            <div className="text-red-500">{errors.password}</div>
          )}

          <Button>update</Button>
        </form>
      </div>
    </>
  );
};

export default UpdateUser;
