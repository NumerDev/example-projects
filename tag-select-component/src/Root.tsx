import { useState } from "react";
import styled from "styled-components";
import SelectPanel, { TagType } from "./components/SelectPanel/SelectPanel";
import { selectedTagsData, tagsData } from "./tags.data";

const Root = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState<TagType[]>(selectedTagsData);
  const [isOpen, setisOpen] = useState(false);

  const onSelectedChange = (tags: TagType[]) => {
    setSearchText("");
    setSelectedTags(tags);
  };

  const onTagRemove = (removedTag: TagType) => {
    const filteredTags = selectedTags.filter((tag) => tag.id !== removedTag.id);
    setSelectedTags(filteredTags);
  };

  return (
    <Center>
      <SelectPanel
        title="Tagi"
        placeholder="Wyszukaj grupę lub tag"
        searchText={searchText}
        onSearchChange={setSearchText}
        selectedTags={selectedTags}
        onSelectedTagsChange={onSelectedChange}
        onTagRemove={onTagRemove}
        tagsData={tagsData}
        onClose={() => setisOpen(false)}
        isOpen={isOpen}
      >
        <button onClick={() => setisOpen((prev) => !prev)}>Close</button>
      </SelectPanel>
    </Center>
  );
};

export default Root;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
