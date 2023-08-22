import { createSlice } from "@reduxjs/toolkit";

const test =
  "# Welcome to my React Markdown Previewer! ## This is a sub-heading...";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    markdown: test,
  },
  reducers: {
    updateInput: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default inputSlice;
