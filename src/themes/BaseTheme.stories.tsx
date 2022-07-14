import Color from "color";
import React from "react";
import styled from "styled-components";

import {
  Header,
  Category,
  Title,
  Main,
  ItemTitle,
  MonospacedValue,
  Subtitle,
} from "../storybook-components";
import { ItemList, Item } from "../storybook-components/ItemList";

import BaseTheme, { BaseThemeMapping } from "./BaseTheme";
import ColorCode from "./colors/ColorCode";
import { CorePalette as CP } from "./colors/CorePalette";
import { TextPalette as TP } from "./colors/TextPalette";

export default {
  title: "Themes/Base",
};

export const CorePalette = () => {
  return (
    <>
      <Header>
        <Category>Theme</Category>
        <Title>Base</Title>
        <Subtitle>Core palette</Subtitle>
      </Header>
      <Main>
        <ItemList>
          {Object.entries(BaseTheme.palette.core).map(([key, color]) => (
            <Item key={key}>
              <ColorChip color={color}>core.{key}</ColorChip>
              <MonospacedValue>
                {color}
                <ColorName
                  color={BaseThemeMapping.palette.core[key as keyof CP]}
                />
              </MonospacedValue>
            </Item>
          ))}
        </ItemList>
      </Main>
    </>
  );
};

export const SpotPalette = () => {
  return (
    <>
      <Header>
        <Category>Theme</Category>
        <Title>Base</Title>
        <Subtitle>Spot palette</Subtitle>
      </Header>
      <Main>Base 테마는 Spot Palette를 제공하지 않습니다.</Main>
    </>
  );
};

export const TextPalette = () => {
  return (
    <>
      <Header>
        <Category>Theme</Category>
        <Title>Base</Title>
        <Subtitle>Text palette</Subtitle>
      </Header>
      <Main>
        <ItemList>
          {Object.entries(BaseTheme.palette.text).map(([key, color]) => (
            <Item key={key}>
              <ColorChip color={color}>text.{key}</ColorChip>
              <MonospacedValue>
                {color}
                <ColorName
                  color={BaseThemeMapping.palette.text[key as keyof TP]}
                />
              </MonospacedValue>
            </Item>
          ))}
        </ItemList>
      </Main>
    </>
  );
};

const ColorChip = styled(ItemTitle)<{ color: string }>`
  color: ${(props) => {
    if (props.color === "WIP") {
      return "#000";
    }
    return Color(props.color).isDark() ? "#fff" : "#000";
  }};
  background-color: ${(props) =>
    props.color === "WIP" ? "#fff" : props.color};
`;

const ColorName = ({ color }: { color: ColorCode | string }) => {
  if (typeof color === "string") {
    return <>&nbsp;({color})</>;
  }

  const { code, alpha } = color;

  return (
    <>
      &nbsp;({code}
      {alpha === undefined ? "" : `, ${alpha * 100}%`})
    </>
  );
};
