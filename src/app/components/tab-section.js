import React, { useState } from "react";
import "./../style/tab-section.css";
import PhoneImg from './../../assets/mbl_img.png';
import MultiAppImg from './../../assets/multi-app-kiosk-image.webp';
import WebImg from './../../assets/web-based-kiosk-image.webp';
import DigitalSignImg from './../../assets/digital-signage-kiosk-image.webp';
import AsamImg from './../../assets/asam-kiosk-image.webp';

const tabsData = [
  {
    id: "tab1",
    title: "Single App Kiosk",
    description: "Powerful Single-App Kiosk solutions for enhanced control",
    features: [
      "Provision the devices to run one specialized application, with limited functionalities.",
      "Customize the device settings to cater to a specific use-case each time.",
      "Use advanced kiosk settings for restrictions or expanded functionalities while in kiosk mode.",
      "Empower administrators with full control over the kiosk devices.",
    ],
    image: PhoneImg, 
  },
  {
    id: "tab2",
    title: "Multi-App Kiosk",
    description: "Manage multiple apps effectively in a kiosk mode",
    features: [
      "Allow running multiple apps in the kiosk environment.",
      "Customize which apps are accessible in the mode.",
      "Enhanced admin control and security.",
    ],
    image: MultiAppImg, 
  },
  {
    id: "tab3",
    title: "Web-based Kiosk",
    description: "Simplify control with a web-based kiosk mode",
    features: [
      "Run web-based applications securely.",
      "Restrict access to specific URLs or domains.",
      "Enhanced security for browsing.",
    ],
    image: WebImg, 
  },
  {
    id: "tab4",
    title: "Digital Signages",
    description: "Control your digital signages seamlessly",
    features: [
      "Run static or dynamic content on digital signages.",
      "Simplify display management with pre-set configurations.",
      "Support for a wide range of content formats.",
    ],
    image: DigitalSignImg, 
  },
  {
    id: "tab5",
    title: "ASAM Kiosk",
    description: "Enable advanced security with ASAM kiosk",
    features: [
      "Advanced security features for ASAM-enabled environments.",
      "Customizable settings for maximum efficiency.",
    ],
    image: AsamImg, 
  },
];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="App">
      <section className="tabs-section">
        <p className="f-14 p-4">Specific kiosk modes for unique use cases</p>
        <div className="tabs">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tabsData
            .filter((tab) => tab.id === activeTab)
            .map((tab) => (
              <div key={tab.id}>
                <div className="flex items-start gap-10">
                  {/* Description and Features */}
                  <div className="w-full md:w-1/2">
                    <p className="f-12">{tab.description}</p>
                    <ul>
                      {tab.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M16.972 6.251a2 2 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default TabSection;

