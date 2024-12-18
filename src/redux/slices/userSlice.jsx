import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("login", async (userData) => {
  try {
    const response = await axios.post(
      "https://authentication-api-ocdl.onrender.com/login",
      userData
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    loading: "idle",
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      state.state = "success";
      state.data = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = "faild";
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
