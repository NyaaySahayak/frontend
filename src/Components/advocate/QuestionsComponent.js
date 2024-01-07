import React, { useState } from 'react'
import EditData from './EditData';

export default function QuestionsComponent(props) {
  let jsonData = props.jsonData;
  // const [editedJsonData,seteditedJsonData] = useState(null)
  // const [editing, setEditing] = useState(false);
 
  // const editData = (jsonData) =>{
  //   seteditedJsonData(jsonData)
  //   setEditing(true)
  // }

  // const closeEditModal = () => {
  //   seteditedJsonData (null);
  // };
  return (
    <div>
      {jsonData && jsonData.map(jsonData => {
        return (<div>
          <div key={jsonData._id}>
            <div className="card my-3">
              <div className="card-header">
                {jsonData.question}
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>{jsonData.answer}</p>
                </blockquote>
              </div>
            </div>

            <div className="row">
              <div className="col-md-1">
                <button className='btn btn-primary' 
                >Update</button>
                {/* <button className='btn btn-primary' 
                onClick={()=>editData(jsonData)}
                >Update</button> */}
                {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>editData(jsonData)}>
                  Update
                </button> */}
              </div>
              <div className="col">
                <button className='btn btn-danger'>Delete</button>
              </div>
            </div>
            <hr />
            {/* {editing ? <EditData jsonData={editedJsonData} onClose={closeEditModal}/>:null } */}

          </div>
        </div>
        )
      })}
    </div>
  );
  // return (

  // )
}


// import React, { useState } from 'react';
// import EditData from './EditData';

// export default function QuestionsComponent(props) {
//   const [editQuestion, setEditQuestion] = useState(props.jsonData.question);
//   const [editAnswer, setEditAnswer] = useState(props.jsonData.nnswer);

//   const handleUpdate = (jsonData) => {
//     setEditQuestion(jsonData);
//     console.log(jsonData)
//   };

//   const handleSave = () => {
//     // Handle save logic here
//     alert('Data saved!');

//     // Close the modal
//     setEditQuestion({});
//   };
  

//   return (
//     <div>
//       {props.jsonData &&
//         props.jsonData.map((jsonData) => (
//           <div key={jsonData._id}>
//             <div className="card my-3">
//               <div className="card-header">{jsonData.question}</div>
//               <div className="card-body">
//                 <blockquote className="blockquote mb-0">
//                   <p>{jsonData.answer}</p>
//                 </blockquote>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-md-1">
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   data-bs-toggle="modal"
//                   data-bs-target="#editModal"
//                   onClick={() => handleUpdate(jsonData)}
//                 >
//                   Update
//                 </button>
//               </div>
//               <div className="col">
//                 <button className="btn btn-danger">Delete</button>
//               </div>
//             </div>
//             <hr />
//           </div>
//         ))}

//       {/* Edit Modal */}
//       <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="editModalLabel">
//                 Edit Data
//               </h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setEditQuestion({})}></button>
//             </div>
//             <div className="modal-body">
//               <label htmlFor="editQuestion" className="form-label">
//                 Question:
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="editQuestion"
//                 value={editQuestion.question || ''}
//                 onChange={(e) => setEditQuestion({ ...editQuestion, question: e.target.value })}
//               />

//               <label htmlFor="editAnswer" className="form-label">
//                 Answer:
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="editAnswer"
//                 value={editQuestion.answer || ''}
//                 onChange={(e) => setEditQuestion({ ...editQuestion, answer: e.target.value })}
//               />
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-primary" onClick={handleSave}>
//                 Save
//               </button>
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setEditQuestion({})}>
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
