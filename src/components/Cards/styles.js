import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: {
    marginTop: "20px",
    width: "300px",
    flex: "0 0 auto",
    border: "3px solid",
    borderRadius: "10px",
    overflow: "hidden",
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#f3e5f5",
  },

  cardDescription: {
    color: "",
    fontSize: 16,
    fontWeight: "bold",
  },

  starsContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    justifyContent: "center",
  },
  stars: {
    color: "#ffea00",
    marginRight: "5px",
  },

  owner: {
    "&.MuiTypography-root": {
      fontSize: 16,
      fontWeight: "bold",
    },
  },

  link: {
    display: "block",

    "&.MuiLink-root": {
      textDecoration: "none ",
      color: "black",
      textAlign: "center",
      marginTop: "20px",
      fontSize: 16,
      fontWeight: "bold",
      backgroundColor: "#2e7d32",
      borderRadius: "14px",
    },
  },
});

export default useStyles;
