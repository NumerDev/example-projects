import styled from "styled-components";
import { rem } from "../../../config/styledUtils";

const SearchListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: ${({ theme }) => rem(theme.spacing[2])};
`;

const EmptyList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 14px;
`;

const SaveButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing[2]}px 0`};
  border-radius: ${({ theme }) => theme.spacing[2]}px;
  color: ${({ theme }) => theme.colors.neutral.light};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.informational.info};
  cursor: pointer;
  border: none;
  font-weight: 600;
  font-size: 14px;
`;

export { EmptyList, SaveButton, SearchListWrapper };
