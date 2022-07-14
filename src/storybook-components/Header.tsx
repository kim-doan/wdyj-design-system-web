import styled from "styled-components";

import foundations from "../foundations";

export const Header = styled.header`
  margin: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.palette.core.Borders400};
`;

export const Category = styled.aside`
  font-size: 1rem;
  font-weight: 400;
`;

export const Title = styled.h1`
  display: inline-block;
  min-width: 300px;
  margin: 0;
  ${foundations.typography.H1};
  font-weight: 700;
`;

export const Subtitle = styled.h2`
  display: inline-block;
  margin: 0 0 0 26px;
  ${foundations.typography.H1};
  color: ${(props) => props.theme.palette.text.TertiaryText};
`;
