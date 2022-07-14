import React, { FC } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import styled from "styled-components";

import { setMargins } from "../../mixins/setMargins";
import type { MarginProps } from "../../types/MarginProps";

export interface TableProps extends MarginProps {
  width?: string;
  minWidth?: string;
  height?: string;
  fontSize?: string;
  theadHeight?: string;
}

const Wrapper = styled.div<Partial<TableProps>>`
  width: max(
    ${(props) => props.width || "auto"},
    ${(props) => props.minWidth || "0%"}
  );
  max-width: 100%;
  height: ${(props) => props.height || "auto"};
  transform: translate(0); /* resetting containing block */

  .ps__rail-x {
    z-index: ${(props) => props.theme.elevation.tableFixedElements};
  }
`;

const TableElement = styled.div<TableProps>`
  ${(props) => setMargins(props)};
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
  min-width: ${(props) => props.minWidth || "0"};
  height: ${(props) => props.height || "auto"};
  min-height: 100%;
  font-size: ${(props) => props.fontSize || "14px"};
  line-height: 1.43;

  .ps__rail-y {
    position: fixed;
    top: auto !important;
    bottom: 0 !important;
  }
`;

export const Table: FC<TableProps> = ({
  children,
  width,
  minWidth,
  height,
  ...restProps
}) => (
  <Wrapper width={width} minWidth={minWidth} height={height}>
    <PerfectScrollbar>
      <TableElement width={width} minWidth={minWidth} {...restProps}>
        {children}
      </TableElement>
    </PerfectScrollbar>
  </Wrapper>
);
