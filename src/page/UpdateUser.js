import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../comoponent/Input";
import Button from "../comoponent/Button";
import { useDispatch, useSelector } from "react-redux";
import { getUserByID, updateUserData } from "../statemanagement/actions/action";
import * as Yup from "yup";
import { useFormik } from "formik";

const UpdateUser = () => {
  const susscribe = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserByID(id));
  }, [id]);

  const schema = Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(8),
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: userUpdate,
    validationSchema: schema,
    enableReinitialize: true,
  });

  //form submit main function
  function userUpdate(event) {
    if (susscribe) {
      const updateObject = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      const data = { id: id, updateObject: updateObject };
      dispatch(updateUserData(data)); //dispatch update user action.... and call usee api function
    }
  }

  useEffect(() => {
    if (susscribe) {
      setFieldValue("username", susscribe?.username);
      setFieldValue("email", susscribe?.email);
    }
  }, [id, susscribe]);

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
