import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const LawyerSearch = ({ searchQuery, onSearch }) => {
  const [displayedLawyers, setDisplayedLawyers] = useState([]);
  const [originalLawyers, setOriginalLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/lawyers");
      setDisplayedLawyers(response.data);
      setOriginalLawyers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (value) => {
    onSearch(value);
  };

  const filterLawyers = useCallback(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    const filteredData = originalLawyers.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerCaseQuery) ||
        item.desc.toLowerCase().includes(lowerCaseQuery) ||
        item.location.toLowerCase().includes(lowerCaseQuery)
    );

    setDisplayedLawyers(filteredData);
  }, [searchQuery, originalLawyers]);

  useEffect(() => {
    filterLawyers();
  }, [filterLawyers]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container lawyer-search">
      <div className="searchBar">
        <input
          placeholder="Search..."
          id="searchBar"
          name="searchBar"
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass glass" id="btn"></i>
      </div>
      <div className="data">
        <div className="header">
          <p>Search for Lawyers</p>
        </div>
        <div className="body">
          <div id="root">
            <div className="grid-container">
              {loading ? (
                <p>Loading...</p>
              ) : displayedLawyers.length === 0 ? (
                <p className="no-lawyers-found">No lawyers found!</p>
              ) : (
                displayedLawyers.slice(0, 4).map((lawyer) => (
                  <div className="boxx" key={lawyer._id}>
                    <div className="box">
                      <div className="bottom">
                        <p className="name" style={{ fontSize: "1.2em" }}>
                          <strong>{lawyer.name}</strong>
                        </p>
                        <h2 className="specialisation" style={{ fontSize: "0.9em" }}>{lawyer.desc}</h2>
                        <h2 className="location" style={{ fontSize: "0.9em" }}>{lawyer.location}</h2>
                        <h2 className="number" style={{ fontSize: "0.9em" }}> Contact: {lawyer.number}</h2>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerSearch;
