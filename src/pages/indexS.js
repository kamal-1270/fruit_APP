// index.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// In-memory storage for FAQs
let faqs = [
    { id: 1, question: 'What are the health benefits of apples?', answer: 'Apples are rich in fiber and antioxidants.' },
    { id: 2, question: 'How to ripen bananas quickly?', answer: 'Place bananas in a paper bag with an apple or tomato overnight.' }
];
let nextId = 3;

// GET all FAQs
app.get('/faqs', (req, res) => {
    res.json(faqs);
});

// GET single FAQ by ID
app.get('/faqs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const faq = faqs.find(f => f.id === id);
    if (!faq) {
        return res.status(404).json({ error: 'FAQ not found' });
    }
    res.json(faq);
});

// POST new FAQ
app.post('/faqs', (req, res) => {
    const { question, answer } = req.body;
    if (!question || !answer) {
        return res.status(400).json({ error: 'Question and answer are required' });
    }
    const newFaq = { id: nextId++, question, answer };
    faqs.push(newFaq);
    res.status(201).json(newFaq);
});

// PUT update FAQ by ID
app.put('/faqs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { question, answer } = req.body;
    const faq = faqs.find(f => f.id === id);
    if (!faq) {
        return res.status(404).json({ error: 'FAQ not found' });
    }
    faq.question = question;
    faq.answer = answer;
    res.json(faq);
});

// DELETE FAQ by ID
app.delete('/faqs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = faqs.findIndex(f => f.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'FAQ not found' });
    }
    faqs.splice(index, 1);
    res.sendStatus(204);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
