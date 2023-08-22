import { createSlice } from "@reduxjs/toolkit";

const test = "does it work ?";

const previewSlice = createSlice({
  name: "preview",
  initialState: {
    markdown: test,
  },
  reducers: {
    updatePreview: (state, action) => {
      state = action.payload;
    },
  },
});

export default previewSlice;
