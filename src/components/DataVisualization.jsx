import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/components/DataVisualization.css';

const DataVisualization = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDataset, setSelectedDataset] = useState('temperature');

  useEffect(() => {
    setLoading(true);
    fetch(`/assets/data/${selectedDataset}.csv`)
      .then((response) => response.text())
      .then((text) => {
        const rows = text.split("\n").slice(1); // Skip header
        const data = rows.map((row) => {
          const [year, value] = row.split(",");
          return { year: parseInt(year), value: parseFloat(value) };
        });
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [selectedDataset]);

  return (
    <div className="data-visualization" id="data">
      <h2>Climate Data Visualizations</h2>
      <div className="data-tabs">
        <button onClick={() => setSelectedDataset('temperature')}>Temperature</button>
        <button onClick={() => setSelectedDataset('sea-level')}>Sea Level</button>
        <button onClick={() => setSelectedDataset('extreme-weather')}>Extreme Weather</button>
        <button onClick={() => setSelectedDataset('co2-emissions')}>CO2 Emissions</button>
      </div>
      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#1e88e5" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default DataVisualization;