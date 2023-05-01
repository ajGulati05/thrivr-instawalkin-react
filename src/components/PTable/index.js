import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PButtonSecondary from "../PButtonSecondary";
import PDropdown from "../PDropdown";
import { usePagination } from "../../hooks";
import { CustomizedTable, PaginationSection, PagenationWrap, PageNumberWrap, PagePerRow } from "./styled";
import PInput from "../PInput";

const pageRows = [
  { value: 5, name: "5 Rows" },
  { value: 10, name: "10 Rows" },
  { value: 20, name: "20 Rows" },
  { value: 25, name: "25 Rows" },
  { value: 30, name: "30 Rows" },
  { value: 40, name: "40 Rows" }
];

const PTable = ({
  columns,
  data,
  pageRows,
  initialSize,
  initialPage,
  totals,
  totalRowsNum,
  pagenationType,
  currentPageNetwork,
  pageSizeNetwork,
  handlePageNetwork,
  handlePageSizeNetwork,
  rowClickableStyle,
  ...rest
}) => {
  const [paginatedData, currentPage, setCurrentPage, pageSize, setPageSize] = usePagination({
    data,
    initialSize,
    initialPage
  });
  const [tableCurrentPage, setTableCurrentPage] = useState(1);
  const [tablePageSize, setTablePageSize] = useState(pageSizeNetwork);

  const totalPage =
    pagenationType === "local" ? Math.ceil(data.length / pageSize) : Math.ceil(totalRowsNum / pageSizeNetwork);

  function handleClick(arrow) {
    if (arrow === "next") {
      pagenationType === "local" ? setCurrentPage(tableCurrentPage + 1) : handlePageNetwork(tableCurrentPage + 1);
    } else {
      pagenationType === "local" ? setCurrentPage(tableCurrentPage - 1) : handlePageNetwork(tableCurrentPage - 1);
    }
  }

  function handleRows(rows) {
    const virtualTotal = rows * tableCurrentPage;
    setTablePageSize(rows);
    if (virtualTotal > totals) {
      const currentPageNum = 1;
      setTableCurrentPage(currentPageNum);
      pagenationType === "local" ? setCurrentPage(currentPageNum) : handlePageNetwork(currentPageNum);
    }
    pagenationType === "local" ? setPageSize(rows) : handlePageSizeNetwork(rows);
  }

  const pageNumValidation = page => {
    let validPageNum = initialPage;
    const onlyNum = /^[0-9]*$/.test(page);
    if (!onlyNum || page === 0) {
      validPageNum = 1;
    } else {
      if (totalPage >= page) {
        validPageNum = page;
      } else {
        validPageNum = totalPage;
      }
    }
    return validPageNum;
  };

  const handleChange = e => {
    const page = parseInt(e.target.value);
    const validPageNum = pageNumValidation(page);
    setTableCurrentPage(validPageNum);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      const currentPageNum =
        tableCurrentPage && parseInt(tableCurrentPage) !== 0 ? tableCurrentPage : currentPageNetwork;
      if (totalPage >= currentPageNum) {
        setTableCurrentPage(currentPageNum);
        pagenationType === "local" ? setCurrentPage(currentPageNum) : handlePageNetwork(currentPageNum);
      } else {
        setTableCurrentPage(currentPageNetwork);
      }
    }
  };

  useEffect(() => {
    const pageNum = pagenationType === "local" ? currentPage : currentPageNetwork;
    setTableCurrentPage(pageNum);
  }, [pagenationType, currentPage, currentPageNetwork]);

  useEffect(() => {
    const pageSizeNum = pagenationType === "local" ? pageSize : pageSizeNetwork;
    setTablePageSize(pageSizeNum);
  }, [pagenationType, pageSize, pageSizeNetwork]);

  return (
    <div>
      <CustomizedTable
        columns={columns}
        pagination={false}
        dataSource={pagenationType === "local" ? paginatedData : data}
        bordered={true}
        size="small"
        sticky
        rowClickableStyle={rowClickableStyle}
        totals={totals}
        {...rest}
      />
      {(pagenationType === "local" ? data.length : totalRowsNum) > 5 && (
        <PaginationSection>
          <PButtonSecondary
            ptype="default"
            pname="Previous"
            psecondaryAlign="left"
            psecondary={<i className="fa fa-arrow-left" />}
            onClick={() => handleClick("previous")}
            disabled={parseInt(tableCurrentPage) === 1 || parseInt(tableCurrentPage) === 0}
          />
          <PagenationWrap>
            <PageNumberWrap>
              Page
              <PInput
                width="62px"
                mLeft="4px"
                mRight="4px"
                value={tableCurrentPage}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
              of {totalPage}
            </PageNumberWrap>
            <PagePerRow>
              <PDropdown
                items={pageRows}
                value={tablePageSize}
                defaultValue={pageRows[0].value}
                width="110px"
                handleChange={handleRows}
              />
            </PagePerRow>
          </PagenationWrap>
          <PButtonSecondary
            ptype="default"
            pname="Next"
            psecondaryAlign="right"
            psecondary={<i className="fa fa-arrow-right" />}
            onClick={() => handleClick("next")}
            disabled={
              parseInt(tableCurrentPage) === parseInt(totalPage) || parseInt(tableCurrentPage) > parseInt(totalPage)
            }
          />
        </PaginationSection>
      )}
    </div>
  );
};

PTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
  pageRows: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      name: PropTypes.string
    })
  ),
  initialSize: PropTypes.number,
  initialPage: PropTypes.number,
  totals: PropTypes.bool,
  totalRowsNum: PropTypes.number,
  pagenationType: PropTypes.oneOf(["local", "network"]),
  currentPageNetwork: PropTypes.number,
  pageSizeNetwork: PropTypes.number,
  rowClickableStyle: PropTypes.bool,
  handlePageNetwork: PropTypes.func,
  handlePageSizeNetwork: PropTypes.func
};

PTable.defaultProps = {
  data: [],
  pageRows: pageRows,
  initialSize: 5,
  initialPage: 1,
  totals: false,
  pagenationType: "local",
  rowClickableStyle: false
};

export default PTable;
