import React, { useState } from 'react';
import QuestionsComponent from './QuestionsComponent';
import Spinner from '../Spinner';
import AddnewQuestion from './AddnewQuestion';

export default function AdvocateDashBoard(props) {
  const jsonData = props.jsonData;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [displayQuestion, setDisplayQuestion] = useState(jsonData);

  // Update to filter and display questions upon category selection
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (!jsonData) return;

    if (category === 'All' || category === '') {
      setDisplayQuestion(jsonData);
    } else {
      const filteredQuestions = jsonData.filter((q) => q.category === category);
      setDisplayQuestion(filteredQuestions);
    }
  };

  return (
    <>
      <div>
        {props.loading && <Spinner />}
        <AddnewQuestion setchangesInData={props.setchangesInData} />
        <div className="selection">
          <label htmlFor="questions-select">Choose a Question Field:</label>
          <select name="questions" id="questions-select" onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="CriminalLaw">Criminal Law</option>
            <option value="FamilyLaw">Family Law</option>
            <option value="EmploymentLaw">Employment Law</option>
            <option value="IntellectualPropertyLaw">Intellectual Property Law</option>
            <option value="BusinessLaw">Business Law</option>
            <option value="CivilLaw">Civil Law</option>
            <option value="FinancialLaw">Financial Law</option>
            <option value="CyberLaw">Cyber Law</option>
            <option value="PropertyLaw">Property Law</option>
            <option value="TaxLaw">Tax Law</option>
            <option value="ConsumerLaw">Consumer Law</option>
            <option value="CommercialLaw">Commercial Law</option>
            <option value="All">All</option>
          </select>
        </div>
        <div className="container">
          {displayQuestion.map((data) => (
            <QuestionsComponent key={data._id} setchangesInData={props.setchangesInData} jsonData={data} selection={selectedCategory} />
          ))}
        </div>
      </div>
    </>
  );
}
