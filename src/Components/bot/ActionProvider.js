import React from 'react';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello1 = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.\n How can i help you?');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleLostBike = () => {
    const botMessage = createChatBotMessage('First search in nearby location.\n If u cant find it search nearby police station and file a complaint');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

  };
  const handleThanks = () => {
    const botMessage = createChatBotMessage('You are Welcome!!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello1,
            handleLostBike,
            handleThanks
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;