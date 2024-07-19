import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Vehiculos Operativos',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Vehiculos Operativos',
            data: labels.map(() => faker.datatype.number({ min: 10, max: 30 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)', // Blue for operative vehicles
        },
        {
            label: 'Vehiculos no operativos',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red for non-operative vehicles
        },
    ],
};

export function VehicleDash() {
    return <Bar options={options} data={data} />;
}
