import React from 'react';

const Filter = ({ onFilter }) => {
  const handleFilterChange = (event) => {
    onFilter(event.target.value);
  };

  return (
    <div className="filter">
      <select onChange={handleFilterChange} className="filter-select">
        <option value="">All Cuisines</option>
        <option value="Italian">Italian</option>
        <option value="Mexican">Mexican</option>
        <option value="Indian">Indian</option>
        {/* Add more cuisine options as needed */}
      </select>
    </div>
  );
};

export default Filter;
