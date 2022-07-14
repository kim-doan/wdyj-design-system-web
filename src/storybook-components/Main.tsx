import styled, { css } from "styled-components";

import foundations from "../foundations";

export const Main = styled.main<{ flex?: boolean }>`
  ${(props) =>
    props.flex
      ? css`
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
        `
      : ""}
  padding: 0 2.5rem 2rem;
`;

export const SectionTitle = styled.h3`
  margin: 1em 0;
  ${foundations.typography.H3};

  &:first-child {
    margin: 0 0 1em;
  }
`;

export const SectionSubTitle = styled.h4`
  ${foundations.typography.H4};
`;

export const ItemTitle = styled.strong`
  width: 20em;
  padding: 2px 5px;
  font-family: ${foundations.typography.monospacedFontFamily};
  background-color: ${(props) => props.theme.palette.core.BackgroundSecondary};
`;

export const ItemValue = styled.span`
  flex: 1;
  padding: 2px 1em;
`;

export const MonospacedValue = styled(ItemValue)`
  font-family: ${foundations.typography.monospacedFontFamily};
`;

export const CodeBlock = styled.pre`
  padding: 0.75rem;
  font-family: ${foundations.typography.monospacedFontFamily};
  font-size: 0.875rem;
  background-color: ${(props) => props.theme.palette.core.BackgroundSecondary};
`;
