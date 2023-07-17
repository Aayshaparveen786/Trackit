import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      console.log("edituser", action);
      // const { id, name } = action.payload;
      // const existingUser = state.find((user) => user.id === id);
      // if (existingUser) {
      //   existingUser.name = name;
      // existingUser.email = email;
      state.user = state.user.map((user) =>
        user.id == action.payload.id ? action.payload : user
      );
    },
    deleteUser: (state, action) => {
      // const { id } = action.payload;
      // const existingUser = state.find((user) => user.id === id);
      // if (existingUser) {
      //   return state.filter((user) => user.id !== id);
      // }
      console.log("delete", action.payload);
      state.splice(action.payload, 1);
      // return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
