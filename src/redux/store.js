import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";

import windowsSlice from "./windowsSlice";

export const store = configureStore({
  reducer: {
    input: inputSlice.reducer,
    windows: windowsSlice.reducer,
  },
});
