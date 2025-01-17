import { TagType } from "../SelectPanel";
import Tag from "../Tag/Tag";
import * as S from "./TagList.styles";

interface TagListProps {
  tags: TagType[];
  onTagRemove?: (id: TagType) => void;
}

export const TagList = ({ tags, onTagRemove }: TagListProps) => {
  return (
    <S.TagContainer>
      {tags.length ? (
        tags.map((tag) => <Tag key={tag.id} tag={tag} onRemove={onTagRemove} />)
      ) : (
        <S.InfoBox>No tags</S.InfoBox>
      )}
    </S.TagContainer>
  );
};
