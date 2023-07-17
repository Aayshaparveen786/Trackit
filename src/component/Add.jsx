/* eslint-disable no-unused-vars */

import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTheme } from "@emotion/react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddUser from "./AddUser";
import { useSelector } from "react-redux";
// const names = ["Oliver Hansen"];
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
const Add = () => {
  const [value, setValue] = React.useState(dayjs("2023-07-10"));
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChangeDropdown = (event) => {
    // setPersonName(event.target.value);
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split() : value
    );
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const users = useSelector((store) => store.users);

  return (
    <div className="Add-main-container">
      <div className="heading-box">
        <button className="income-box">INCOME</button>
        <button className="expense-box">EXPENSE</button>
      </div>
      <form>
        <FormControl sx={{ m: 1, width: "30rem" }}>
          <InputLabel
            htmlFor="outlined-adornment-amount"
            sx={{ color: "black" }}
          >
            Amount
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker"]}
            sx={{ marginLeft: "34.2rem", marginTop: "2rem" }}
          >
            <DatePicker
              sx={{ width: "30rem" }}
              label="Date"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Box>
          <FormControl sx={{ width: "30rem", marginTop: "2rem" }}>
            <Select
              multiple
              displayEmpty
              value={personName}
              onChange={handleChangeDropdown}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Select Category</em>;
                }

                return selected.join();
              }}
              // MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                {/* <em>Placeholder</em> */}
              </MenuItem>
              {/* {names.map((name) => ( */}
              {users?.map((user, index) => (
                <MenuItem
                  key={index}
                  value={user.name}
                  // style={getStyles(name, personName, theme)}
                >
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <div className="center-text">
          <p>OR</p>
          <AddBoxIcon
            sx={{ color: "red", cursor: "pointer" }}
            onClick={handleClickOpen}
          />
          <span>Add Category</span>
        </div>
        <FormControl sx={{ marginTop: "2rem", width: "30rem" }}>
          <InputLabel
            htmlFor="outlined-adornment-amount"
            sx={{ color: "black" }}
          >
            Notes
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <div className="btn-box">
          {/* <button className="save-btn">Save</button> */}
          <Button
            sx={{
              background: "rgb(250, 182, 182)",
              marginTop: "2rem",
              cursor: "pointer",
              width: "10rem",
              color: "black",
              height: "2.5rem",
              fontSize: "1.5rem",
              borderRradius: "0.6rem",
              border: "none",
            }}
            // className="save-btn"
          >
            Save
          </Button>
        </div>
      </form>
      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          {/* <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Modal title
          </BootstrapDialogTitle> */}
          <AddUser />
          {/* <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save
            </Button>
          </DialogActions> */}
        </BootstrapDialog>
      </div>
    </div>
  );
};

export default Add;
