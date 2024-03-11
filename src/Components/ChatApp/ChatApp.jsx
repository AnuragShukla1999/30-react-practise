import React, { useEffect, useState } from 'react'
import { Socket } from 'socket.io';

const ChatApp = () => {

    const [message, setMessage] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        Socket.on('message', msg => {
            setMessage([...message, msg]);
        });

        return () => {
            Socket.off('message');
        };
    }, [message]);

    const sendMessage = () => {
        Socket.emit('message', inputValue);
        setInputValue('');
    };

  return (
    <div>
        <div>
            {message.map((message, index) => (
                <div key={index} >{message}</div>
            ))}
        </div>
        <input type="text" value={inputValue}  />
        <button onClick={sendMessage} >Send</button>
    </div>
  );
}

export default ChatApp;