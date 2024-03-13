import React from 'react'
import { useState } from 'react'

const Pagination = ({ data, itemsPerPage }) => {

    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleClick = (page) => {
        setCurrentPage(page);
    }

    const paginatedData = data.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

  return (
    <div>
        {paginatedData.map((item, index) => (
            <div key={index} >{item}</div>
        ))}

        <div>
            {Array.from({ length: totalPages }, (_, index) => (
                <button key={index} onClick={() => handleClick(index)} >
                    {index + 1}
                </button>
            ))}
        </div>
    </div>
  )
}

export default Pagination