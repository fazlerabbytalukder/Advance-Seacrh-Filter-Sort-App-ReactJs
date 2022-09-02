import React from 'react';

const SortedFilter = ({ sortByPriceHTL, sortByPriceLTH }) => {
    return (
        <div className='mt-4'>
            <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Your Price Range
                </button>
                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li><a class="dropdown-item" onClick={sortByPriceHTL}>High To Low</a></li>
                    <li><a class="dropdown-item" onClick={sortByPriceLTH}>Low To High</a></li>
                </ul>
            </div>

        </div>
    );
};

export default SortedFilter;