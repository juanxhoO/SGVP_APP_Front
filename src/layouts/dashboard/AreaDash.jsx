import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
      text: 'Mantenimientos por Mes',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// Generate mock data for individual vehicles
const generateVehicleData = (vehicleCount, months) => {
  return Array.from({ length: vehicleCount }, () => 
    months.map(() => faker.datatype.number({ min: 0, max: 100 }))
  );
};

// Aggregate data for all vehicles
const aggregateData = (vehicleData) => {
  return vehicleData[0].map((_, monthIndex) =>
    vehicleData.reduce((total, vehicle) => total + vehicle[monthIndex], 0)
  );
};

const vehicleCount = 5;
const vehicleData = generateVehicleData(vehicleCount, labels);
const aggregatedData = aggregateData(vehicleData);

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Total Maintenance',
      data: aggregatedData,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function AreaDash() {
  return <Line options={options} data={data} />;
}
