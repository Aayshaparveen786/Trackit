import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { addUser } from "../redux/features/userSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
  });

  const handleAddUser = () => {
    setValues({ name: "" });
    console.log("name", values);
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
      })
    );
  };

  return (
    <div className="AddUser">
      <FormControl
        sx={{
          width: "20rem",
          height: "5rem",
          marginLeft: "2rem",
          marginTop: "2rem",
          marginRight: "2rem",
        }}
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      >
        <InputLabel htmlFor="outlined-adornment-amount" sx={{ color: "black" }}>
          Amount
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          label="Amount"
        />
      </FormControl>
      <button className="save-btn" onClick={handleAddUser}>
        Save
      </button>
    </div>
  );
};

export default AddUser;
