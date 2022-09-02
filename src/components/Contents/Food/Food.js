import React from 'react';

const Food = ({ food }) => {
    const { id, name, Image, description, price, category } = food;
    return (
        <div>
            <div class="col">
                <div class="card h-100">
                    <img src={Image} class="card-img-top img-fluid" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <h6 class="card-title">{category}</h6>
                        <p class="card-text">{description}</p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">{price}</small>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Food;