// InputContainer.jsx
import React, { useState } from 'react';
import InputView from './InputView';
import ButtonsView from './ButtonsView';

const InputContainer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '240px', // Adjust as needed
    overflow: 'hidden',
    marginTop: '0px',
    zIndex: 1
  };

  const sliderStyle = {
    display: 'flex',
    width: '200%',
    height: '100%',
    transition: 'transform 0.3s ease-in-out',
    transform: isExpanded ? 'translateX(-50%)' : 'translateX(0)',
  };

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  return (
    <div style={containerStyle}>
      <div style={sliderStyle}>
        <InputView onExpand={handleExpand} />
        <ButtonsView onCollapse={handleCollapse} />
      </div>
    </div>
  );
};

export default InputContainer;