import React, { useEffect, useState } from "react";
import Suggestions from "./suggestions";

function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  const handleClick = (event) => {
    setSearchParam(event.target.innerText);
    setShowDropDown(false);
    setFilteredUsers([]);
  };

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      let res = await fetch("https://dummyjson.com/users");
      let data = await res.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setError(null);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filteredUsers);
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <input
          type="text"
          name="search"
          placeholder="Search users here..."
          value={searchParam}
          onChange={handleChange}
        />
      )}

      {showDropDown && (
        <Suggestions handleClick2={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}

export default SearchAutocomplete;
