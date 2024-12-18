import React from 'react';

function WelcomeMessage() {
  const userName = "Brijesh";
  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <p>Welcome to the React JSX tutorial.</p>
    </div>
  );
}

export default WelcomeMessage;