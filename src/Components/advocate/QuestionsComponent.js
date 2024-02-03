import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function QuestionsComponent(props) {
  const navigate = useNavigate();
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
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
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
      console.log(jsonData);
      // window.location.reload();
      navigate('/advocate/dashboard/');
      
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
          top: '39px',
          right: '25px',
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
        <span className="material-symbols-outlined">arrow_upward</span>
      </button>

      {/* Card Layout for Each Question */}
      <div className="card mb-4 shadow-sm" style={{ borderRadius: '15px', background: 'linear-gradient(to right, #ffffff, #f8f9fa)' }}>
        <div className="card-body">
          <h5 className="card-title text-primary">{jsonData.question}</h5>
          <p className="card-text text-secondary">{jsonData.answer}</p>
          <p className="text-muted">Category: {jsonData.category}</p>
          <div className="text-end">
            <button className="btn btn-outline-primary btn-sm me-2" onClick={handleModalOpen}><i className="bi bi-pencil-square"></i> Edit</button>
            <button className="btn btn-outline-danger btn-sm" onClick={handleDelete}><i className="bi bi-trash"></i> Delete</button>
          </div>
        </div>
      </div>

      {/* Modal for Update */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New</h5>
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
                      rows={7}
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
              <button type="button" className="btn btn-outline-secondary" onClick={handleModalClose}>Close</button>
              <button type="button" className="btn btn-warning" onClick={handleClear}>Clear</button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
