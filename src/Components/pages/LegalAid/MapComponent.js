import React from 'react';

const MapComponent = () => {
  return (
    <div style={{ overflow: 'hidden',width:'100%', height: '550px',marginLeft:'2%',marginRight:'2%' }}>
      <div id="another-map-canvas" style={{ height: '100%', width: '100%' }}>
        <iframe
          style={{ height: '100%', width: '100%', border: '0' }}
          title="Another Google Maps"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/search?q=law+firm&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"        
        ></iframe>
      </div>
      <a className="my-codefor-googlemap" href="https://www.bootstrapskins.com/themes" id="make-another-map-information">
        Premium Bootstrap Themes
      </a>
      <style>{`
        #another-map-canvas img.text-marker {
          max-width: none!important;
          background: none!important;
        }
        img {
          max-width: none;
        }
      `}</style>
    </div>
  );
};

export default MapComponent;
