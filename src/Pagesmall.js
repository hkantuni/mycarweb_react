import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Card } from "./Card";
import "./styles.css";
import data from "./data43.json";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import carbrands from "./carbrands.json";
import country from "./country.json";

const PER_PAGE = 9;

export function Pagesmall() {
  const [currentPage, setCurrentPage] = useState(0);
  const [filterByMake, setfilterByMake] = useState("");
  const [filterByCountry, setfilterByCountry] = useState("");

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  function handleFilterClickByMake(event) {
    setfilterByMake(event.target.value);
  }

  function handleFilterClickByCountry(event) {
    setfilterByCountry(event.target.value);
  }

  const filteredDataByMake =
    filterByMake === "All" || filterByMake === ""
      ? data
      : data.filter((item) => item.make.includes(filterByMake));

  const filteredDataByCountry =
    filterByCountry === "All" || filterByCountry === ""
      ? filteredDataByMake
      : filteredDataByMake.filter((item) =>
          item.country.includes(filterByCountry)
        );

  const offset = currentPage * PER_PAGE;
  const currentPageData = filteredDataByCountry.slice(
    offset,
    offset + PER_PAGE
  );
  const pageCount = Math.ceil(filteredDataByCountry.length / PER_PAGE);

  return (
    <>
      <h1
        style={{
          marginTop: "0",
          paddingTop: "30px",
          backgroundColor: "#d2d8de",
        }}
      >
        1:43 Scale Models
      </h1>
      <div className="filters">
        <div className="dropdown">
          <label className="filterlables">filter by car make</label>
          <div
            className="dropdown btn btn-secondary filter-btn"
            aria-labelledby="dropdownMenuButton"
          >
            <select
              className="filter-area"
              value={filterByMake}
              onChange={handleFilterClickByMake}
            >
              <option key="all" value="All">
                All
              </option>
              {carbrands.map((car) => (
                <option className="filter-brands" key={car.id} value={car.make}>
                  {car.make}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="dropdown">
          <label className="filterlables">filter by country</label>
          <div
            className="dropdown btn btn-secondary filter-btn"
            aria-labelledby="dropdownMenuButton"
          >
            <select
              className="filter-area"
              value={filterByCountry}
              onChange={handleFilterClickByCountry}
            >
              <option key="all" value="All">
                All
              </option>
              {country.map((car) => (
                <option
                  className="filter-brands"
                  key={car.id}
                  value={car.country}
                >
                  {car.country}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card-deck">
          {currentPageData.map((item) => (
            <Card
              key={item.id}
              make={item.make}
              model={item.model}
              description={item.description}
              url={item.url}
              placeholder={item.placeholder}
            />
          ))}
        </div>
        {pageCount > 1 && (
          <div className="card-deck">
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
          </div>
        )}
        <Link className="btn" to="/" style={{ marginBottom: "40px" }}>
          Back to Main Page
        </Link>
      </div>

      <Footer />
    </>
  );
}
