import React from 'react';
import cardsHome from '../cards/card-home';
import ChartComponent from '../graphics/graphics';

const ChartContainer = () => {
    return (
        <div>
            {cardsHome.map((item, index) => (
                <ChartComponent key={index} data={item} animal={item.animal} />
            ))}
        </div>
    );
};

export default ChartContainer;
