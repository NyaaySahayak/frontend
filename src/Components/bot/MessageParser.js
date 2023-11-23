import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) 
    {
      actions.handleHello1();
    }
    if (message.includes('lost my bike')) 
    {
      actions.handleLostBike();
    }
    if (message.includes('thankyou')) 
    {
      actions.handleThanks();
    }
    
  };
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;