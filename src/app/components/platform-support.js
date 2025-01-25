import React from "react";
import "./../style/platform-support.css"; 
import AndroidImg from './../../assets/android.svg';
import WindowsImg from './../../assets/windows.svg';
import IosImg from './../../assets/ios.svg';
import AndroidTvImg from './../../assets/android-tv.svg';
import AppleTvImg from './../../assets/apple-tv.svg';
import AmazonFireImg from './../../assets/amazon-fire.webp';

const PlatformsSupported = () => {
  return (
    <div className="platforms-container">
      <h2 className="heading">Platforms supported</h2>
      <div className="platform-cards-container">
        {/* Platform Cards */}
        <div className="platform-card">
          <img
            src={AndroidImg}
            alt="Android"
          />
        </div>
        <div className="platform-card">
          <img
            src={WindowsImg}
            alt="Windows"
          />
        </div>
        <div className="platform-card">
        <img
            src={IosImg}
            alt="Android TV"
          />
        </div>
        <div className="platform-card">
          <img
            src={AppleTvImg}
            alt="Android TV"
          />
        </div>
        <div className="platform-card">
          <img
            src={AppleTvImg}
            alt="Apple TV"
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformsSupported;
