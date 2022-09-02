import React from 'react';
import Foods from '../Foods/Foods';

const FoodContainer = ({foods, setFoods, setDisplayFoods, displayFoods}) => {
    return (
        <div>
            <Foods foods={foods} setFoods={setFoods} displayFoods={displayFoods} setDisplayFoods={setDisplayFoods}></Foods>
        </div>
    );
};

export default FoodContainer;