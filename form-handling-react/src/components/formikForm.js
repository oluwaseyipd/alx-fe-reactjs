import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik form submitted:", values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {() => (
        <Form className="max-w-sm mx-auto p-4 border rounded">
          <h2 className="text-xl font-bold mb-4">User Registration (Formik)</h2>

          <div className="mb-3">
            <label className="block">Username</label>
            <Field type="text" name="username" className="w-full border px-2 py-1 rounded" />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="mb-3">
            <label className="block">Email</label>
            <Field type="email" name="email" className="w-full border px-2 py-1 rounded" />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="mb-3">
            <label className="block">Password</label>
            <Field type="password" name="password" className="w-full border px-2 py-1 rounded" />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
