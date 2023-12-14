import axios from "axios";

export const searchRepositories = async (inputPesquisa, page, itemsPerPage) => {
  const baseUrl = "https://api.github.com/search/repositories";
  

  const params = {
    q: inputPesquisa,
    page,
    per_page: itemsPerPage,
  };

  try {
    const response = await axios.get(baseUrl, { params});

    return {
      repositories: response.data.items,
      totalPages: Math.ceil(response.data.total_count / itemsPerPage),
      error: null,
      apiStatus: response.status,
    };
  } catch (error) {
    console.error("Erro ao pesquisar repositórios:", error);

    if (error.response && error.response.status === 403) {
      return {
        repositories: [],
        totalPages: 1,
        error: "Limite de taxa de API excedido. Tente novamente mais tarde.",
      };
    }
  }
};
