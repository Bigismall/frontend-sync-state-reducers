import * as React from "react";
import { AppState } from "./AppState";
import { AppReducer } from "./AppReducer";

export const Root: React.FC = () => {
  return (
    <div className="row">
      <AppState />
      <AppReducer />
    </div>
  );
};
