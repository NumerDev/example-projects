import { useCallback, useMemo, useState } from "react";
import { SearchListItem } from "../SearchListItem/SearchListItem";
import { TagType } from "../SelectPanel";
import * as S from "./SearchList.styles";

interface SearchListProps {
  tags: TagType[];
  selectedTags: TagType[];
  onSave: (tags: TagType[]) => void;
}

export const SearchList = ({ tags, selectedTags, onSave }: SearchListProps) => {
  const [temporarySelectedTags, setTemporarySelectedTags] =
    useState<TagType[]>(selectedTags);

  const handleSaveTags = useCallback(() => {
    return onSave(temporarySelectedTags);
  }, [onSave, temporarySelectedTags]);

  const selectedTagsSet = useMemo(
    () => new Set(temporarySelectedTags.map((tag) => tag.id)),
    [temporarySelectedTags]
  );

  const isTagSelected = useCallback(
    (tag: TagType) => {
      return selectedTagsSet.has(tag.id);
    },
    [selectedTagsSet]
  );

  const onTagSelect = (tag: TagType) => {
    const isSelected = isTagSelected(tag);
    if (!isSelected) {
      setTemporarySelectedTags((prevSelectedTags) => {
        if (
          !prevSelectedTags.some((selectedTag) => selectedTag.id === tag.id)
        ) {
          return [...prevSelectedTags, tag];
        }
        return prevSelectedTags;
      });
    } else {
      setTemporarySelectedTags((prevSelectedTags) =>
        prevSelectedTags.filter((selectedTag) => selectedTag.id !== tag.id)
      );
    }
  };

  return (
    <S.SearchListWrapper data-testid="search-list">
      {tags.length ? (
        <>
          {tags.map((tag) => (
            <SearchListItem
              key={tag.id}
              tag={tag}
              isSelected={isTagSelected(tag)}
              onSelect={onTagSelect}
            />
          ))}
          <S.SaveButton onClick={handleSaveTags}>Zapisz</S.SaveButton>
        </>
      ) : (
        <S.EmptyList>Brak wyników</S.EmptyList>
      )}
    </S.SearchListWrapper>
  );
};
