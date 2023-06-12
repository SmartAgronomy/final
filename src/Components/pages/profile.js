
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import "./styles/profile.css";
import { Link } from "react-router-dom";
import profile_backTo_Home from "../Images/profile-backTo-Home.png";

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
  });
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

  const handleEditClick = () => {
    setEditMode(true);
    setEditedProfileData({
      fname: profileData.fname,
      lname: profileData.lname,
      mobile: profileData.mobile,
      email: profileData.email,
    });
  };

  const handleSaveClick = async () => {
    try {
      const token = cookies.access_token;
      const response = await axios.put(
        "http://localhost:8080/api/updateProfile",
        editedProfileData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfileData(response.data);
      setEditMode(false);
       alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setEditedProfileData({
      ...editedProfileData,
      [e.target.name]: e.target.value,
    });
  };

  const getInitialLetter = () => {
    if (profileData && profileData.email) {
      return profileData.email.charAt(0).toUpperCase();
    }
    return "";
  };

  return (
    <div className="profile">
      <div className="container">
        <div className="profile-container">
        <div className="profile-heading">
        <h1>Manage your Account</h1>
      </div>
          {profileData && (
            <div className="profile-content">
              
              <div className="profile-details">
                {!editMode ? (
                  <h6>
                    {profileData.fname} {profileData.lname}
                  </h6>
                ) : (<>
                <p className="edit-para">You can edit your firstname, lastname and mobile number only.</p>
                  
                  <input
                  className="edit-fname"
                    type="text"
                    name="fname"
                    placeholder="First Name *"
                    value={editedProfileData.fname}
                    onChange={handleInputChange}
                  />             
                  </>
                )}
                   {!editMode ? (
                  <h6>
                    
                  </h6>
                ) : (                  
                  <input
                  className="edit-lname"
                  placeholder="Last Name *"
                  type="text"
                  name="lname"
                  value={editedProfileData.lname}
                  onChange={handleInputChange}
                />
                                
                )}
                <span>{profileData.email}</span>
                <br />
                
                {!editMode ? (
                  <span>Contact No: {profileData.mobile}</span>
                ) : (
                  <input
                  className="edit-mobile"
                    type="text"
                    placeholder="Mobile no *"
                    name="mobile"
                    value={editedProfileData.mobile}
                    onChange={handleInputChange}
                  />
                )}
                <br />
                <span>
                  Dispatch Location: {profileData.country} {profileData.state}{" "}
                  {profileData.city}
                </span>
                <br />
                <span>Role: {profileData.role === 1 ? "admin" : "user"}</span>

                <div className="dashboard">
                  {!editMode ? (
                    <button class="update-profile-btn"onClick={handleEditClick}>Update Profile</button>
                  ) : (
                    <>
                    
                      <button className="save-btn" onClick={handleSaveClick}>Save</button>
                      <div className="cancel">
                      <button onClick={() => setEditMode(false)}>Cancel</button>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="profile-img">
                <span>{getInitialLetter()}</span>
              </div>
            </div>
          )}
        </div>
        <Link to="/">
          <div className="profile-bac">
            <img class="profile_backTo_Home" src={profile_backTo_Home} />
            <big>Back</big>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
