import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ data, animal }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Consumo de agua', 'Cantidad de espacio requerido', 'Requerimientos nutricionales', 'Necesidad de compañeros', 'Longevidad de vida', 'Dificultad de mantenimiento'],
                datasets: [{
                    label: `${animal}`,
                    data: data.data, 
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        return () => { myChart.destroy() }
    }, [data, animal]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <canvas ref={canvasRef}></canvas>
                </div>
            </div>
        </div>
    );
};

export default ChartComponent;
