import React from "react";
import "./Navbar.css";

const Navbar = () => {
  // Scroll to section function
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Handle Login button click
  const handleLogin = () => {
    alert('Login functionality coming soon! Please check back later.');
    // You can replace this with actual login modal or redirect
    // Example: window.location.href = '/login';
  };

  // Handle Sign Up button click
  const handleSignUp = () => {
    alert('Sign Up functionality coming soon! Please check back later.');
    // You can replace this with actual signup modal or redirect
    // Example: window.location.href = '/signup';
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
        <img src="/images/logo.png" alt="Ben 10 Logo" />
      </div>

      <ul className="nav-links">
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('hero')}>Aliens</li>
        <li onClick={() => scrollToSection('episodes')}>Episodes</li>
        <li onClick={() => scrollToSection('games')}>Games</li>
        <li onClick={() => alert('About section coming soon!')}>About</li>
      </ul>

      <div className="nav-buttons">
        <button className="btn btn-outline" onClick={handleLogin}>Login</button>
        <button className="btn btn-fill" onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
