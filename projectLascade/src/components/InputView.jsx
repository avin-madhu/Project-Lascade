import React from 'react';

const InputView = ({ onExpand }) => {
  const viewStyle = {
    display: 'flex',
    flexDirection: 'coloumn',
    alignItems: 'center',
    backgroundColor: '#131418F5',
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
    margin: '20px'

  };

  const textStyle = {
    fontWeight: 'bold',
    marginRight: '50px',
    marginLeft: '35px'
  };

  const spaceStyle = {
    flex: 1,
    backgroundColor: 'transparent',
    padding: '30px',
    cursor: 'pointer',
  };

  const arrowStyle = {
    marginRight: '25px',
    color: 'grey',
    fontSize: '20px'
  };

  const routeDetailStyle = {
    display: 'flex',
    backgroundColor: 'white',
    height: '20%',
    width: '100%',
    flexDirection: 'column',
  }

  return (
    <div style={viewStyle}>
      {/* <div style={routeDetailStyle}>
         
      </div> */}
      <div style={inputContainerStyle} onClick={onExpand}>
        <span style={textStyle}>Create video</span>
        <div
          style={spaceStyle}
          readOnly
        />
        <i className="fa-solid fa-arrow-right" style={arrowStyle}></i>
      </div>
    </div>
  );
};

export default InputView;