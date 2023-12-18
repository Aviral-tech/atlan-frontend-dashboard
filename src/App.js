import "./App.css";
import React, { useState } from "react";

import { Grid } from "@mui/material";
import { blue, purple } from "@mui/material/colors";
import "./query.css";

import CsvTable from "./components/CsvTable";
import QueryField from "./components/QueryField";
import TableList from "./components/TableList";
import PastQueries from "./components/PastQueries";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: purple,
  },
});

function App() {
  const [selectedTable, setSelectedTable] = useState("Employees");
  const [selectedQuery, setSelectedQuery] = useState("");
  const [oldQueries, setOldQueries] = useState([]);

  const handleTableSelect = (selectedTable) => {
    setSelectedTable(selectedTable);
    // Use the selected table as needed
  };

  const appendToOldQueries = (query) => {
    setOldQueries((prevQueries) => {
      const newQueries = [...prevQueries, query];
      // Keep a maximum length of 5
      return newQueries.slice(-5);
    });
  };

  const handleQueryChange = (query) => {
    setSelectedQuery(query); // Update selectedQuery when the query text changes
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid container spacing={2}>
          <Grid className="container" md={4}>
            <QueryField
              onExecute={appendToOldQueries}
              onQueryChange={handleQueryChange}
            />
            <Grid className="container-box" container>
              <Grid md={12}>
                <TableList
                  onTableSelect={handleTableSelect}
                  onQueryChange={handleQueryChange}
                  selectedQuery={selectedQuery}
                />
              </Grid>
            </Grid>
            <Grid className="container-box" container>
              <Grid md={12}>
                <PastQueries
                  selectedQuery={selectedQuery}
                  data={oldQueries}
                  appendToOldQueries={appendToOldQueries}
                  onQueryChange={handleQueryChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid md={8}>
            <div className="container query-result limit-box">
              {selectedTable && (
                <CsvTable data={selectedTable} selectedQuery={selectedQuery} />
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
