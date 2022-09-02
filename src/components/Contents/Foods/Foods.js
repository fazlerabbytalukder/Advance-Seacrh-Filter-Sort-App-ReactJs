import React from 'react';
import Food from '../Food/Food';

const Foods = ({foods, setFoods,displayFoods,setDisplayFoods}) => {

    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    displayFoods.map(food => <Food key={food.id} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;