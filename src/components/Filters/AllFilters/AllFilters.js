import React from 'react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import SearchFilter from '../SearchFilter/SearchFilter';

const AllFilters = ({filterContinent, searchValue, handleFilterSearch }) => {
    return (
        <div>
            <SearchFilter searchValue={searchValue} handleFilterSearch={handleFilterSearch}></SearchFilter>
            <CategoryFilter filterContinent={filterContinent}></CategoryFilter>
        </div>
    );
};

export default AllFilters;