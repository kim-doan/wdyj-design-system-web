import styled from "styled-components";

import { resetUl } from "../mixins/resetUl";

export const ItemList = styled.ul`
  ${resetUl};
`;

export const Item = styled.li`
  display: flex;
  margin: 0 0 0.5em;
  padding: 0;
`;
