import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Random = () => {
    const [quote, setQuote] = useState('');

    const fetchQuote = () => {
        axios.get('https://api.quotable.io/random')
            .then(response => {
                setQuote(response.data.author)
            })
            .catch(error => {
                console.error('Error fetching quote: ', error)
            })
    };

    useEffect(() => {
        fetchQuote();
    }, []);
    
  return (
    <div>
        <blockquote>{quote}</blockquote>
        <button onClick={fetchQuote} >Generate Quote</button>
    </div>
  )
}

export default Random