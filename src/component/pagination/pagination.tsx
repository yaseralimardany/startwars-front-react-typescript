import React from 'react';
import './pagination.css';
import { PaginationParams } from "./paginationConstant";

function Pagination(paginationParams: PaginationParams) {
  if (!paginationParams || !paginationParams.pageInfo) {
    return null;
  }

  const { previousPage, nextPage, currentPage, totalCount } = paginationParams.pageInfo;
  const goToPage = paginationParams.goToPage;

  if (!paginationParams.goToPage) {
    return null;
  }

  const showPreviousPageItem = () => {
    if (previousPage) {
      return <span onClick={() => goToPage(previousPage)} className={"pagination_item previous"}>{previousPage}</span>
    }

    return null;
  }

  const showNextPageItem = () => {
    if (nextPage) {
      return <span onClick={() => goToPage(nextPage)} className={"pagination_item next"}>{nextPage}</span>
    }

    return null;
  }

  const showCurrentPageItem = () => {
    if (currentPage) {
      return <span className={"pagination_item current"}>{currentPage}</span>
    }

    return null;
  }

  const showTotalCount = () => {
    if (totalCount) {
      return <span className={"pagination_item total_count"}>Total: {totalCount}</span>
    }

    return null;
  }

  return (
    <div className="pagination_container">
      <span className={"pagination_item title"}>Page: </span>
      {showPreviousPageItem()}
      {showCurrentPageItem()}
      {showNextPageItem()}
      {showTotalCount()}
    </div>
  );
}

export default Pagination;
