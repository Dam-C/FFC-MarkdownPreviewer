import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    markdown:
      "# Welcome to my React Markdown Previewer! ## This is a sub-heading...",
  },
  reducers: {
    updateInput: (state, action) => {
      state.markdown = action.payload;
    },
  },
});

export const { updateInput } = inputSlice.actions;

export default inputSlice;
