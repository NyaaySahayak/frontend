import React from 'react'

import { useState, useEffect } from 'react';
import QuestionsComponent from './QuestionsComponent';
import Spinner from '../Spinner';
// import EditData from './EditData';

export default function AdvocateDashBoard() {

  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:4000/data');
        const json = await response.json();
        if (response.ok) {
          setJsonData(json);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  

  return (
    <div className='container-fluid my-3 '>
      <div className="container">
        {loading && <Spinner/>}
        {/* {jsonData && jsonData.map((jsonData) => ( */}
          <QuestionsComponent  jsonData={jsonData}/>
        {/* ))} */}
      </div>
    </div>
  )
}