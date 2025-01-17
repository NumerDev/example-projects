import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "../../config/tests.tsx";
import { selectedTagsData, tagsData } from "../../tags.data";
import SelectPanel from "./SelectPanel";

// describe("SelectPanel", () => {
//   const onSearchChange = vi.fn();
//   const onSelectedTagsChange = vi.fn();
//   const onTagRemove = vi.fn();

//   it("renders the component with the correct title", () => {
//     render(
//       <SelectPanel
//         title="Tagi"
//         placeholder="Wyszukaj grupę lub tag"
//         searchText=""
//         onSearchChange={onSearchChange}
//         selectedTags={selectedTagsData}
//         onSelectedTagsChange={onSelectedTagsChange}
//         onTagRemove={onTagRemove}
//         tagsData={tagsData}
//       />
//     );

//     expect(screen.getByText("Tagi")).toBeInTheDocument();
//   });

//   it("calls onSearchChange when the search input value changes", () => {
//     render(
//       <SelectPanel
//         title="Tagi"
//         placeholder="Wyszukaj grupę lub tag"
//         searchText=""
//         onSearchChange={onSearchChange}
//         selectedTags={selectedTagsData}
//         onSelectedTagsChange={onSelectedTagsChange}
//         onTagRemove={onTagRemove}
//         tagsData={tagsData}
//       />
//     );

//     const searchInput = screen.getByPlaceholderText("Wyszukaj grupę lub tag");
//     fireEvent.change(searchInput, { target: { value: "test" } });

//     expect(onSearchChange).toHaveBeenCalledWith("test");
//   });

//   it("renders the selected tags in the TagList component", () => {
//     render(
//       <SelectPanel
//         title="Tagi"
//         placeholder="Wyszukaj grupę lub tag"
//         searchText=""
//         onSearchChange={onSearchChange}
//         selectedTags={selectedTagsData}
//         onSelectedTagsChange={onSelectedTagsChange}
//         onTagRemove={onTagRemove}
//         tagsData={tagsData}
//       />
//     );

//     selectedTagsData.forEach((tag) => {
//       expect(screen.getByText(tag.name)).toBeInTheDocument();
//     });
//   });

//   it("calls onTagRemove when a tag is removed", () => {
//     render(
//       <SelectPanel
//         title="Tagi"
//         placeholder="Wyszukaj grupę lub tag"
//         searchText=""
//         onSearchChange={onSearchChange}
//         selectedTags={selectedTagsData}
//         onSelectedTagsChange={onSelectedTagsChange}
//         onTagRemove={onTagRemove}
//         tagsData={tagsData}
//       />
//     );

//     const removeButton = screen.getAllByRole('button', { name: /CloseIcon/i })[0];
//     fireEvent.click(removeButton);

//     expect(onTagRemove).toHaveBeenCalledWith(selectedTagsData[0]);
//   });

//   // Add more test cases for other scenarios and subcomponents
// });

describe("SelectPanel", () => {
  const onSearchChange = vi.fn();
  const onSelectedTagsChange = vi.fn();
  const onTagRemove = vi.fn();
  const onClose = vi.fn();

  beforeEach(() => {
    onSearchChange.mockClear();
    onSelectedTagsChange.mockClear();
    onTagRemove.mockClear();
    onClose.mockClear();
  });

  it("renders the component with the correct title", () => {
    render(
      <SelectPanel
        title="Tagi"
        placeholder="Wyszukaj grupę lub tag"
        searchText=""
        onSearchChange={onSearchChange}
        selectedTags={selectedTagsData}
        onSelectedTagsChange={onSelectedTagsChange}
        onTagRemove={onTagRemove}
        tagsData={tagsData}
        onClose={onClose}
      />
    );

    expect(screen.getByText("Tagi")).toBeInTheDocument();
  });

  it("calls onSearchChange when the search input value changes", () => {
    render(
      <SelectPanel
        title="Tagi"
        placeholder="Wyszukaj grupę lub tag"
        searchText=""
        onSearchChange={onSearchChange}
        selectedTags={selectedTagsData}
        onSelectedTagsChange={onSelectedTagsChange}
        onTagRemove={onTagRemove}
        tagsData={tagsData}
        onClose={onClose}
      />
    );

    const searchInput = screen.getByPlaceholderText("Wyszukaj grupę lub tag");
    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(onSearchChange).toHaveBeenCalledWith("test");
  });

  it("renders the selected tags in the TagList component", () => {
    render(
      <SelectPanel
        title="Tagi"
        placeholder="Wyszukaj grupę lub tag"
        searchText=""
        onSearchChange={onSearchChange}
        selectedTags={selectedTagsData}
        onSelectedTagsChange={onSelectedTagsChange}
        onTagRemove={onTagRemove}
        tagsData={tagsData}
        onClose={onClose}
      />
    );

    selectedTagsData.forEach((tag) => {
      expect(screen.getByText(tag.name)).toBeInTheDocument();
    });
  });

  it("calls onTagRemove when a tag is removed", () => {
    render(
      <SelectPanel
        title="Tagi"
        placeholder="Wyszukaj grupę lub tag"
        searchText=""
        onSearchChange={onSearchChange}
        selectedTags={selectedTagsData}
        onSelectedTagsChange={onSelectedTagsChange}
        onTagRemove={onTagRemove}
        tagsData={tagsData}
        onClose={onClose}
      />
    );

    const removeButton = screen.getAllByTestId("tag-remove-button")[0];
    fireEvent.click(removeButton);

    expect(onTagRemove).toHaveBeenCalledWith(selectedTagsData[0]);
  });

  it("renders the SearchList component when search text is entered", () => {
    render(
      <SelectPanel
        title="Tagi"
        placeholder="Wyszukaj grupę lub tag"
        searchText="test"
        onSearchChange={onSearchChange}
        selectedTags={selectedTagsData}
        onSelectedTagsChange={onSelectedTagsChange}
        onTagRemove={onTagRemove}
        tagsData={tagsData}
        onClose={onClose}
      />
    );

    expect(screen.getByTestId("search-list")).toBeInTheDocument();
  });

  it("renders the VisibilityScore component when search text is empty", () => {
    render(
      <SelectPanel
        title="Tagi"
        placeholder="Wyszukaj grupę lub tag"
        searchText=""
        onSearchChange={onSearchChange}
        selectedTags={selectedTagsData}
        onSelectedTagsChange={onSelectedTagsChange}
        onTagRemove={onTagRemove}
        tagsData={tagsData}
        onClose={onClose}
      />
    );

    expect(screen.getByTestId("visibility-score")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    render(
      <SelectPanel
        title="Tagi"
        placeholder="Wyszukaj grupę lub tag"
        searchText=""
        onSearchChange={onSearchChange}
        selectedTags={selectedTagsData}
        onSelectedTagsChange={onSelectedTagsChange}
        onTagRemove={onTagRemove}
        tagsData={tagsData}
        onClose={onClose}
      />
    );

    const closeButton = screen.getByTestId("close-button");
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
  });
});
