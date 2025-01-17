import { useCallback } from "react";
import { TagType } from "../SelectPanel";
import * as S from "./SearchListItem.styles";

interface SearchListItemProps {
  tag: TagType;
  isSelected: boolean;
  onSelect: (tag: TagType) => void;
}

export const SearchListItem = ({
  tag,
  isSelected,
  onSelect,
}: SearchListItemProps) => {
  const { name, relatedTags } = tag;

  const handleOnSelect = useCallback(() => {
    onSelect(tag);
  }, [onSelect, tag]);

  return (
    <S.SearchListItemWrapper $isSelected={isSelected} onClick={handleOnSelect}>
      <input type="checkbox" checked={isSelected} onChange={handleOnSelect} />
      <S.ItemName>{name}</S.ItemName>
      <S.ItemRelatedTagsNumber>+{relatedTags}</S.ItemRelatedTagsNumber>
    </S.SearchListItemWrapper>
  );
};
