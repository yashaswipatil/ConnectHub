import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./CreatePost.css";

function CreatePost() {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    postText: Yup.string().required("Post text is required"),
    username: Yup.string().required("Username is required"),
  });

  const onSubmit = (data, { resetForm }) => {
    axios
      .post("http://localhost:3001/posts", data)
      .then(() => {
        alert("Post created successfully!");
        resetForm();
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="formContainer">
          <label>Title:</label>
          <Field name="title" placeholder="Enter title" />
          <ErrorMessage name="title" component="span" className="error" />

          <label>Post:</label>
          <Field
            as="textarea"
            name="postText"
            placeholder="Write your post..."
          />
          <ErrorMessage name="postText" component="span" className="error" />

          <label>Username:</label>
          <Field name="username" placeholder="Your username" />
          <ErrorMessage name="username" component="span" className="error" />

          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
