import React from 'react';
import './styles.css'; // Import the sidebar styles

function SideBar({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button onClick={onClose} >Close</button>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        {/* Add more sidebar items as needed */}
        
      </ul>
    </div>
  );
}

export default SideBar;