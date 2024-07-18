import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidenav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationConfig = {
    logo: {
      icon: "/frame.svg",
      text: "Tripit"
    },
    routes: [
      { name: "Home", icon: "/home-icon.svg", path: "/" },
      { name: "All trips", icon: "/all-trips-icon.svg", path: "/trips" },
      { name: "Travels", icon: "/travels-icon.svg", path: "/travels" },
      { name: "Rooms", icon: "/rooms-icon.svg", path: "/rooms" },
      { name: "Transport", icon: "/transport-icon.svg", path: "/transport" },
      { name: "Attractions", icon: "/attractions-icon.svg", path: "/attractions" },
    ],
    support: { name: "Support", icon: "/chat-help.svg", path: "/support" },
    newTrip: { name: "New trip", icon: "/icon.svg", path: "/new-trip" }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-0 left-0 h-full bg-white w-64 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 z-50"
         style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
      {/* Hamburger menu for mobile */}
      <button onClick={toggleMenu} className="lg:hidden absolute top-4 right-4 z-20">
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* Logo */}
      <Link to="/" className="block p-4">
        <div className="flex items-center">
          <img className="w-8 h-8 mr-2" alt="" src={navigationConfig.logo.icon} />
          <span className="text-xl font-bold">{navigationConfig.logo.text}</span>
        </div>
      </Link>

      {/* New trip button */}
      <Link to={navigationConfig.newTrip.path} className="block mx-4 my-6 p-2 bg-blue-500 text-white rounded-lg text-center">
        <div className="flex items-center justify-center">
          <span className="mr-2">{navigationConfig.newTrip.name}</span>
          <img className="w-5 h-5" alt="" src={navigationConfig.newTrip.icon} />
        </div>
      </Link>

      {/* Navigation links */}
      <nav className="mt-8">
        {navigationConfig.routes.map((route, index) => (
          <Link key={index} to={route.path} 
                className={`block px-4 py-2 hover:bg-gray-100 ${location.pathname === route.path ? 'bg-gray-200' : ''}`}>
            <div className="flex items-center">
              <img className="w-5 h-5 mr-3" alt="" src={route.icon} />
              <span>{route.name}</span>
            </div>
          </Link>
        ))}
      </nav>

      {/* Support link */}
      <Link to={navigationConfig.support.path} className="absolute bottom-8 left-4 right-4 px-4 py-2 hover:bg-gray-100">
        <div className="flex items-center">
          <img className="w-5 h-5 mr-3" alt="" src={navigationConfig.support.icon} />
          <span>{navigationConfig.support.name}</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidenav;