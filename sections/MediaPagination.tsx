import * as React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";

export interface IPaginationProps {
  initialPage?: number;
  marginPagesDisplayed?: number;
  pageCount?: number;
  pageRangeDisplayed?: number;
  onChange: ({ selected }: { selected: number }) => void;
}

export const MediaPagination: React.FC<IPaginationProps> = ({
  initialPage,
  marginPagesDisplayed,
  pageCount,
  pageRangeDisplayed,
  onChange,
}) => {
  return (
    <ReactPaginate
      initialPage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onChange}
      containerClassName="Pagination"
      activeClassName="Pagination__active"
      pageLinkClassName="Pagination__pagr-link"
      breakLinkClassName="Pagination__pagr-link"
    />
  );
};
