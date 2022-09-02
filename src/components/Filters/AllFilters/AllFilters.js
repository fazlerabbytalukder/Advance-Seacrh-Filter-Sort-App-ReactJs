import React from 'react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import SearchFilter from '../SearchFilter/SearchFilter';
import SortedFilter from '../SortedFilter/SortedFilter';

const AllFilters = ({filterContinent, searchValue, handleFilterSearch, sortByPriceHTL,sortByPriceLTH }) => {
    return (
        <div>
            <SearchFilter searchValue={searchValue} handleFilterSearch={handleFilterSearch}></SearchFilter>
            <CategoryFilter filterContinent={filterContinent}></CategoryFilter>
            <SortedFilter sortByPriceHTL={sortByPriceHTL} sortByPriceLTH={sortByPriceLTH}></SortedFilter>
        </div>
    );
};

export default AllFilters;