import React, { useState } from 'react';

const Sidebar = ({ setSelectedComponent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bg-gray-800 text-white h-screen transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-16'}`}>
      <button
        onClick={toggleSidebar}
        className="w-full text-center py-4 bg-gray-700 hover:bg-gray-600 transition-colors"
      >
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      <div className="mt-4 flex flex-col items-center">
        <button
          className="mb-4 text-2xl flex items-center"
          onClick={() => setSelectedComponent('Home')}
        >
          🏠 {isExpanded && 'Home'}
        </button>
        <button
          className="mb-4 text-2xl flex items-center"
          onClick={() => setSelectedComponent('Search')}
        >
          🔍 {isExpanded && 'Search'}
        </button>
        <button
          className="mb-4 text-2xl flex items-center"
          onClick={() => setSelectedComponent('Settings')}
        >
          ⚙️ {isExpanded && 'Settings'}
        </button>
        <button
          className="mb-4 text-2xl flex items-center"
          onClick={() => setSelectedComponent('Setting')}
        >
          🏠 {isExpanded && 'Home'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
