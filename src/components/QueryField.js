import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Code, RestartAlt } from "@mui/icons-material";

const QueryField = ({ onExecute, onQueryChange }) => {
  const [query, setQuery] = useState("");

  const handleExecute = () => {
    console.log("Execute clicked with query:", query);
    // Add your logic to execute the query

    // Call the onExecute prop to append the query to oldQueries
    onExecute(query);
    onQueryChange(query);
  };

  const handleReset = () => {
    setQuery(""); // Reset the query state to an empty string
  };

  return (
    <div>
      <TextField
        id="filled-search"
        label="Enter SQL Query here"
        type="search"
        variant="filled"
        multiline
        rows={3}
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Grid className="query-button-grid" justifyContent="flex-end" container>
        <Grid className="query-button" md={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleExecute}
          >
            <Code />
            Execute
          </Button>
        </Grid>
        <Grid align="right" className="query-button" md={3}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={handleReset}
          >
            <RestartAlt />
            Reset
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default QueryField;
