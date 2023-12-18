import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Code, RestartAlt } from "@mui/icons-material";

const QueryField = () => {
  return (
    <div>
      <TextField
        id="filled-search"
        label="Enter SQL Query here"
        type="search"
        variant="filled"
        multiline
        rows={4}
        maxRows={8}
        fullWidth
      />
      <Grid className="query-button-grid" justifyContent="flex-end" container>
        <Grid className="query-button" md={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => {
              console.log("clicked");
            }}
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
            onClick={() => {
              console.log("clicked");
            }}
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
