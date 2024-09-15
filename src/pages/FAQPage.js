import React, { useState,useEffect } from 'react';
import './FAQPage.css'; 
const FAQPage = () => {
  const [faqs, setFaqs] = useState([
    { id: 1, question: 'What is an apple?', answer: 'An apple is a fruit that comes from the apple tree.', image:'https://imgs.search.brave.com/fjUqUIF-BLBSKPIA5vY1kEZVSl4q3ikfeJuJs-71xls/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk1/ODc4MDkyL3Bob3Rv/L3JlZC1hcHBsZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/TTJuZEZJMXYyZXJK/TTE4cTFDZDFRQ004/anFCbFJLTGMxbkxF/OUJOcC1FWT0'},
    { id: 2, question: 'What is a banana?', answer: 'A banana is a long, curved fruit with a yellow skin.', image: 'https://imgs.search.brave.com/HULLCKIFKgCNjs4qeMq0arhSwlxIMOAagePcyhnuc68/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/aS1nZW5lcmF0ZWQt/aW1hZ2UtYmFuYW5h/XzIzLTIxNTA2ODMw/MjYuanBnP3NpemU9/NjI2JmV4dD1qcGc' }
  ]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [newImage, setNewImage] = useState('');
  const [editing, setEditing] = useState(null);
  const [editedQuestion, setEditedQuestion] = useState('');
  const [editedAnswer, setEditedAnswer] = useState('');
  const [editedImage, setEditedImage] = useState('');

  useEffect(() => {
    const storedFaqs = JSON.parse(localStorage.getItem('faqs')) || [];
    setFaqs(storedFaqs);
  }, []);

  useEffect(() => {
    localStorage.setItem('faqs', JSON.stringify(faqs));
  }, [faqs]);


  const handleAddFAQ = () => {
    if (newQuestion && newAnswer && newImage) {
      setFaqs([
        ...faqs,
        { id: Date.now(), question: newQuestion, answer: newAnswer, image: newImage }
      ]);
      setNewQuestion('');
      setNewAnswer('');
      setNewImage('');
    }
  };

  const handleEditFAQ = (id) => {
    const faqToEdit = faqs.find(faq => faq.id === id);
    setEditing(id);
    setEditedQuestion(faqToEdit.question);
    setEditedAnswer(faqToEdit.answer);
    setEditedImage(faqToEdit.image);
  };

  const handleUpdateFAQ = () => {
    setFaqs(faqs.map(faq =>
      faq.id === editing
        ? { ...faq, question: editedQuestion, answer: editedAnswer, image: editedImage }
        : faq
    ));
    setEditing(null);
    setEditedQuestion('');
    setEditedAnswer('');
    setEditedImage('');
  };

  const handleDeleteFAQ = (id) => {
    setFaqs(faqs.filter(faq => faq.id !== id));
  };

  return (
    <div className="faqpage-container">
      <h1 style={{color:"white"}}>FaQ Section</h1>

      {editing === null ? (
        <>
        <div className='add-div'
        >
          <div className='divQues'>
          <ul>
            {faqs.map(faq => (
              <ul key={faq.id}>
                
                <img src={faq.image}></img> 
                
                <div className='questionDiv'
                style={{marginTop:"-100px"}} 
                >
                <strong className='faqQues'>{faq.question}</strong> <br></br>
                <strong className='faqAns'>{faq.answer}</strong><br></br> 
               
                
                <button onClick={() => handleEditFAQ(faq.id)} className="btnEdit">Edit</button>
                <button onClick={() => handleDeleteFAQ(faq.id)} className="btnDelete">Delete</button>
                </div>
            <hr></hr>
              </ul>
            ))}
          </ul>
          </div>
          </div>
          <h2 style={{color:"white"}}>Add a new FAQ</h2>
          
          <input
            type="text"
            placeholder="Question"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            style={{borderRadius:"10px"}}
          />
          <input
            type="text"
            placeholder="Answer"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            style={{borderRadius:"10px"}}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
            style={{borderRadius:"10px"}}
          />
          <button onClick={handleAddFAQ}>Add FAQ</button>
        </>
      ) : (
        <>
        <div className='editSection'>
          <h2 style={{color:"white"}}>Edit FAQ</h2>
          <input
            type="text"
            placeholder="Question"
            value={editedQuestion}
            onChange={(e) => setEditedQuestion(e.target.value)}
            style={{borderRadius:"10px"}}
          />
          <input
            type="text"
            placeholder="Answer"
            value={editedAnswer}
            onChange={(e) => setEditedAnswer(e.target.value)}
            style={{borderRadius:"10px"}}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={editedImage}
            onChange={(e) => setEditedImage(e.target.value)}
            style={{borderRadius:"10px"}}
          />
          <button onClick={handleUpdateFAQ} >Update FAQ</button>
          <button onClick={() => setEditing(null)} style={{backgroundColor:"red"}}>Cancel</button>
          </div>
        </>
      )}
    </div>
  );
};

export default FAQPage;



