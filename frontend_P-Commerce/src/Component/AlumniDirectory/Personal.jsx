import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import "./Personal.css";
import Navbar from "../Home/Navbar"

export default function Personal() {
  const { _id } = useParams();
  const apiUrl = `http://localhost:7000/products/{_id}`;

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        const allUsers = response.data.data;
        const user = allUsers.find((u) => u._id === _id);

        if (user) {
          setUserData(user);
        } else {
          setError(new Error("User not found"));
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [_id, apiUrl]);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <CircularProgress size={30} color="info" />
          <p style={{color:"#555"}}>Loading ! Please Wait</p>
        </div>
      ) : error ? (
        <p className="error-message">Error: {error.message}</p>
      ) : userData ? (
        <div className="person">
          <Navbar />
          <div className="user-card">
            <div className="img-div">
              <img
                src="https://th.bing.com/th/id/OIP.eXWcaYbEtO2uuexHM8sAwwHaHa?pid=ImgDet&rs=1"
                className="personal-image"
                alt="person"
              />
            </div>
            <h2 className="user-name">Name : {userData.name}</h2>
            <p className="user-email">Email : {userData.email}</p>
            <p className="user-info">Phone : {userData.mobile}</p>
            <p className="user-info"><a href={userData.linkedin}  style={{color:"#555"}}>LinkedIn : {userData.linkedin}</a></p>
            <p className="user-info">Degree: {userData.degree}</p>
            <p className="user-info">Profession : {userData.profession}</p>
            <p className="user-info">Designation : {userData.designation}</p>
            <p className="user-info">City : {userData.city}</p>
            <p className="user-info">State: {userData.state}</p>            
          </div>
        </div>
      ) : (
        <p className="error-message">User not found</p>
      )}
    </div>
  );
}
