import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "../features/wordsSlice";
import lettersReducer from "../features/lettersSlice";

const store = configureStore({
  reducer: {
    words: wordReducer,
    letters: lettersReducer,
  },
});

export default store;
