import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
     const [listOfPosts, setListOfPosts] = useState([]);
     useEffect(() => {
       axios.get("http://localhost:3001/posts").then((res) => {
         console.log("res", res.data);
         setListOfPosts(res.data);
       });
     }, []);

     const capitalize = (str) =>
       str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
  return (
    <div className="homeContainer">
      {listOfPosts.map((value, key) => {
        return (
          <div className="postCard" key={key}>
            <div className="postHeader">
              <div className="avatar">
                {value.username.charAt(0).toUpperCase()}
              </div>
              <span className="username">{capitalize(value.title)}</span>
            </div>

            <h2 className="postTitle"> {capitalize(value.title)}</h2>
            <p className="postText">{value.postText}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Home