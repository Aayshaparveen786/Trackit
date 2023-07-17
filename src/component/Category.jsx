/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteUser } from "../redux/features/userSlice";
import { DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddUser from "./AddUser";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const Category = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const removeUser = (user) => {
    dispatch(deleteUser(user));
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="Category-main-container">
      <div className="category-heading">Category</div>
      <div className="two-colunm">
        <div className="income">INCOME</div>
        <hr />
        <div className="expance">EXPANCE</div>
      </div>
      <div>
        {users?.map((user, index) => (
          <div key={index} className="category-list">
            <p className="list-name">{user.name}</p>
            <EditIcon sx={{ marginRight: "2rem" }} onClick={handleClickOpen} />

            <DeleteIcon
              sx={{ cursor: "pointer" }}
              onClick={() => removeUser(user)}

              // onClick={() => dispatch(deleteUser(user.name))}
            />
          </div>
        ))}
      </div>
      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <AddUser />
        </BootstrapDialog>
      </div>
    </div>
  );
};

export default Category;
