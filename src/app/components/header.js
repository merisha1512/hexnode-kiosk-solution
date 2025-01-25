import React, {useState} from 'react';
import { Link } from 'react-router-dom'; 
import './../style/header.css';
import TrialModal from './modals/trial'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <Link to="/home" className="logo">
        hexnode
      </Link>
      <button className="trial-button" onClick={openModal}>14 DAY FREE TRIAL</button>
      {isModalOpen && <TrialModal closeModal={closeModal} />}
    </header>
  );
};

export default Header;
