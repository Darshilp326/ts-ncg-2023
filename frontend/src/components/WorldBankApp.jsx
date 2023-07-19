import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const WorldBankApp = () => {
    const [countries, setCountries] = useState([]);
    const [indicators, setIndicators] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [selectedIndicator, setSelectedIndicator] = useState('');
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        // Fetch countries and indicators on component mount
        fetchCountries();
        fetchIndicators();
    }, []);

    const fetchCountries = async () => {
        try {
            const response = await axios.get('https://api.worldbank.org/v2/country?format=json');
            const countries = response.data[1].map((country) => ({
                id: country.id,
                name: country.name,
            }));
            setCountries(countries);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchIndicators = async () => {
        try {
            const response = await axios.get('https://api.worldbank.org/v2/indicator?format=json');
            const indicators = response.data[1].map((indicator) => ({
                id: indicator.id,
                name: indicator.name,
            }));
            setIndicators(indicators);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.worldbank.org/v2/country/${selectedCountry}/indicator/${selectedIndicator}?format=json&date=${startDate}:${endDate}`
            );

            const data = response.data[1];
            setChartData(data);
            renderChart(data);
        } catch (error) {
            console.error(error);
        }
    };

    const renderChart = (data) => {
        console.log(data)
        const chartLabels = data.map((item) => item.date);
        const chartData = data.map((item) => item.value);
        const chartOptions = {
            responsive: false,
            width: 30,
            height: 30, 
          };

        const ctx = document.getElementById('chart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartLabels,
                datasets: [
                    {
                        label: 'Data',
                        data: chartData,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            options: chartOptions
        });
    };

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handleIndicatorChange = (e) => {
        setSelectedIndicator(e.target.value);
    };

    const handleSave = async() => {
        const response = await axios.post("http://localhost:9000/views",{
            id:Math.floor(Math.random() * 1000),
            country:selectedCountry,
            indicator: selectedIndicator,
            startDate: startDate,
            endDate: endDate,
            metadata: chartData,
            chartType: "Column"
        })
        console.log(response)
        alert("Saved to database.")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <div className="form-container">
            <h1 style={{textAlign:"center"}}>World Bank Data App</h1>

            <form onSubmit={handleSubmit} style={{margin:"auto", padding:"20px"}}>
                <label>
                    Select Country:
                    <select value={selectedCountry} onChange={handleCountryChange}>
                        <option value="">Select a country</option>
                        {countries.map((country) => (
                            <option key={country.id} value={country.id}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </label>

                <br />
                <br />
                <br/>

                <label>
                    Select Indicator:
                    <select value={selectedIndicator} onChange={handleIndicatorChange}>
                        <option value="">Select an indicator</option>
                        {indicators.map((indicator) => (
                            <option key={indicator.id} value={indicator.id}>
                                {indicator.name}
                            </option>
                        ))}
                    </select>
                </label>

                <br />
                <br />
                <br />

                <label>
                    Select Start Date:
                    <input type="number" min="1900" max="2023" step="1"  value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </label>

                <br />
                <br />
                <br />

                <label>
                    Select End Date:
                    <input type="number" min="1900" max="2023" step="1"  value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </label>
                <br />
                <br />
                
                <button type="submit">Fetch Data</button>
                <button type="button" style={{"margin":"10px"}} onClick={handleSave}>Save it.</button>
            </form>
            <br />
            <div style={{margin:"auto"}}>
                <canvas id="chart" width="400" height="400"></canvas>
            </div>
        </div>
    );
};

export default WorldBankApp;