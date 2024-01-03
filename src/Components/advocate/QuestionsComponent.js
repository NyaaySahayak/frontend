import React from 'react'

export default function QuestionsComponent({jsonData}) {
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
    </div>
    </div>
  )
}
