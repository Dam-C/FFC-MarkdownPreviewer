import { createSlice } from "@reduxjs/toolkit";

const windowsSlice = createSlice({
  name: "windows",
  initialState: {
    input: true,
    preview: true,
  },
  reducers: {
    toggleInput: (state) => {
      state.input = !state.input;
    },
    togglePreview: (state) => {
      state.preview = !state.preview;
    },
  },
});

export const { toggleInput, togglePreview } = windowsSlice.actions;

export default windowsSlice;
