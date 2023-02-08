import React from "react";
import Input from "../comoponent/Input";
import Button from "../comoponent/Button";
import { useDispatch } from "react-redux";
import { addUser } from "../statemanagement/actions/action";
import * as Yup from "yup";
import { useFormik } from "formik";

const AddUser = () => {
 /**create yup schema */
  const schema = Yup.object().shape({
    username: Yup.string().required(),
      email: Yup.string().email().required(),
    password:Yup.string().required().min(8)
  });

  /** destructing formik function and  create initialState */
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    isValid,
    values,
    errors,
  } = useFormik({
    initialValues: {
      username: "",
          email: "",
      password:""
    },
    onSubmit: callUserAddApi,
    validationSchema: schema,
  });

  

/**create dispatch for dispatch data for action */
  const dispatch = useDispatch();
  
  const userDataObject = {
    username:values.username,
    email:values.email,
    password:values.password,
  };
  /** main form submit  function */
  function callUserAddApi(){
    
 /**dispatch addUser action */
    dispatch(addUser(userDataObject));
   
    // console.log("add user api called......");
  };
  
  
 

  console.log("userdata object",userDataObject)

 
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
            name="username"
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
            name="email"
          />
          {touched.email && errors.email && (
            <div className="text-red-500">{errors.email}</div>
          )}

          <Input
            placeholder={"input password"}
            required={true}
            type={"password"}
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
          />
          {touched.password && errors.password && (
            <div className="text-red-500">{errors.password}</div>
          )}

          <Button type="submit">add</Button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
