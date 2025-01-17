import { ReactNode } from "react";
import Icon from "../Icons/Icon";
import { SearchList } from "./SearchList/SearchList";
import * as S from "./SelectPanel.styles";
import { TagList } from "./TagList/TagList";
import VisibilityScore from "./VisibilityScore/VisibilityScore";

export interface TagType {
  id: number;
  name: string;
  relatedTags?: number;
}

interface SelectPanelProps {
  title?: string;
  placeholder?: string;
  searchText?: string;
  onSearchChange: (value: string) => void;
  selectedTags?: TagType[];
  onSelectedTagsChange: (tags: TagType[]) => void;
  onTagRemove: (tag: TagType) => void;
  onClose?: () => void;
  tagsData: TagType[];
  tagsRequiredQuantity?: number;
  children: ReactNode;
  isOpen: boolean;
}

const SelectPanel = ({
  title,
  onClose,
  placeholder = "Search",
  searchText = "",
  selectedTags = [],
  onSelectedTagsChange,
  onTagRemove,
  onSearchChange,
  tagsData,
  tagsRequiredQuantity = 5,
  children,
  isOpen,
}: SelectPanelProps) => {
  const filteredTags = tagsData.filter((tag) =>
    tag.name.toLowerCase().trim().includes(searchText.toLowerCase())
  );

  const handleSearchClear = () => {
    onSearchChange("");
  };

  return (
    <S.RootWrapper>
      {children}
      {isOpen && (
        <S.Wrapper>
          <S.Heading>
            <S.Title>{title}</S.Title>
            <S.CloseButton
              data-testid="close-button"
              onClick={() => onClose && onClose()}
            >
              <Icon.CloseIcon />
            </S.CloseButton>
          </S.Heading>
          <S.SearchWrapper>
            <Icon.SearchIcon size={16} />
            <S.SearchInput
              placeholder={placeholder}
              value={searchText}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <S.ClearButton onClick={handleSearchClear}>
              <Icon.ClearIcon size={16} />
            </S.ClearButton>
          </S.SearchWrapper>
          <S.Divider />
          {searchText ? (
            <SearchList
              tags={filteredTags}
              selectedTags={selectedTags}
              onSave={onSelectedTagsChange}
            />
          ) : (
            <>
              <TagList tags={selectedTags} onTagRemove={onTagRemove} />
              <S.Divider />
              <S.Actions>
                <S.ActionItem>
                  <Icon.SparklesIcon size={16} /> CMS AI
                </S.ActionItem>
                <S.ActionItem>
                  <Icon.SparklesIcon size={16} /> Analizuj tekst
                </S.ActionItem>
                <S.ActionItem>
                  <Icon.TagIcon size={16} /> Najbardziej popularne tagi
                </S.ActionItem>
              </S.Actions>
              {selectedTags.length > 0 &&
                selectedTags.length < tagsRequiredQuantity && (
                  <>
                    <S.Divider />
                    <VisibilityScore
                      limit={tagsRequiredQuantity}
                      selectedTags={selectedTags.length}
                    />
                  </>
                )}
            </>
          )}
        </S.Wrapper>
      )}
    </S.RootWrapper>
  );
};

export default SelectPanel;
