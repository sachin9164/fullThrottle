import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import "react-calendar-timeline/lib/Timeline.css";
import Calendar from "./Calendar";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 30 + rand();
  const left = 30 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 1000,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SimpleModal(user) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  //console.log(user);
  //var timeAndDate = moment(date).startOf(time);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        class="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        Click to View Details
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h6 id="simple-modal-title">{user.prop.real_name}</h6>
          <div>
            <Calendar user={user}></Calendar>
          </div>
          <br></br>
          <button
            onClick={handleClose}
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
