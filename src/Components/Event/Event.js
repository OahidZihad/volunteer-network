import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    margin: "8px",
    color: theme.palette.text.secondary,
  },
}));

const Event = (props) => {
  const classes = useStyles();
  const { name, pic } = props.event;
  return (
    <Grid>
      <Paper className={classes.paper}>
        <img
          style={{ height: "300px" }}
          src={require(`../../images/${pic}`).default}
          alt=""
        />
        <h4>{name}</h4>
      </Paper>
    </Grid>
  );
};

export default Event;
