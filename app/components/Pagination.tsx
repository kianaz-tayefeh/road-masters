import { PAGINATION_LIMIT, PAGINATION_TOTAL_PAGE } from "~/constants/options";

//the api has to return totalPage inside the pagination attribute of the response
// but Unfo we dont have it, this totalpage=5 is completely temporary solution
const Pagination = ({
  totalPages = PAGINATION_TOTAL_PAGE,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <nav aria-label="Page navigation">
      <input type="hidden" value={currentPage} name="page" />
      <input type="hidden" value={PAGINATION_LIMIT} name="limit" />
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <div
            className="page-link"
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </div>
        </li>
        {Array.from({ length: totalPages }).map((_, page) => (
          <li
            key={page}
            className={`page-item ${page + 1 === currentPage ? "active" : ""}`}
          >
            <div className="page-link" onClick={() => setCurrentPage(page + 1)}>
              {page + 1}
            </div>
          </li>
        ))}
        <li className="page-item">
          <div
            className={`page-link ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
