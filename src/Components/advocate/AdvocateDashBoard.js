import React from 'react'

import { useState, useEffect } from 'react';
import QuestionsComponent from './QuestionsComponent';

export default function AdvocateDashBoard() {

  const [jsonData, setJsonData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/data');
        const json = await response.json();
        if (response.ok) {
          setJsonData(json);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='container-fluid my-3 '>
      <div className="container">
        {jsonData && jsonData.map((jsonData) => (
          <QuestionsComponent key={jsonData._id} jsonData={jsonData} />
        ))}
      </div>
    </div>
  )
}