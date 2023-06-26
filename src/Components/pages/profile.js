import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import "./styles/profile.css";
import { Link } from "react-router-dom";
import Header from "../dashboard/header";

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
      <Header />
      <div className="profile-container">
        <div className="profile-heading">
          <h1>Profile Details</h1>
        </div>
        {profileData && (
          <div className="profile-content">

            <div className="profile-details">
              <table>
                {!editMode ? (
                  <tr><td>
                    Name: {profileData.fname} {profileData.lname}
                  </td></tr>

                ) : (<>
                  <tr><td><b>You can edit your Name and mobile number only</b></td></tr>
                  <tr><td> <input
                    className="edit-fname"
                    type="text"
                    name="fname"
                    placeholder="First Name *"
                    value={editedProfileData.fname}
                    onChange={handleInputChange}
                  />      </td></tr>

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
                <tr><td>Email: {profileData.email}</td></tr>

                <br />

                {!editMode ? (
                  <tr><td>Contact No: {profileData.mobile}</td></tr>

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
                <tr><td>Dispatch Location: {profileData.country} {profileData.state}{" "}
                  {profileData.city}</td></tr>

                <br />
                <tr><td>Role: {profileData.role === 1 ? "admin" : "user"}</td></tr>
                <div className="dashboard">
                  {!editMode ? (
                    <button class="update-profile-btn" onClick={handleEditClick}>Update Profile</button>
                  ) : (
                    <>

                      <button className="save-btn" onClick={handleSaveClick}>Save</button>
                      <div className="cancel">
                        <button onClick={() => setEditMode(false)}>Cancel</button>
                      </div>
                    </>
                  )}
                </div>
              </table>
            </div>
            <div className="ppp-img">
              <span class="initial-letter">{getInitialLetter()}</span>
            </div>
            {/* <div className="ppp-img">
                <img src={profile_img} />
              </div> */}
          </div>
        )}

        <Link to="/">
          <div className="profile-bac">
            <h3>&#10094;</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
