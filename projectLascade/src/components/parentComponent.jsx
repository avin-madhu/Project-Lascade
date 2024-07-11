import React, { useState } from 'react';

// InputView Component
const InputView = ({ onExpand }) => {
  const viewStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#131418F5',
    background: 'linear-gradient(to top, #000000F5, #131418F5)',
    padding: '10px 15px',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    margin: '0px',
    postion: 'absolute',
    bottom:'0',
    transition: 'all 0.5s ease', // Smooth transition for expanding and collapsing
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
        <button style={buttonStyle} onClick={onExpand}><i style={buttonIconStyle} className="fa-solid fa-ellipsis-vertical"></i></button>
        <div style={textContainerStyle}>
          <span style={routeTextStyle}>Kochi - Los Angeles</span>
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

// ButtonsView Component
const ButtonsView = ({ onCollapse }) => {
  const viewStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: '10px',
    backgroundColor: '#131418F5',
    background: 'linear-gradient(to top, #000000F5, #131418F5)',
    boxSizing: 'border-box',
    transition: 'all 0.5s ease', // Smooth transition for expanding and collapsing
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

  const deleteButtonStyle = {
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
        <button style={cancelButtonStyle} onClick={onCollapse}><i style={buttonIconStyle} className="fa-solid fa-xmark"></i></button>
        <span style={titleStyle}>Route setting</span>
        <button style={backButtonStyle}>
          <i></i>
        </button>
      </div>
      <div style={buttonContainerStyle}>
        <button id='buttonview-actionButton' style={deleteButtonStyle}>Delete</button>
        <button id='buttonview-actionButton' style={buttonStyle}>Save</button>
        <button id='buttonview-actionButton' style={buttonStyle}>Load</button>
      </div>
    </div>
  );
};

// Parent Component to manage views
const ParentComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  return (
    <div>
      {isExpanded ? <ButtonsView onCollapse={handleCollapse} /> : <InputView onExpand={handleExpand} />}
    </div>
  );
};

export default ParentComponent;
