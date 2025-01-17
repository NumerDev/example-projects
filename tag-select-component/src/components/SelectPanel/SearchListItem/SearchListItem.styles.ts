import styled from "styled-components";
import { rem } from "../../../config/styledUtils";

const SearchListItemWrapper = styled.div<{ $isSelected: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => `${theme.spacing[1]}px ${theme.spacing[2]}px`};
  border-radius: ${({ theme }) => theme.spacing[1]}px;
  cursor: pointer;
  gap: ${({ theme }) => rem(theme.spacing[2])};
  background-color: ${({ theme, $isSelected }) =>
    $isSelected && theme.colors.informational.selected};
  outline: ${({ theme, $isSelected }) =>
    $isSelected && `2px solid ${theme.colors.informational.info}`};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.backdrop};
  }

  svg {
    fill: ${({ theme }) => theme.colors.neutral.gray};
  }
`;

const ItemName = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

const ItemRelatedTagsNumber = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.gray};
`;

export { ItemName, ItemRelatedTagsNumber, SearchListItemWrapper };
