import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllWords = createAsyncThunk("words/getAllWords", async () => {
  try {
    const response = await axios.get(
      "https://word-bridge.onrender.com/api/v1/words"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching words:", error.message);
    throw error;
  }
});
