import {toast} from'react-toastify';
export default function QuestionsComponent(props) {
  let jsonData = props.jsonData;

  async function handleDelete() {
    try {
        const question = jsonData.question
        const response = await fetch('http://localhost:4000/data', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                question
            }),
        });
        const data = await response.json();
        toast.warning(data.message);
    } catch (error) {
        toast.error('Error: ', error);
    }
}


  return (
    <div>
      <div>
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
            <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
