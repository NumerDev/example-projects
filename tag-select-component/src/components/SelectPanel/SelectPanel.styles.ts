import styled from "styled-components";
import { rem } from "../../config/styledUtils";

const RootWrapper = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 110%;
  background-color: ${({ theme }) => theme.colors.neutral.light};
  border: 1px solid ${({ theme }) => theme.colors.neutral.borderline};
  border-radius: ${({ theme }) => theme.spacing[2]}px;
  padding: ${({ theme }) => theme.spacing[3]}px;
  gap: ${({ theme }) => rem(theme.spacing[2])};
  flex-direction: column;
  display: flex;

  min-width: 265px;
  max-width: 265px;
  max-height: 420px;
`;

const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.borderline};
  height: 1px;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;

  svg {
    fill: ${({ theme }) => theme.colors.neutral.dark};
  }
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing[1]}px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ theme }) => theme.colors.neutral.gray};
  }
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => rem(theme.spacing[2])};

  padding: ${({ theme }) => `${theme.spacing[1]}px ${theme.spacing[2]}px`};
`;

const SearchInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  font-size: 14px;
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.colors.neutral.dark};
  font-weight: 600;

  &::placeholder {
    font-weight: 400;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => rem(theme.spacing[1])};
`;

const ActionItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => rem(theme.spacing[3])};
  padding: ${({ theme }) => theme.spacing[2]}px;
  border-radius: ${({ theme }) => theme.spacing[2]}px;
  background-color: ${({ theme }) => theme.colors.neutral.light};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.backdrop};
  }

  svg {
    fill: ${({ theme }) => theme.colors.miscelleanous.violet};
  }
`;

export {
  ActionItem,
  Actions,
  ClearButton,
  CloseButton,
  Divider,
  Heading,
  RootWrapper,
  SearchInput,
  SearchWrapper,
  Title,
  Wrapper,
};
