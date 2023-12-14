import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  appBar: {
    "&.MuiAppBar-root": {
      backgroundColor: "#1F2328",
    },
  },

  iconButton: {
    "& .MuiSvgIcon-root": {
      color: "#ffffff",
    },
  },

  inputSpacing: {
    flexGrow: 1,
  },
  searchInput: {
    "& input": {
      color: "#f3e5f5",
      padding: "7px 15px",
    },
    "&.MuiInputBase-input-MuiOutlinedInput-input": {
      background: "#ffffff",
      backgroundColor: "red",
    },
    "& fieldset": {
      borderColor: "#ffffff",
    },
  },

  button: {
    "&.MuiButton-root": {
      marginLeft: 15,
    },
  },
});

export default useStyles;
