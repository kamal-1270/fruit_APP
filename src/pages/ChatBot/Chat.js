import React, { useState } from 'react';  

const Chat = () => {  
    const [messages, setMessages] = useState([]);  
    const [input, setInput] = useState('');  

    const handleSendMessage = () => {  
        if (input) {  
            setMessages([...messages, { text: input, user: true }]);  
            setInput('');  
        }  
    };  

    return (  
        <div className="chat">  
            <h1>Chat</h1>  
            <div className="messages">  
                {messages.map((message, index) => (  
                    <div key={index} className={`message ${message.user ? 'user' : ''}`}>  
                        {message.text}  
                    </div>  
                ))}  
            </div>  
            <input  
                type="text"  
                value={input}  
                onChange={(e) => setInput(e.target.value)}  
                placeholder="Type a message..."  
            />  
            <button onClick={handleSendMessage}>Send</button>  
        </div>  
    );  
};  

export default Chat;



