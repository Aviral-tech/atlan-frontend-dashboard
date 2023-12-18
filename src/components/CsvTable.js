import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  tableCellClasses,
  TableSortLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import orderCsv from "../customers.csv";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CsvTable = () => {
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");

  useEffect(() => {
    Papa.parse(orderCsv, {
      download: true,
      header: true,
      complete: (result) => {
        setHeaders(Object.keys(result.data[0] || {}));
        setRows(result.data.map((row) => Object.values(row)));
      },
    });
  }, []);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedRows = rows.sort((a, b) => {
    if (order === "asc") {
      return a[headers.indexOf(orderBy)] > b[headers.indexOf(orderBy)] ? 1 : -1;
    } else {
      return a[headers.indexOf(orderBy)] < b[headers.indexOf(orderBy)] ? 1 : -1;
    }
  });

  return (
    <TableContainer className="limit-box" component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <StyledTableCell key={index}>
                <TableSortLabel
                  active={orderBy === header}
                  direction={orderBy === header ? order : "asc"}
                  onClick={() => handleRequestSort(header)}
                >
                  {header}
                </TableSortLabel>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row, rowIndex) => (
            <StyledTableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={rowIndex}
            >
              {row.map((value, cellIndex) => (
                <StyledTableCell key={cellIndex}>{value}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CsvTable;
