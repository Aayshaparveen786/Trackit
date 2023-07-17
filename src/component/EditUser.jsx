import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { editUser } from "../redux/features/userSlice";

const EditUser = () => {
  // const params = useParams();
  // const dispatch = useDispatch();
  // const users = useSelector((store) => store.users);
  // // const navigate = useNavigate();
  // const existingUser = users.filter((user) => user.id === params.id);
  // const { name } = existingUser[0];
  // const [values, setValues] = useState({
  //   name,
  // });

  // const handleEditUser = () => {
  //   setValues({ name: "", email: "" });
  //   dispatch(
  //     editUser({
  //       id: params.id,
  //       name: values.name,
  //       // email: values.email,
  //     })
  //   );
  //   // navigate("/");
  // };
  const params = useParams();
  const id = params.id;

  const userx = useSelector((state) =>
    state.users.find((user) => user.id === id)
  );
  const [name, setname] = useState(userx.name);

  const dispatch = useDispatch();

  const handleEditUser = (e) => setname(e.target.value);

  const onSaveUserClicked = () => {
    if (name) {
      dispatch(editUser({ id: id, name }));
    }
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <FormControl
        sx={{
          width: "20rem",
          height: "5rem",
          marginLeft: "2rem",
          marginTop: "2rem",
          marginRight: "2rem",
        }}
        value={name}
        onChange={handleEditUser}
        // onChange={(e) => setValues({ ...values, name: e.target.value })}
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
      <button className="save-btn" onClick={onSaveUserClicked}>
        Save
      </button>
    </div>
  );
};

export default EditUser;
