import React from 'react';

const SearchFilter = ({searchValue, handleFilterSearch}) => {
    return (
        <div className='mb-4'>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchValue} onChange={(e)=>handleFilterSearch(e)}/>
            </form>
        </div>
    );
};

export default SearchFilter;