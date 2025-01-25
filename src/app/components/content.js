import React, { useState, useEffect } from 'react';
import deploymentImg from '../../assets/effortless-kiosk-deployement-image.webp';
import customImg from '../../assets/customized-interface-image.webp';
import powerUpImg from '../../assets/power-up-protection-image.webp'
import secureApppImg from '../../assets/secure-app-ecosystem.webp'
import interfaceImg from '../../assets/easy-to-use-interface-image.webp';
import JustinModrak from '../../assets/images/people/justin-modrak.webp';
import DaliborKurjac from '../../assets/images/people/dalibor-kruljac.webp';
import chrisRobinson from '../../assets/images/people/chris-robinson.webp'

const Content = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const items = [
    { heading: "Effortless kiosk deployment & management", description: "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.", link: "/item1", image: deploymentImg },
    { heading: "Customized interface for brand visibility", description: "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.", link: "/item2", image: customImg },
    { heading: "What more can you do with Hexnode kiosk?", description: "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.", link: "/item3", image: powerUpImg },
    { heading: "Secure and update your app ecosystem", description: "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.", link: "/item3", image: secureApppImg },
    {
      heading: "Provide an easy-to-use interface for end-users",
      description: "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.", link: "/item3", image: interfaceImg
    },
  ];

  const testimonials = [
    {
      image: JustinModrak,
      quote:
        "Hexonode is of great value. Works great with Android and iOS!",
      name: "Justin Modrak",
      company: "Tecnology Coordinator, East Troy Community School District",
    },
    {
      image: DaliborKurjac,
      quote:
        "It seemed to be in-line with everything we were looking at",
      name: "Dalibor Kruljac",
      company: "KAMELEYA LTD",
    },
    {
      image: chrisRobinson,
      quote:
        "It seemed to be in-line with everything we were looking at",
      name: "Chris Robinson",
      company: "Executive Account Manager, NCS",
    }
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 500); // Duration of the slide animation
  };

  const slidePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500); // Duration of the slide animation
  };

  return (
    <div>
      <div className='p-[50px]'>
        <div>
          <p className='text-center f-14 p-4'>What additional possibilities does the <br /> Kiosk mode offer?</p>
        </div>
        <div className='flex gap-5 mt-2'>
          <div className='flex-1 p-2'>
            <img src={deploymentImg} className='w-full h-auto rounded' style={{ padding: '10px' }} />
          </div>
          <div className='flex-1'>
            {items.map((item, index) => (
              <div key={index} className='p-4'>
                <p className='f-25 cursor-pointer' onClick={() => handleClick(index)} >{item.heading}</p>
                {activeIndex === index && (
                  <div className='mt-4'>
                    <p className='f-20'>{item.description}</p>
                    <a href={item.link}>Try for new</a>
                  </div>
                )}
                <hr className='my-5' />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-8 bg-gray-100 overflow-hidden">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Why should you choose Hexnode?
        </h2>
        <div className="relative flex items-center justify-center w-full max-w-4xl">
          {/* Left Arrow */}
          {/* <button
            onClick={slidePrev}
            className="absolute left-0 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
          </button> */}

          {/* Testimonial Content */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map(({ image, quote, name, company }, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  {/* Text Content */}
                  <div className="w-full md:w-1/2 p-6 text-center md:text-left">
                    <p className="text-lg font-semibold italic text-gray-700 mb-4">
                      "{quote}"
                    </p>
                    <p className="text-base font-bold text-gray-900">{name}</p>
                    <p className="text-sm text-gray-600">{company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {/* <button
            onClick={slideNext}
            className="absolute right-0 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button> */}
        </div>
      </div>

    </div>
  );
};

export default Content;
