import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination className="text-white" count={10} shape="rounded" color="primary" />
      {/*<Pagination count={10} variant="outlined" shape="rounded" />*/}
    </Stack>
  );
}
