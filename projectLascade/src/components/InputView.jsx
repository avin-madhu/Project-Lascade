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
    marginTop: '10px'
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

  const routeDetailContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0px', 
    width: '100%', 
    height: '100px',
    justifyContent: 'space-between', 
    backgroundColor: 'transparent'
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1, 
  };

  const buttonStyle = {
    width: '50px',
    height: '50px',
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

  const settingButtonStyle = {
    width: '50px',
    height: '50px',
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

  const routeTextStyle = {
      fontFamily: "Readex Pro",
      fontSize: "17px",
      color: 'white'
  }

  const pointsTextStyle = {
    fontFamily: "Readex Pro",
    fontSize: "12px",
    marginTop: '2px',
    color: '#a3a3a3'
  }

  const buttonIconStyle = {
    fontSize: '23px'
  }


  return (
    <div style={viewStyle}>
      <div style={routeDetailContainerStyle}>
        <button style={settingButtonStyle} onClick={onExpand}><i style={buttonIconStyle} className="fa-solid fa-ellipsis-vertical"></i></button>
        <div style={textContainerStyle}>
          <span style={routeTextStyle}>Kochi - Los Angels</span>
          <span style={pointsTextStyle}>2 points</span>
        </div>
        <button style={buttonStyle}><i style={buttonIconStyle} className="fa-solid fa-plus"></i></button>
      </div>
      <div style={inputContainerStyle}>
        <span style={textStyle}>Create video</span>
        <div style={spaceStyle} />
        <i className="fa-solid fa-arrow-right" style={arrowStyle}></i>
      </div>
    </div>
  );
};

export default InputView;
