import React from 'react'
import QuestionsComponent from './QuestionsComponent';
import Spinner from '../Spinner';
import AddnewQuestion from './AddnewQuestion';



export default function AdvocateDashBoard(props) {
  const jsonData = props.jsonData;
  
  return (<>

  


    <div className='container-fluid my-3 '>

      <div className="container">
        {props.loading && <Spinner />}
        <AddnewQuestion setchangesInData={props.setchangesInData} />
        {jsonData.map((jsonData) => (
          <QuestionsComponent key={jsonData._id} setchangesInData={props.setchangesInData} jsonData={jsonData} />
        ))}
      </div>
    </div>
  </>
  )
}