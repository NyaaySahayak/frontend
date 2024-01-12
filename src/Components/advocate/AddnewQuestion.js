import { useState } from 'react'
import { toast } from 'react-toastify'


export default function AddnewQuestion() {
    const [showModal, setShowModal] = useState(false);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');


    const handleClear = () => {
        setAnswer('');
        setQuestion('');
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };



    async function handleCreateUser(ev) {
        handleModalClose();
        ev.preventDefault()
        try {
            if (question === '' || answer === '') {
                toast.error("All Fields must be filled")
            } else {
                const response = await fetch('http://localhost:4000/data', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        question, answer
                    }),
                })
                // const data = await response.json();
                if (response.ok) {
                    handleClear();
                    toast.success("Question Added Successfully")

                } else {
                    toast.error("Technical Error")
                }
            }
        } catch (error) {
            toast.error("Error:", error)
        }
    }

    return (
        <>
            <button className="btn btn-primary position-fixed top-10 end-0 m-3 " style={{ zIndex: '1000' }} onClick={handleModalOpen}>
                Add New
            </button>

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
                                        name="question"
                                        placeholder="Enter Question"
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
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
                                        name="answer"
                                        placeholder="Enter Answer"
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
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
                            <button type="button" className="btn btn-primary" onClick={handleCreateUser}>
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
