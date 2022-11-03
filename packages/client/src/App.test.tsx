import React from "react";
import { render, RenderResult } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("Unit testing React components", () => {
  describe("App", () => {
    const props = {
      message: "Hello",
    };

    const text: RenderResult = render(<App {...props} />);

    test("Renders the passed-in text", () => {
      expect(text.getByText("Hello")).toBeInTheDocument();
    });
  });
});
