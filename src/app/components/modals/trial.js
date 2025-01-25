import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./trial.css";

const TrialModal = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGetStarted = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    setError("Please enter a valid email address.");
  } else {
    setError("");
    navigate("/signup", { state: { email } }); 
  }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <h2>Start your free 14-day trial</h2>
        <input
          type="email"
          placeholder="Your work email"
          value={email}
          onChange={handleEmailChange}
          className="email-input"
        />
        {error && <p className="error-message">{error}</p>}
        <button className="cta-button" onClick={handleGetStarted}>
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default TrialModal;
