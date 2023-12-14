import React from "react";
import {
  TextField,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Grid,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import useStyles from "./styles";

const InputPesquisa = ({
  searchTerm,
  setSearchTerm,
  handleClear,
  handleSearch,
}) => {
  const classes = useStyles();

  return (
    <Grid>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton className={classes.iconButton} fontSize="large">
            <GitHubIcon />
          </IconButton>
          <Box className={classes.inputSpacing} />
          <TextField
            className={classes.searchInput}
            type="text"
            placeholder="Digite um repositório"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            size="small"
          />

          <Button
            className={classes.button}
            variant="contained"
            color="error"
            onClick={handleClear}
          >
            Limpar
          </Button>

          <Button
            className={classes.button}
            variant="contained"
            color="success"
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default InputPesquisa;
