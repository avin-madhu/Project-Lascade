import React from 'react';

const InputView = ({ onExpand }) => {
  const viewStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#131418F5',
    background: 'linear-gradient(to top, #000000F5, #131418F5)',
    padding: '10px 15px',
    width: '50%',
    height: '100%',
    boxSizing: 'border-box',
  };

  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '35px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    width: '100%',
    height: '70px',
    cursor: 'pointer',
    margin: '20px',
    marginTop: '100px'
  };

  const textStyle = {
    fontWeight: 'bold',
    marginRight: '10px',
    marginLeft: '35px',
    fontSize: '21px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  const spaceStyle = {
    flex: 1,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    padding: '10px',
    width: '10px'
  };

  const arrowStyle = {
    marginRight: '20px',
    color: 'grey',
    fontSize: '20px'
  };

  const routeDetailStyle = {
    display: 'flex',
    backgroundColor: 'white',
    height: '20%',
    width: '100%',
    flexDirection: 'column',
  };

  return (
    <div style={viewStyle}>
      <div style={inputContainerStyle} onClick={onExpand}>
        <span style={textStyle}>Create video</span>
        <div style={spaceStyle} />
        <i className="fa-solid fa-arrow-right" style={arrowStyle}></i>
      </div>
    </div>
  );
};

export default InputView;
