import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import previewSlice from "./previewSlice";
import windowsSlice from "./windowsSlice";

export const store = configureStore({
  reducer: {
    input: inputSlice.reducer,
    preview: previewSlice.reducer,
    windows: windowsSlice.reducer,
  },
});
