import React, { HTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";

const TheadWrapper = styled.div`
  position: sticky;
  top: 0;
  display: table;
  table-layout: fixed;
  width: 100%;
  z-index: ${(props) => props.theme.elevation.tableFixedElements};
`;

const TheadElement = styled.div`
  display: table-header-group;
  background-color: ${(props) => props.theme.color.background};

  > *:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.color.tableBorder};
  }

  > * > * {
    padding: 12px 20px;
    border-top: 1px solid ${(props) => props.theme.body.primary};
    border-bottom: 1px solid ${(props) => props.theme.body.primary};

    &:not(:last-child) {
      border-right: 1px solid ${(props) => props.theme.color.tableBorder};
    }
  }
`;

export const Thead: FC = ({ children }) => (
  <TheadWrapper>
    <TheadElement>{children}</TheadElement>
  </TheadWrapper>
);

interface TbodyProps extends HTMLAttributes<HTMLDivElement> {
  height?: string;
  hideBottomBorder?: boolean;
}

const TbodyWrapper = styled.div<TbodyProps>`
  display: table;
  table-layout: fixed;
  width: 100%;
  height: ${(props) => props.height || "auto"};

  /* 맨 밑의 border 역할을 함 */
  ${({ hideBottomBorder = false }) =>
    !hideBottomBorder &&
    css`
      &::after {
        content: "";
        position: fixed;
        display: block;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme.body.primary};
        z-index: ${(props) => props.theme.elevation.tableFixedElements};
      }
    `}
`;

const TbodyElement = styled.div`
  display: table-row-group;

  > * > * {
    border-right: 1px solid transparent;
    border-bottom: 1px solid ${(props) => props.theme.color.tableBorder};
    padding: 11px 20px;
  }
`;

export const Tbody: React.FC<TbodyProps> = ({
  className,
  children,
  height,
  hideBottomBorder = false,
}) => (
  <TbodyWrapper height={height} hideBottomBorder={hideBottomBorder}>
    <TbodyElement className={className}>{children}</TbodyElement>
  </TbodyWrapper>
);

export const LoadingSpinnerWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 36px;
  padding: 6px 0;
  text-align: center;
`;
