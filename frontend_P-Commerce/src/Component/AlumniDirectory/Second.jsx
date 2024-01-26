import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import "./Directory.css";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import { Button, TextField } from "@mui/material";
import Forward from '@mui/icons-material/ArrowForwardIos';
import Backward from '@mui/icons-material/ArrowBackIosNewSharp';

export default function Directory() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(12); // Number of users to display per page
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPassoutYears, setSelectedPassoutYears] = useState(["all"]);
  const [selectedBranches, setSelectedBranches] = useState(["all"]);
  const [selectedStates, setSelectedStates] = useState(["all"]);
  const [selectedPlans, setSelectedPlans] = useState(["all"]);
  const apiURL = 'https://alcom-backend.onrender.com/api/alums/get-all-alum';

  const passoutYearOptions = [
    "all", "1951", "1952", "1953", /* Add all years here */
  ];

  const stateOptions = [
    "all", "New Delhi", "Andhra Pradesh", /* Add all states here */
  ];

  const degreeOptions = ["all", "B.Tech", "B.Arch"];

  const branchOptions = [
    "all", "Computer Science and Engineering", "Information Technology", /* Add all branches here */
  ];

  useEffect(() => {
    axios.get(apiURL)
      .then((response) => {
        const data = response.data.data;
        setUsers(data);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((error) => {
        setError(error); // Set the error state
        setLoading(false); // Set loading to false on error
      });
  }, []);

  // Filter users by name, passout year, branch, state, and plan
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedPassoutYears.includes("all") || selectedPassoutYears.includes(user.passoutyear)) &&
    (selectedBranches.includes("all") || selectedBranches.includes(user.department)) &&
    (selectedStates.includes("all") || selectedStates.includes(user.state)) &&
    (selectedPlans.includes("all") || selectedPlans.includes(user.degree))
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when the search term changes
  };

  const handleFilterChange = (filterType, selectedValues) => {
    switch (filterType) {
      case "passoutYears":
        setSelectedPassoutYears(selectedValues);
        selectedPassoutYears.sort();
        break;
      case "branches":
        setSelectedBranches(selectedValues);
        selectedBranches.sort();
        break;
      case "states":
        setSelectedStates(selectedValues);
        selectedStates.sort();
        break;
      case "plans":
        setSelectedPlans(selectedValues);
        selectedPlans.sort();
        break;
      default:
        break;
    }
    setCurrentPage(1); // Reset to the first page when the filter changes
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const resetValues = () => {
    setSelectedPassoutYears(["all"]);
    setSelectedBranches(["all"]);
    setSelectedStates(["all"]);
    setSelectedPlans(["all"]);
    setSearchTerm("");
    setCurrentPage(1);
  };

  // Calculate the indexes for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const pageNumbers = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className='loading-message'>
          <CircularProgress color="secondary" size={35} />
          <p style={{ color: "#bbbb" }}>Loading! Please be patient</p>
        </div>
      ) : (
        <>
          <div id="divOfTwo">
            <div className="Left">
              <div className="left-insider">
                <h3 style={{ textAlign: "center", fontSize: 25 }}>Search</h3>

                {/* Search Input */}
                <div className="search-bar">
                  <TextField
                    id="searchHai"
                    type="text"
                    label="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>

                {/* Passout Year Filter */}
                <div className="filter-1">
                  <h4 style={{ textAlign: "center", fontSize: 25 }}>Passout Year</h4>
                  {passoutYearOptions.map((year) => (
                    <div key={year}>
                      <label>
                        <input
                          type="checkbox"
                          value={year}
                          checked={selectedPassoutYears.includes(year)}
                          onChange={() => handleFilterChange("passoutYears", toggleArray(selectedPassoutYears, year))}
                        />
                        {year}
                      </label>
                    </div>
                  ))}
                </div>

                {/* State Filter */}
                <div className="filter-2">
                  <h4 style={{ textAlign: "center", fontSize: 25 }}>State</h4>
                  {stateOptions.map((state) => (
                    <div key={state}>
                      <label>
                        <input
                          type="checkbox"
                          value={state}
                          checked={selectedStates.includes(state)}
                          onChange={() => handleFilterChange("states", toggleArray(selectedStates, state))}
                        />
                        {state}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Degree Filter */}
                <div className="filter-3">
                  <h4 style={{ textAlign: "center", fontSize: 25 }}>Degree</h4>
                  {degreeOptions.map((degree) => (
                    <div key={degree}>
                      <label>
                        <input
                          type="checkbox"
                          value={degree}
                          checked={selectedPlans.includes(degree)}
                          onChange={() => handleFilterChange("plans", toggleArray(selectedPlans, degree))}
                        />
                        {degree}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Branch Filter */}
                <div className="filter-4">
                  <h4 style={{ textAlign: "center", fontSize: 25 }}>Branch</h4>
                  {branchOptions.map((branch) => (
                    <div key={branch}>
                      <label>
                        <input
                          type="checkbox"
                          value={branch}
                          checked={selectedBranches.includes(branch)}
                          onChange={() => handleFilterChange("branches", toggleArray(selectedBranches, branch))}
                        />
                        {branch}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="reset-btn">
                  <Button variant="contained" onClick={resetValues}>Reset all</Button>
                </div>
              </div>
            </div>
            <div className="container-fluid mt-5 Right">
              {error ? (
                <div className='error-message'><h1>Error loading data: {error.message}</h1></div>
              ) : (
                filteredUsers.length > 0 ? (
                  <div className="row text-center">
                    {filteredUsers.slice(indexOfFirstUser, indexOfLastUser).map((curElem) => (
                      <Link to={{
                        pathname: `Personal/${curElem._id}`,
                        state: { userData: curElem } // Pass the user data as props
                      }} key={curElem._id}>
                        <div className="col-10 col-md-4 mt-5">
                          <div className="cardBodyHai">
                            <img
                              src="https://th.bing.com/th/id/OIP.eXWcaYbEtO2uuexHM8sAwwHaHa?pid=ImgDet&rs=1"
                              alt="image"
                              className="cardKaImg"
                            />
                            <h3 className="cardKaName">{curElem.name}</h3>
                            <p className="cardKaEmail" style={{ color: "black" }}>Company: {curElem.company}</p>
                            <p className="cardKapara" style={{ color: "black" }}>Batch: {curElem.passoutyear}</p>
                            <p className="cardKapara" style={{ color: "black" }}>Department: {curElem.department}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className='no-data-message'><h1>Sorry!<br /><br /> No Data Available</h1></div>
                )
              )}
            </div>
          </div>
          <div className="pagination" style={{ display: filteredUsers.length > 0 ? "block" : "none" }}>
            <Button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <Backward fontSize="small" color="error" />
            </Button>
            {Array.from({ length: pageNumbers }).map((_, number) => (
              (number === 0 || number === pageNumbers - 1 || Math.abs(currentPage - (number + 1)) <= 2) ? (
                <Button color="warning"
                  key={number}
                  onClick={() => paginate(number + 1)}
                  className={currentPage === number + 1 ? "active" : ""}
                >
                  {number + 1}
                </Button>
              ) : null
            ))}
            <Button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === pageNumbers}
            >
              <Forward fontSize="small" color="error" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

function toggleArray(arr, value) {
  if (arr.includes(value)) {
    return arr.filter((item) => item !== value);
  } else {
    return [...arr, value];
  }
}
