import React from "react";
import { Card, CardContent, Typography, Box, Link } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import useStyles from "./styles";

const Cards = ({ repo }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} key={repo.id}>
      <CardContent>
        <Typography className={classes.cardTitle} variant="h6">
          {repo.name}
        </Typography>
        <hr />
        <Typography className={classes.cardDescription}>
          {repo.description}
        </Typography>
        <Box className={classes.starsContainer}>
          <StarIcon className={classes.stars} fontSize="small" />
          <Typography>{repo.stargazers_count}</Typography>
        </Box>
        <Typography className={classes.owner}>
          Proprietário: {repo.owner.login}
        </Typography>
        <Link
          className={classes.link}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver repositório no GitHub
        </Link>
      </CardContent>
    </Card>
  );
};

export default Cards;
