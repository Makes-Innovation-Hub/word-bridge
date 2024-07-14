import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllLetters = createAsyncThunk(
  "letters/getAllLetters",
  async () => {
    try {
      const response = await axios.get(
        "https://word-bridge.onrender.com/api/v1/letters"
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching letters:", error.message);
      throw error;
    }
  }
);
