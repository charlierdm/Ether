import { render, screen } from '@testing-library/react';
import { QwertyButtons } from "./QwertyButtons";

it("renders each button", () => {
  render(<QwertyButtons />);
  expect(screen.getByText("A")).toBeInTheDocument();
  expect(screen.getByText("S")).toBeInTheDocument();
  expect(screen.getByText("D")).toBeInTheDocument();
})

