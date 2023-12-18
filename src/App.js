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

  const handleTableSelect = (selectedTable) => {
    setSelectedTable(selectedTable);
    // Use the selected table as needed
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid container spacing={2}>
          <Grid className="container" md={4}>
            <QueryField />
            <Grid className="container-box" container>
              <Grid md={12}>
                <TableList onTableSelect={handleTableSelect} />
              </Grid>
            </Grid>
            <Grid className="container-box" container>
              <Grid md={12}>
                <PastQueries />
              </Grid>
            </Grid>
          </Grid>
          <Grid md={8}>
            <div className="container query-result limit-box">
              {selectedTable && <CsvTable data={selectedTable} />}
            </div>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
