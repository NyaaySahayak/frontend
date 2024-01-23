import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
export default function QuestionsComponent(props) {
  let jsonData = props.jsonData;

  const [showModal, setShowModal] = useState(false);
  const [newquestion, setNewQuestion] = useState(jsonData.question);
  const [newanswer, setNewAnswer] = useState(jsonData.answer);


  const handleClear = () => {
    setNewQuestion('');
    setNewAnswer('');
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

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
      props.setchangesInData((prev) => !prev);
      toast.warning(data.message);
    } catch (error) {
      toast.error('Error: ', error);
    }
  }

  async function handleSave() {
    try {
      handleModalClose();
      const questionId = props.jsonData._id;
      const response = await fetch('http://localhost:4000/data', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: newquestion,
          answer: newanswer,
          _id: questionId
        }),
      });
      const data = await response.json();
      props.setchangesInData((prev) => !prev);
      toast.success(data.message);
    } catch (error) {
      toast.error('Error: ', error);
    }
  }


  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div>
      <button
        style={{
          position: 'fixed',
          bottom: '39px',
          right: '95px',
          padding: '7px 10px',
          backgroundColor: '#667eea',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: 'bold',
          zIndex: '1000',
          visibility: showScrollButton ? 'visible' : 'hidden',
          opacity: showScrollButton ? 1 : 0,
          transition: 'visibility 0s, opacity 0.5s linear',
        }}
        onClick={handleScrollToTop}
      >
        <span class="material-symbols-outlined">
          arrow_upward
        </span>
      </button>
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
            <button className='btn btn-primary' onClick={handleModalOpen}
            >Update</button>
          </div>
          <div className="col">
            <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
          </div>
        </div>
        <hr />

        <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Question</h5>
                <button type="button" className="btn-close" onClick={handleModalClose}></button>
              </div>
              <div className="modal-body">
                <form className="row g-3">
                  <div className="">
                    <label htmlFor="inputQuestion" className="form-label">
                      Question
                    </label>
                    <textarea
                      type="email"
                      className="form-control"
                      id="inputQuestion"
                      name="newquestion"
                      placeholder="Enter Question"
                      value={newquestion}
                      onChange={(e) => setNewQuestion(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="inputAnswer" className="form-label">
                      Answer
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputAnswer"
                      name="newanswer"
                      placeholder="Enter Answer"
                      value={newanswer}
                      onChange={(e) => setNewAnswer(e.target.value)}
                    />
                  </div>

                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                  Close
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleClear}>
                  Clear
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
