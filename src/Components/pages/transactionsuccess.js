import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

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
        <div>
          <CircularProgress />
          <p>Please wait while we process your order...</p>
        </div>
      ) : (
        <div>
          <h1>Transaction Successful!</h1>
          <p>Your payment has been processed successfully.</p>
          <Link to="/cart">Back to Cart</Link>
        </div>
      )}
    </div>
  );
}

export default TransactionSuccess;
