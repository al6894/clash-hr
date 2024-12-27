"use client";

import React, { useState } from "react";
import "../css/SearchBar.css";

const SearchBar: React.FC = () => {
  const [clanID, setID] = useState("");
  const [error, setError] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!clanID) {
      setError("Please fill in the clan ID.");
      return;
    }

    setError(""); // Clear errors

    // Submit logic (e.g., send data to a server)
    console.log("Searching:", { clanID });
  };

  return (
    <div className="search-Wrapper">
      <form onSubmit={handleSearch}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="search">
          <h2>Search For Clan</h2>
          <span
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            #
          </span>
          <input
            className="clanID"
            type="text"
            id="clanID"
            value={clanID}
            onChange={(e) => setID(e.target.value)}
            placeholder="XXXXXXXX"
            maxLength={8}
          />
          <button type="submit"> Search </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
