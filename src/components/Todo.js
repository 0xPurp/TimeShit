import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function Todo() {
  const classes = useStyles();
  return (
    <form
      onSubmit={this.handleSubmit}
      style={{ display: "flex", marginTop: "2em" }}
    >
      <Input
        placeholder="Todo"
        inputProps={{
          "aria-label": "Description"
        }}
        onChange={this.handleChange}
        inputRef={this.inputRef}
      />
      <TextField
        id="datetime-local"
        label="Begin"
        type="datetime-local"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id="datetime-local"
        label="End"
        type="datetime-local"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
}
