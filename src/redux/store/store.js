import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "../features/wordsSlice";
import lettersReducer from "../features/lettersSlice";
import scoreReducer from "../features/scoreSlice";

const store = configureStore({
  reducer: {
    words: wordReducer,
    letters: lettersReducer,
    score: scoreReducer,
  },
});

export default store;
