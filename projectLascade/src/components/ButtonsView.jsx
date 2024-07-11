// ButtonsView.jsx
import React from 'react';

const ButtonsView = ({ onCollapse }) => {
  const viewStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    height: '100%',
    padding: '10px',
    backgroundColor: '#131418F5',
    background: 'linear-gradient(to top, #000000F5, #131418F5)',
    boxSizing: 'border-box',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const titleStyle = {
    fontWeight: 'bold',
  };

  const backButtonStyle = {
    background: 'none',
    border: 'none',
    color: 'grey',
    cursor: 'pointer',
    
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '70px',
    fontFamily: 'Readex Pro'
  };

  const buttonStyle = {
    backgroundColor: '#2B2C2FCC',
    borderRadius: '35px',
    padding: '20px 30px',
    border: 'none',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    flex: '1',
    margin: '0 5px',
    color: 'white',
    height: '70px',
    fontFamily: 'Readex Pro',
    fontSize: '17px'
  };

  const deletebuttonStyle = {
    backgroundColor: '#EB4E4E',
    borderRadius: '35px',
    padding: '20px 30px',
    border: 'none',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    flex: '1',
    margin: '0 5px',
    color: 'white',
    height: '70px',
    fontFamily: 'Readex Pro',
    fontSize: '17px'
  };


  return (
    <div style={viewStyle}>
      <div style={headerStyle}>
        <span style={titleStyle}>Route setting</span>
        <button style={backButtonStyle} onClick={onCollapse}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      </div>
      <div style={buttonContainerStyle}>
        <button id='buttonview-actionButton' style={deletebuttonStyle}>Delete</button>
        <button id='buttonview-actionButton' style={buttonStyle}>Save</button>
        <button id='buttonview-actionButton' style={buttonStyle}>Load</button>
      </div>
    </div>
  );
};

export default ButtonsView;