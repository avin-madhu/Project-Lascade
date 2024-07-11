// Route Settings Page
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
    marginBottom: '0px',
    height: '100px',
    backgroundColor: 'transparent'
  };

  const titleStyle = {
    fontWeight: 'bold',
    alignItems: 'center',
    marginLeft: '-35px',
    color: 'white'
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
    marginTop: '10px',
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

  const cancelButtonStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#2B2C2FB2',
    border: 'none',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: '5px',
    marginRight: '5px'
  };

  const buttonIconStyle = {
    fontSize: '26px'
  }

  return (
    <div style={viewStyle}>
      <div style={headerStyle}>
        <button style={cancelButtonStyle} onClick={onCollapse}><i style={buttonIconStyle} class="fa-solid fa-xmark"></i></button>
        <span style={titleStyle}>Route setting</span>
        <button style={backButtonStyle}>
          <i></i>
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