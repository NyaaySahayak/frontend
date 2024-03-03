import React , {useState} from 'react'
import MapComponent from './MapComponent';
import LawyerSearch from './LawyerSearch';
import './Legal.css';

const LegalAid = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div >

    {/* <div className="legal-aid-container" > */}
      {/* <div className="flex-container"> */}
      <div className='row'>
        <div className='col-md-6'>
        <MapComponent />
        </div>
        <div className='col-md-6'>
        <LawyerSearch searchQuery={searchQuery} onSearch={setSearchQuery} />
        </div>
        
        
      </div>
      {/* </div> 
    </div>*/}
    </div>
  );
};

export default LegalAid;