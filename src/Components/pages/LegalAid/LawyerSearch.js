import React, { useState, useEffect, useCallback } from "react";

const LawyerSearch = ({ searchQuery, onSearch }) => {
  const [displayedLawyers, setDisplayedLawyers] = useState([]);
  const [originalLawyers, setOriginalLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/getusers");
        const json = await response.json();
        setLoading(false);
        if (response.ok) {
          setDisplayedLawyers(json);
          setOriginalLawyers(json);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (value) => {
    onSearch(value);
  };

  const filterLawyers = useCallback(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    const filteredData = originalLawyers.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(lowerCaseQuery);
      const cityMatch = item.city.toLowerCase().includes(lowerCaseQuery);
      const professionMatch = item.speciality.toLowerCase().includes(lowerCaseQuery);

      return nameMatch || cityMatch || professionMatch;
    });

    setDisplayedLawyers(filteredData);
  }, [searchQuery, originalLawyers]);

  useEffect(() => {
    filterLawyers();
  }, [filterLawyers]);

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
                displayedLawyers.slice(0, 6).map((lawyer) => (
                  <div className="boxx" key={lawyer._id}>
                    <div className="box">
                      <div className="bottom">
                        <p className="name" style={{ fontSize: "1.2em" }}>
                          <strong>{lawyer.name}</strong>
                        </p>
                        <h2 className="specialisation" style={{ fontSize: "0.9em" }}>{lawyer.speciality}</h2>
                        <h2 className="contact" style={{ fontSize: "0.9em" }}> Contact: {lawyer.contact}</h2>
                        <h2 className="city" style={{ fontSize: "0.9em" }}> City: {lawyer.city}</h2>
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