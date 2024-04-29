import React, { useEffect, useState } from "react";
import "./style.css";
import User from "./user";

function GithubProfileFinder() {
  const [userName, setUserName] = useState("Nezhinskiy22");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  const fetchGithubUserData = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data! Please wait.</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}

export default GithubProfileFinder;
