import VisibilityScore from "./VisibilityScore";

import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { render } from "../../../config/tests.tsx";

describe("VisibilityScore", () => {
  it("renders the correct rating message based on the number of selected tags", () => {
    const selectedTags = 2;
    const limit = 5;

    render(<VisibilityScore selectedTags={selectedTags} limit={limit} />);

    expect(screen.getByText("Słabo")).toBeInTheDocument();
  });

  it("renders the correct number of ScorePill components based on the limit prop", () => {
    const selectedTags = 3;
    const limit = 5;

    render(<VisibilityScore selectedTags={selectedTags} limit={limit} />);

    const scorePills = screen.getAllByTestId("score-pill");
    expect(scorePills).toHaveLength(limit);
  });

  it("renders the ScorePill components with the correct color based on the number of selected tags", () => {
    const selectedTags = 3;
    const limit = 5;

    render(<VisibilityScore selectedTags={selectedTags} limit={limit} />);

    const scorePills = screen.getAllByTestId("score-pill");
    scorePills.slice(0, selectedTags).forEach((pill) => {
      expect(pill).toHaveStyle(`background-color: #E3CA26`);
    });
    scorePills.slice(selectedTags).forEach((pill) => {
      expect(pill).toHaveStyle(`background-color: #F4F4F6`);
    });
  });
});
