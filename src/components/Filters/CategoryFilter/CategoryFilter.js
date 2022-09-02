import React from 'react';

const CategoryFilter = ({ filterContinent }) => {
    return (
        <div>
            <select class="form-select" aria-label="Default select example" onChange={filterContinent}>
                <option selected>Select Your Category</option>
                <option value="all">All</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
            </select>
        </div>
    );
};

export default CategoryFilter;