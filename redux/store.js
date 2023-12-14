import { configureStore } from "@reduxjs/toolkit";

import demoReducer from "./demo-data/demoSlice";

export const store = configureStore({
  reducer: {
    demo: demoReducer,
  },
});
