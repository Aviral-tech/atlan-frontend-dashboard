import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Paper,
} from "@mui/material";
import "./css/TableList.css";

const PastQueries = (props) => {
  const [selectedQuery, setSelectedQuery] = useState("");

  useEffect(() => {
    // Update selectedQuery when props.selectedQuery changes
    setSelectedQuery(props.selectedQuery);
  }, [props.selectedQuery]);

  const handleChange = (event) => {
    const selectedQuery = event.target.value;

    setSelectedQuery(selectedQuery);
    // Pass the selected query back to the parent component
    props.onQueryChange(selectedQuery);
  };

  return (
    <div>
      {props.data && (
        <Paper elevation={3}>
          <div
            style={{ backgroundColor: "#1976D2" }}
            className="selector-heading"
          >
            <p className="selector-heading">Past Queries</p>
          </div>
          <div style={{ padding: "4%" }}>
            <FormControl variant="standard" fullWidth>
              <InputLabel>Select Query</InputLabel>
              <Select value={selectedQuery} onChange={handleChange}>
                {props.data.map((query, index) => (
                  <MenuItem key={index} value={query}>
                    {query}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </Paper>
      )}
    </div>
  );
};

export default PastQueries;
