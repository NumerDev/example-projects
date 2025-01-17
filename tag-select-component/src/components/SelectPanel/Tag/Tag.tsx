import { useCallback } from "react";
import Icon from "../../Icons/Icon";
import { TagType } from "../SelectPanel";
import * as S from "./Tag.styles";

interface TagProps {
  tag: TagType;
  onRemove?: (tag: TagType) => void;
}

const Tag = ({ tag, onRemove }: TagProps) => {
  const handleTagRemove = useCallback(() => {
    return onRemove && onRemove(tag);
  }, [onRemove, tag]);
  return (
    <S.TagContainer>
      <S.TagName>{tag.name}</S.TagName>
      <S.CloseButton onClick={handleTagRemove} data-testid="tag-remove-button">
        <Icon.CloseIcon size={18} />
      </S.CloseButton>
    </S.TagContainer>
  );
};

export default Tag;
