import React, { useState } from 'react'

function EditData(props) {
    const [question, setQuestion] = useState(props.jsonData.question)
    const [answer, setAnswer] = useState(props.jsonData.answer)
    // console.log(question,answer)
    const updateData = () => {
        props.onClose();
    }
    return (
        <div>

            {props.jsonData ? (
                <>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div class="mb-3">
                                        <label htmlFor="question" class="form-label">Question</label>
                                        <input type="email" class="form-control" value={question} id="question" placeholder="name@example.com" />
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="answer" class="form-label">Answer</label>
                                        <textarea class="form-control" id="answer" rows="3" value={answer}></textarea>
                                    </div>
                                </div>
                                
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-success" onClick={updateData}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                // console.log(props.jsonData)
            ) : null}
        </div>
    )
}

export default EditData
