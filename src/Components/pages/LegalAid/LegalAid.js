import React , {useState} from 'react'
import MapComponent from './MapComponent'
import LawyerSearch from './LawyerSearch'
import './Legal.css'
export default function LegalAid() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
       <div style={{ "display": "flex", "msFlexDirection": "row" }}>
        <MapComponent />
        <LawyerSearch searchQuery={searchQuery} onSearch={setSearchQuery} />
      </div>
    </div>
  )
}
