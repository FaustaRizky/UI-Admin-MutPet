import React, { useState } from 'react';

function AddQuestionsForm() {
  const [questions, setQuestions] = useState([{ category: '', contentList: [''] }]);

  const handleCategoryChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...updatedQuestions[index], category: value };
    setQuestions(updatedQuestions);
  };

  const handleContentChange = (index, contentIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      contentList: [...updatedQuestions[index].contentList]
    };
    updatedQuestions[index].contentList[contentIndex] = value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { category: '', contentList: [''] }]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('No token found in localStorage. Please log in.');
      return;
    }
    fetch(`${apiUrl}/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(questions)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response from server:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: ''}}>
      <h1 style={{ textAlign: 'center' }}>Add Questions</h1>
      <div style={{ marginBottom: '10px',  }}>
        <button onClick={addQuestion} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', borderRadius: '5px' }}>Add Question</button>
      </div>
      {questions.map((question, index) => (
        <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <button onClick={() => removeQuestion(index)} style={{ padding: '5px 15px', cursor: 'pointer', marginRight: '10px', backgroundColor: '#f44336', color: 'white', borderRadius: '5px' }}>
            Remove Question
          </button>
          <input
            type="text"
            value={question.category}
            onChange={(e) => handleCategoryChange(index, e.target.value)}
            placeholder="Enter category..."
            style={{ padding: '8px', width: '100%', marginBottom: '5px', borderRadius: '5px' }}
          />
          {question.contentList.map((content, contentIndex) => (
            <div key={contentIndex}>
              <input
                type="text"
                value={content}
                onChange={(e) => handleContentChange(index, contentIndex, e.target.value)}
                placeholder="Enter question..."
                style={{ padding: '8px', width: '100%', marginBottom: '5px', borderRadius: '5px' }}
              />
            </div>
          ))}
          <button onClick={() => question.contentList.push('')} style={{ padding: '5px 10px', cursor: 'pointer', backgroundColor: '#008CBA', color: 'white', borderRadius: '5px' }}>Add Content</button>
        </div>
      ))}
      <div style={{ textAlign: 'center' }}>
        <button onClick={handleSubmit} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#333', color: 'white', borderRadius: '5px' }}>Submit</button>
      </div>
    </div>
  );
}

export default AddQuestionsForm;
