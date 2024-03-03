import React, { useState } from 'react'

const SearchFilter = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([
        'Apple', 'Banana', 'Orange', 'Mango', 'Grapes'
    ]);

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder='Search...' />

        <ul>
            {filteredData.map((item, index) => (
                <li key={index} >{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default SearchFilter