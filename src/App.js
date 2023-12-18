import "./App.css";
import { Grid, TextField, Button } from "@mui/material";
import { blue, purple } from "@mui/material/colors";
import "./query.css";
import { Code, RestartAlt } from "@mui/icons-material";
import CsvTable from "./components/CsvTable";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: purple,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid container spacing={2}>
          <Grid className="container" md={4}>
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
            <Grid
              className="query-button-grid"
              justifyContent="flex-end"
              container
            >
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
          </Grid>
          <Grid md={8}>
            <div className="container query-result limit-box">
              <CsvTable />
            </div>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
