import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Card } from "./Card";
import "./styles.css";
import data from "./pitstop.json";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

const PER_PAGE = 9;

export function Pagepitstop() {
  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;
  const currentPageData = data.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <>
      <h1
        style={{
          marginTop: "0",
          paddingTop: "30px",
          backgroundColor: "#d2d8de",
        }}
      >
        1:18 Ferrari Pit Stop
      </h1>

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
