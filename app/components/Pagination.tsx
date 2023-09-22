import React from "react";
import { PAGINATION_LIMIT, PAGINATION_TOTAL_PAGE } from "~/constants/options";
import { NextIcon } from "./icons/NextIcon";

interface PaginationProps {
  totalPages?: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages = PAGINATION_TOTAL_PAGE,
  currentPage,
  setCurrentPage,
}) => {
  const isLastPage = currentPage === totalPages;

  return (
    <nav aria-label="Page navigation">
      <input type="hidden" value={currentPage} name="page" />
      <input type="hidden" value={PAGINATION_LIMIT} name="limit" />
      <div className="row">
        <ul className="pagination pagination-sm col-7  justify-content-end">
          {Array.from({ length: totalPages }).map((_, page) => {
            const pageNumber = page + 1;
            const isCurrentPage = pageNumber === currentPage;
            const isAroundCurrentPage =
              pageNumber >= currentPage - 2 && pageNumber <= currentPage + 1;

            const shouldDisplayPage =
              pageNumber === 1 || // Always show the first page
              pageNumber === totalPages ||
              isCurrentPage ||
              isAroundCurrentPage;

            if (shouldDisplayPage) {
              return (
                <li
                  key={page}
                  className={`page-item ${isCurrentPage ? "active" : ""}`}
                >
                  <div
                    className="page-link"
                    onClick={() =>
                      currentPage >= 1 ? setCurrentPage(pageNumber) : null
                    }
                  >
                    {pageNumber}
                  </div>
                </li>
              );
            } else if (
              (pageNumber === 2 && currentPage > 4) ||
              (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
            ) {
              return (
                <li key={page} className="page-item disabled">
                  <div className="page-link">...</div>
                </li>
              );
            }
            return null; // Hide other pages with "..."
          })}
        </ul>
        <a
          href="#"
          className={`text-black text-decoration-none col-4 text-center ms-lg-11 ${
            isLastPage ? "disabled" : ""
          }`}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next Page
          <span className="ms-1">
            <NextIcon />
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Pagination;
