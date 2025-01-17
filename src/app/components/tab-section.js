import React, { useState } from "react";
import "./../style/tab-section.css";

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
    image: "phone-image.png", // Replace with the correct path to the image
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
    image: "multi-app.png", // Replace with the correct path to the image
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
    image: "web-kiosk.png", // Replace with the correct path to the image
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
    image: "digital-signages.png", // Replace with the correct path to the image
  },
  {
    id: "tab5",
    title: "ASAM Kiosk",
    description: "Enable advanced security with ASAM kiosk",
    features: [
      "Advanced security features for ASAM-enabled environments.",
      "Customizable settings for maximum efficiency.",
    ],
    image: "asam-kiosk.png", // Replace with the correct path to the image
  },
];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="App">
      <section className="tabs-section">
        <h2>Specific kiosk modes for unique use cases</h2>
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
                <h3>{tab.description}</h3>
                <ul>
                  {tab.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <img src={tab.image} alt={tab.title} />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default TabSection;

