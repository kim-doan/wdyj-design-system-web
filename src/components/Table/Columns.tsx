import Color from "color";
import styled, { css } from "styled-components";

import { textEllipsis } from "../../mixins/textEllipsis";
import ThemeInterface from "../../themes/ThemeInterface";

export interface TableColumnProps {
  theme?: ThemeInterface;
  width?: string;
  weight?: number;
  textAlign?: "left" | "right" | "center";
  verticalAlign?: "top" | "middle" | "bottom";
  fontSize?: string;
  color?: string;
  minWidth?: string;
  clickable?: boolean;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
  textEllipsis?: boolean;
  wordBreak?: "break-all" | "break-word" | "normal";
  monospaced?: boolean;
  lineHeight?: string;
  position?: string;
}

const tableColumnStyle = (props: TableColumnProps) => css`
  position: ${props.position || "static"};
  display: table-cell;

  /* size and align */
  width: ${props.width || "auto"};
  vertical-align: ${props.verticalAlign || "middle"};
  text-align: ${props.textAlign};
  line-height: ${props.lineHeight || "inherit"};
  word-break: ${props.wordBreak || "break-all"};
  ${props.textEllipsis ? textEllipsis : ""}

  /* typography */
  font-size: ${props.fontSize ? `${props.fontSize} !important` : "inherit"};
  font-family: ${
    props.monospaced ? props.theme!.monospacedFontFamily : "inherit"
  };
  font-size: ${props.fontSize || "inherit"};
`;

export const MessageCell = styled.div`
  ${(props) => tableColumnStyle(props)};
  height: 100%;
  vertical-align: middle;
  border-bottom: 0;
`;

export const Td = styled.div<TableColumnProps>`
  ${(props) => tableColumnStyle(props)};
  -webkit-font-feature-settings: "tnum";
  -moz-font-feature-settings: "tnum";
  -ms-font-feature-settings: "tnum";
  font-feature-settings: "tnum";

  background-color: ${(props) => props.backgroundColor || "transparent"};
  ${(props) =>
    props.clickable
      ? css`
          cursor: pointer;

          &:hover {
            background-color: ${props.hoverBackgroundColor ||
            Color(props.theme.color.primary).alpha(0.07).toString()};
          }

          &:active {
            background-color: ${props.hoverBackgroundColor ||
            Color(props.theme.color.primary).alpha(0.2).toString()};
          }
        `
      : ""}
`;

export const Th = styled.strong<TableColumnProps>`
  ${(props) => tableColumnStyle(props)};
  position: relative;
`;
