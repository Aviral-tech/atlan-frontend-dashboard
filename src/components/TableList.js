import React, { useState } from "react";

import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Paper,
  Typography,
} from "@mui/material";
import "./css/TableList.css";

const tableData = {
  Employees: {
    description: "Table storing information about employees.",
    columns: ["CustomerID", "CompanyName", "ContactName", "Country"],
  },
  Suppliers: {
    description: "Table storing information about suppliers.",
    columns: ["CategoryID", "CategoryName", "Description"],
  },
  Customers: {
    description: "Table storing information about customers.",
    columns: ["EmployeeID", "FirstName", "LastName", "Title"],
  },
};

const tableNames = Object.keys(tableData);

const TableList = ({ onTableSelect, onQueryChange, selectedQuery }) => {
  const [selectedTable, setSelectedTable] = useState("Employee");
  const selectedTableData = tableData[selectedTable];

  const handleChange = (event) => {
    const selectedTableName = event.target.value;
    setSelectedTable(selectedTableName);
    onTableSelect(selectedTableName);
    onQueryChange("");
  };

  return (
    <Paper elevation={3}>
      <div style={{ backgroundColor: "#1976D2" }} className="selector-heading">
        <p>Table Viewer</p>
      </div>
      <div style={{ padding: "5%" }}>
        <FormControl variant="standard" fullWidth>
          <InputLabel>Select Table</InputLabel>
          <Select value={selectedTable} onChange={handleChange}>
            {tableNames.map((tableName, index) => (
              <MenuItem key={index} value={tableName}>
                {tableName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {selectedTableData && !selectedQuery && (
          <div style={{ marginTop: "10px" }}>
            <Typography variant="subtitle1" gutterBottom>
              <b> Description:</b>
            </Typography>
            <Typography>{selectedTableData.description}</Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginTop: "5px" }}
            >
              <b>Columns:</b>
            </Typography>
            <ul>
              {selectedTableData.columns.map((column, index) => (
                <li key={index}>{column}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Paper>
  );
};

export default TableList;
