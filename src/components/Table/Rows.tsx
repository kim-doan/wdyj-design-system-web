import Color from "color";
import styled, { css } from "styled-components";

export const LoadingSpinner = styled.div`
  position: fixed;
  left: 50%;
  padding: 0;
  border: 0 !important;
  transform: translateX(-50%);
`;

export const selectedRowStyle = css`
  background-color: ${(props) =>
    Color(props.theme.color.selectedRowBackground).alpha(0.5).toString()};

  &:hover {
    background-color: ${(props) =>
      Color(props.theme.color.selectedRowBackground).alpha(0.5).toString()};
  }

  &:active {
    background-color: ${(props) =>
      Color(props.theme.color.selectedRowBackground).alpha(0.5).toString()};
  }
`;

export const Tr = styled.div<{
  selected?: boolean;
  clickable?: boolean;
  highlighted?: boolean;
}>`
  display: table-row;

  ${({ clickable = true, theme, onClick }) =>
    clickable && onClick
      ? css`
          cursor: pointer;

          &:hover {
            background-color: ${Color(theme.color.primary)
              .alpha(0.07)
              .toString()};
          }

          &:active {
            background-color: ${Color(theme.color.primary)
              .alpha(0.12)
              .toString()};
          }
        `
      : ""};

  ${({ selected, highlighted }) =>
    selected || highlighted ? selectedRowStyle : ""}
`;
