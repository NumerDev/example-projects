import styled from "styled-components";
import { rem } from "../../../config/styledUtils";

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => rem(theme.spacing[2])};
  overflow-y: auto;

  max-height: 150px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral.gray};
  padding: ${({ theme }) => `${theme.spacing[2]}px 0`};
`;

export { InfoBox, TagContainer };
