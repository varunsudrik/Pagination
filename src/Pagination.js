import React, { useState } from "react";
import "./Pagination.css";
import data from "./data";

const Pagination = () => {
  // to display Number of items per page
  const itemsPerPage = 5;

  // Total number of pages required to display all items
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Current page state
  const [currentPage, setCurrentPage] = useState(1);

  // Items to display on selected page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Next page function
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous page function
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="wrapper">
      <div className="pagination-container">
        <h1>Nutrition</h1>
        {/* Map function to display data in frontend */}
        <table className="item-table">
          <thead>
            <tr>
              <th>Dessert (100g serving) </th>
              <th>Calories</th>
              <th>Protein (g)</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{item.dessert}</td>
                <td>{item.calories}</td>
                <td>{item.protein}</td>
                <hr />
              </tr>
            ))}
          </tbody>
        </table>
        {/* to display page numbers */}
        <div className="pagination">
          <button onClick={previousPage} disabled={currentPage === 1}>
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
