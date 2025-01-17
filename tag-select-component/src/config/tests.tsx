import {
  RenderOptions,
  cleanup,
  render as rtlRender,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { afterEach } from "vitest";
import defaultTheme from "./theme";

const AllWrappers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </>
  );
};

// Render function with providers
const renderWithProvider = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  return rtlRender(ui, { wrapper: AllWrappers, ...options });
};

/* Cleaning jsdon after each test case */
afterEach(() => {
  cleanup();
});

export * from "@testing-library/react";
export { renderWithProvider as render };
