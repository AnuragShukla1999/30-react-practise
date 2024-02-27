import React, { useState } from 'react';
import SideBar from './SideBar';

function SideBarOpen() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  

  return (
    <div className="App">
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <SideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      {/* Your main content goes here */}

      
    </div>
  );
}

export default SideBarOpen;