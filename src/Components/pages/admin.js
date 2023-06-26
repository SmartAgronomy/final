import React from 'react';
import "./styles/admin.css"
import { useCookies } from "react-cookie";
import useUserAPI from "../useUserApi";
import AddProducts from '../admin-header/addProducts'
const Admin = () => {
  const [cookies] = useCookies(["access_token"]);
  const { isAdmin } = useUserAPI(cookies.access_token);
  return (
    <div>
      {isAdmin ? (
        <>
          <AddProducts />
        </>
      ) : (
        <p>You do not have access to the admin module.</p>
      )}
    </div>
  );
};

export default Admin;