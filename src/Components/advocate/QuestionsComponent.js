export default function QuestionsComponent(props) {
  let jsonData = props.jsonData;
  
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
              </div>
              <div className="col">
                <button className='btn btn-danger'>Delete</button>
              </div>
            </div>
            <hr />

          </div>
        </div>
        )
      })}
    </div>
  );
}
