import styled from "styled-components";
import { rem } from "../../../config/styledUtils";

const TagContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => rem(theme.spacing[1])};
  border: 1px solid ${({ theme }) => theme.colors.neutral.borderline};
  flex-wrap: wrap;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[1]}px ${theme.spacing[2]}px`};
  border-radius: ${({ theme }) => theme.spacing[2]}px;
`;

const TagName = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing[1]}px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.backdrop};
  }

  svg {
    fill: ${({ theme }) => theme.colors.neutral.gray};
  }
`;

export { CloseButton, TagContainer, TagName };
