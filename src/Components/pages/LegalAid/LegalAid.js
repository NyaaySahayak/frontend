import React , {useState} from 'react'
import MapComponent from './MapComponent';
import LawyerSearch from './LawyerSearch';
import './Legal.css';

const LegalAid = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div >

    <div className="legal-aid-container" >
      <div className="flex-container">
        <MapComponent />
        <LawyerSearch searchQuery={searchQuery} onSearch={setSearchQuery} />
      </div>
    </div>
    </div>
  );
};

export default LegalAid;
