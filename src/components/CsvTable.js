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

import customers from "../customers.csv";
import employees from "../employees.csv";
import suppliers from "../suppliers.csv";
import territories from "../territories.csv";
import northwind from "../northwind.csv";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      fontWeight: "bold",
    },
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

const CsvTable = (props) => {
  const { data } = props.data;

  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const possibilities = [territories, northwind];

  useEffect(() => {
    const fetchData = async () => {
      if (props.data) {
        let parseData;

        if (props.selectedQuery) {
          const random = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
          {
            console.log(possibilities[random]);
          }
          parseData = await fetch(possibilities[random]);
        } else if (props.data === "Suppliers") {
          parseData = await fetch(suppliers);
        } else if (props.data === "Employees") {
          parseData = await fetch(employees);
        } else if (props.data === "Customers") {
          parseData = await fetch(customers);
        } else {
          parseData = await fetch(suppliers);
        }
        {
          console.log(props.data, parseData);
        }
        const textContent = await parseData.text();
        Papa.parse(textContent, {
          download: false, // Set to false since we're passing text directly
          header: true,
          complete: (result) => {
            setHeaders(Object.keys(result.data[0] || {}));
            setRows(result.data.map((row) => Object.values(row)));
            console.log(result);
          },
        });
      }
    };

    fetchData();
  }, [props.data, props.selectedQuery]);

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
