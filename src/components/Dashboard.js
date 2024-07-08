import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import Chart from './Chart';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true)
    const [filters, setFilters] = useState({
        endYear: '',
        topic: '',
        sector: '',
        region: '',
        pest: '',
        source: '',
        swot: '',
        country: '',
        city: '',
    });

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [filters]);

    //fetchind data from - 'http://localhost:5000/api/data'
    const fetchData = async () => {
        try {
            const query = new URLSearchParams(filters).toString();
            const response = await fetch(`http://localhost:5000/api/data?${query}`);
            setLoading(false)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            if (Array.isArray(result)) {
                setData(result);
                setCurrentIndex(0);
            } else {
                console.error('Fetched data is not an array:', result);
                setData([]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setData([]); // Fallback to an empty array in case of error
        }
    };

    //next-button
    const handleNext = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    //back-button
    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    //for filter the data according to query
    const handleFilterChange = (e) => {
        setLoading(true)
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value.toLowerCase(),
        }));
    };

    return (
        <div className='dash'>
            <div className="filters">
                <h2>Search by Filters</h2>

                <label>
                    End Year:
                    <input type="text" name="endYear" value={filters.endYear} onChange={handleFilterChange} />
                </label>
                <label>
                    Topic:
                    <input type="text" name="topic" value={filters.topic} onChange={handleFilterChange} />
                </label>
                <label>
                    Sector:
                    <input type="text" name="sector" value={filters.sector} onChange={handleFilterChange} />
                </label>
                <label>
                    Region:
                    <input type="text" name="region" value={filters.region} onChange={handleFilterChange} />
                </label>
                <label>
                    PEST:
                    <input type="text" name="pest" value={filters.pest} onChange={handleFilterChange} />
                </label>
                <label>
                    Source:
                    <input type="text" name="source" value={filters.source} onChange={handleFilterChange} />
                </label>
                <label>
                    SWOT:
                    <input type="text" name="swot" value={filters.swot} onChange={handleFilterChange} />
                </label>
                <label>
                    Country:
                    <input type="text" name="country" value={filters.country} onChange={handleFilterChange} />
                </label>
                <label>
                    City:
                    <input type="text" name="city" value={filters.city} onChange={handleFilterChange} />
                </label>
            </div>

            <div className='data'>
                {data.length > 0 ? (
                <>
                <div className='spinner'>{loading && <Spinner/>}</div>
                <Chart data={data[currentIndex]} />
                <div className='container-btn'>
                    <button onClick={handleBack} disabled={currentIndex === 0}>Back</button>
                    <span> {currentIndex + 1} of {data.length} </span>
                    <button onClick={handleNext} disabled={currentIndex === data.length - 1}>Next</button>
                </div>
                </>
           ) : (
            <div>No data matches the current filters</div>
        )}                
            </div>
        </div>
    );
};

export default Dashboard;
