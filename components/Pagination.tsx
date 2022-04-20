import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-10 gap-1">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <div>
              <li key={number} className="page-item">
                <a onClick={() => paginate(number)} className="page-link">
                  {number}
                </a>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Pagination; /*}

/*import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination className="text-white" count={10} shape="rounded" color="primary" />
      {/*<Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
} */
