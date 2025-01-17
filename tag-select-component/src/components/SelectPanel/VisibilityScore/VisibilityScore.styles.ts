import styled, { css } from "styled-components";
import { rem } from "../../../config/styledUtils";

const getPillColor = (color: string) => {
  if (color === "error") {
    return css`
      background-color: ${({ theme }) => theme.colors.informational.error};
      color: ${({ theme }) => theme.colors.informational.error};
    `;
  }
  if (color === "warning") {
    return css`
      background-color: ${({ theme }) => theme.colors.informational.warning};
      color: ${({ theme }) => theme.colors.informational.warning};
    `;
  }
  if (color === "success") {
    return css`
      background-color: ${({ theme }) => theme.colors.informational.success};
      color: ${({ theme }) => theme.colors.informational.success};
    `;
  }
  if (color === "default") {
    return css`
      background-color: ${({ theme }) => theme.colors.neutral.backdrop};
      color: ${({ theme }) => theme.colors.neutral.backdrop};
    `;
  }
  return;
};

const ScorePill = styled.div<{
  $color: string;
}>`
  ${({ $color }) => getPillColor($color)}
  width: 8px;
  height: 4px;
  border-radius: ${({ theme }) => theme.spacing[5]}px;
`;

const Wrapper = styled.div`
  display: flex;

  padding: ${({ theme }) => theme.spacing[2]}px;
  flex-direction: column;
  gap: ${({ theme }) => rem(theme.spacing[2])};
`;

const ScoreMessage = styled.div<{
  $color: string;
}>`
  font-size: 14px;
  font-weight: bold;
  color: ${({ $color }) => getPillColor($color)};
`;

const Hint = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]}px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral.gray};
  align-items: center;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  min-height: 16px;
  font-weight: bold;

  svg {
    fill: ${({ theme }) => theme.colors.neutral.gray};
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => rem(theme.spacing[1])};
`;

export { Hint, InfoIcon, Rating, ScoreMessage, ScorePill, Wrapper };
