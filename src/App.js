import React, { useState } from "react";
import { Pagination, CircularProgress, Typography, Grid } from "@mui/material";
import Cards from "./components/Cards/Cards";
import InputPesquisa from "./components/InputPesquisa/InputPesquisa";
import { searchRepositories } from "./api";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 4;

  const handleSearch = async () => {
    setRepositories([]);
    setError(null);
    setLoading(true);

    if (!searchTerm) {
      setError("");
      setLoading(false);
      return;
    }

    const { repositories, totalPages, error } = await searchRepositories(
      searchTerm,
      page,
      itemsPerPage
    );

    setRepositories(repositories);
    setTotalPages(totalPages);
    setError(error);
    setLoading(false);
  };

  const handleClear = () => {
    setSearchTerm("");
    setRepositories([]);
    setError(null);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    handleSearch();
  };

  return (
    <Grid>
      <Grid>
        <InputPesquisa
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClear={handleClear}
          handleSearch={handleSearch}
        />
        <Grid>
          <Grid>
            <Typography className="center-text" variant="h4">
              Pesquisa de repositório GitHub
            </Typography>
            <Typography className="center-texto">
              Digite o nome do repositório no campo de pesquisa facilmente.
            </Typography>
          </Grid>
          <Grid className="content">
            {loading && <CircularProgress className="loading-progress" />}
            {error && <Typography>{error}</Typography>}
            {repositories.length === 0 && !loading && !error && searchTerm &&(
              <Typography>
                Nenhum repositório encontrado para "{searchTerm}". Digite outro
                repositório.
              </Typography>
)}
           
          </Grid>
          {repositories.length > 0 && (
            <Grid className="repo-cards-container">
              {repositories.map((repo) => (
                <Cards key={repo.id} repo={repo} />
              ))}
            </Grid>
          )}

          {totalPages > 1 && !loading && !error && (
            <Pagination
              className="pagination"
              count={5}
              page={page}
              onChange={handlePageChange}
              color="success"
              size="large"
              siblingCount={1}
              boundaryCount={1}
              showFirstButton
              showLastButton
              pageSize={itemsPerPage}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
