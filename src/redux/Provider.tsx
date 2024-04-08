"use client";
import React from "react";

import { Provider } from "react-redux";
import { store } from "./Store";


export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <Provider store={store}>{children}</Provider>
    </React.StrictMode>
  );
}
