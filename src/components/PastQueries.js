import React, { useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Paper,
} from "@mui/material";
import "./css/TableList.css";

const queries = ["Table1", "Table2", "Table3"]; // Replace with your actual table names

const PastQueries = () => {
  const [selectedQuery, setSelectedQuery] = useState("");

  const handleChange = (event) => {
    setSelectedQuery(event.target.value);
  };

  return (
    <Paper elevation={3}>
      <div style={{ backgroundColor: "#1976D2" }} className="selector-heading">
        <p className="selector-heading">Past Queries</p>
      </div>
      <div style={{ padding: "5%" }}>
        <FormControl variant="standard" fullWidth style={{ marginTop: "6%" }}>
          <InputLabel>Select Query</InputLabel>
          <Select value={selectedQuery} onChange={handleChange}>
            {queries.map((query, index) => (
              <MenuItem key={index} value={queries}>
                {query}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Paper>
  );
};

export default PastQueries;
