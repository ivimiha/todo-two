import React, { useState } from "react";
import "./TodoList.css";
import db from "../firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  ListItem,
  List,
  ListItemText,
  Modal,
  makeStyles,
  Button,
} from "@material-ui/core";
import SelectInput from "@material-ui/core/Select/SelectInput";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "#fff",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TodoList(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    // Update the todo with new input text
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>I am a modal</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemText primary={props.todo.todo} />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit</button>
        <DeleteIcon
          onClick={(event) => {
            db.collection("todos").doc(props.todo.id).delete();
          }}
        />
      </List>
    </>
  );
}

export default TodoList;
