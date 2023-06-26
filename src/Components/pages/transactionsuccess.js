import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import "../pages/styles/transactionSuccess.css"

function TransactionSuccess() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="centered-container">
      {loading ? (
        <div className="order-processing">
          <CircularProgress sx={{ ml: '45%' }} />
          <p>Please wait while we processing your order...</p>
        </div>
      ) : (
        <div className="order-confirmed">
          <h2>Transaction Successful!</h2>
          <p>Your payment has been processed successfully.</p>
          Thank you for Your order..!<br></br><br></br>
          <Link to="/cart"><span>OK</span></Link>
        </div>
      )}
    </div>
  );
}

export default TransactionSuccess;
