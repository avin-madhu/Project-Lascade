import React from "react";
import InputContainer from "./components/InputContainer";
import "./App.css";

function App() {

  const mapContainer = {
    background: 'linear-gradient(to Top, black, transparent)'
  }
  return (
     <>
        <div >
            <iframe style={mapContainer}
              className="map-iframe"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-23.906250000000004%2C-37.718590325588146%2C140.62500000000003%2C64.84893726357947&amp;layer=transportmap"
            ></iframe>
        </div>
      <InputContainer/>
    </>
  );
}

export default App;
