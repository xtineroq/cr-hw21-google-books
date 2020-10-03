import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function SaveModal({ children, onClick }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    onClick();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton type="button" onClick={handleOpen}>
        {children}
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{ backgroundColor: "black" }}>
            <h2 id="transition-modal-title" style={{ color: "#f50057" }}>
              Book Saved!
            </h2>
            <p id="transition-modal-description" style={{ color: "#f50057" }}>
              View your saved books in the Saved tab.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default SaveModal;
