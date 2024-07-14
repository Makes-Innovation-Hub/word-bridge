import { createSlice } from "@reduxjs/toolkit";
import { getAllLetters } from "../thunk/lettersThunk";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const lettersSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllLetters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllLetters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllLetters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default lettersSlice.reducer;
