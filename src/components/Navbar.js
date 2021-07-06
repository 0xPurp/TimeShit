import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TimeSheet from "@material-ui/icons/Event";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  input: {
    color: "white"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <TimeSheet />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TimeShit
          </Typography>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              label="Username"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
            />
          </form>
          <Button color="inherit" onClick="loginEvent()">
            <AccountCircle className={classes.menuButton} />
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
