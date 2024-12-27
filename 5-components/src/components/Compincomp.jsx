import React from 'react';

// Header Component
const Header = () => {
  return <h1>Welcome to My Website</h1>;
};

// Content Component
const Content = () => {
  return <p>This is the main content of the website.</p>;
};

// Footer Component
const Footer = () => {
  return <p>&copy; 2024 My Website</p>;
};

// Main Component that includes Header, Content, and Footer
const CompInComp = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default CompInComp;
