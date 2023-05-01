import { useState } from "react";
import PropTypes from "prop-types";

const usePagination = ({ data, initialSize, initialPage }) => {
  const [pageSize, setPageSize] = useState(initialSize);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const paginatedData = data.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize);

  return [paginatedData, currentPage, setCurrentPage, pageSize, setPageSize];
};

usePagination.propTypes = {
  data: PropTypes.array,
  initialSize: PropTypes.number,
  initialPage: PropTypes.number
};

usePagination.defaultProps = {
  initialSize: 10,
  initialPage: 1
};

export default usePagination;
