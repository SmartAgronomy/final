import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import "./styles/profile.css" 
import { Link } from "react-router-dom";
import profile_backTo_Home from "../Images/profile-backTo-Home.png"

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [cookies] = useCookies(["access_token"]);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const token = cookies.access_token; // Retrieve the JWT token from cookies
      const response = await axios.get("http://localhost:8080/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfileData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getInitialLetter = () => {
    if (profileData && profileData.email) {
      return profileData.email.charAt(0).toUpperCase();
    }
    return "";
  };

  return (
    <div className="profile">
    <div className="profile-heading">
    <h1>Manage your Account</h1>
    
    </div>
    <div class="container">
      <div className="profile-container">
        {profileData && (
          <div className="profile-content">
            
            <div className="profile-details">
              <h6>{profileData.fname} {profileData.lname}</h6>
              <span>{profileData.email}</span><br/>
              <span>Contact No: {profileData.mobile}</span><br/>
              <span>Dispatch Location: {profileData.country} {profileData.state} {profileData.city}</span><br/>
              <span>Role: {profileData.role}</span>
              <div className="dashboard">
              <Link to="/"><button>Update Profile</button></Link>
              </div>
            </div>
            <div className="profile-img">
              <span>{getInitialLetter()}</span>
            </div>
          </div>
         
        )}
      </div>
      <Link to="/"><div className="profile-bac">
      <img class="profile_backTo_Home" src={profile_backTo_Home} /><big>Back</big>
      </div>
      </Link>
      </div>
    </div>
  );
}

export default Profile;
