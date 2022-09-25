import React from "react";
import { AlertTriangle } from "react-feather";
import { Heading } from "../Text";

export const Error = ({ children }) => {
  return (
    <div className="full-size center">
      <div className="error">
        <AlertTriangle fill="var(--col-red-800)" size={60} />
        <Heading type="h2" mt={10}>
          {children}
        </Heading>
      </div>
    </div>
  );
};
