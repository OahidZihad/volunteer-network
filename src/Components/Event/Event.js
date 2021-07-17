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
  const { name, imageUrl, _id } = props.event;

  const deleteEvent = (id, event) => {
    fetch(`http://localhost:4000/deleteEvent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          event.target.parentNode.style.display = "none";
        }
      });
  };

  return (
    <Grid>
      <Paper className={classes.paper}>
        <img
          style={{ height: "300px" }}
          // src={require(`../../images/${pic}`).default}
          src={imageUrl}
          alt=""
        />
        <h4>{name}</h4>
        {/* eslint-disable-next-line no-restricted-globals */}
        <button onClick={() => deleteEvent(_id, event)}>Remove</button>
      </Paper>
    </Grid>
  );
};

export default Event;
