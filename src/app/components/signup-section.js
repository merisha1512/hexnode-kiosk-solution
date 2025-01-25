import React, {useState} from 'react';
import './../style/footer.css';
import { useNavigate } from "react-router-dom";

const SignUpSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      navigate("/signup", { state: { email } });
    }
  }
  return (
    <div className="signup-section px-6">
      <div className="container text-center">
        <h1 className="signup-title">
          Sign up and try Hexnode free for 14 days!
        </h1>
        <div className="signup-form">
          <input
            type="email"
            placeholder="Your Work Email"
            className="form-control email-input"
          />
          <button className="trial-button" onClick={handleClick}>
            GET STARTED
          </button>
        </div>
        <p className="subtext">
          No credit cards required. <a href="#" className="request-demo">Request a demo</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpSection;
