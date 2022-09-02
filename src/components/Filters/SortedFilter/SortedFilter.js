import React from 'react';

const SortedFilter = ({sortByPriceHTL,sortByPriceLTH}) => {
    return (
        <div className='mt-4'>
            <p>Sort Your Price</p>
            <button className='btn btn-primary me-3' onClick={sortByPriceHTL}>Price High to low</button>
            <button className='btn btn-success' onClick={sortByPriceLTH}>Price low to High</button>
        </div>
    );
};

export default SortedFilter;