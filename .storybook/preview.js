import { addDecorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/shared/global";

import { BaseTheme } from "../src";

function withGlobalStyles(storyFn) {
  return (
    <ThemeProvider theme={BaseTheme}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  );
}

export const parameters = {
  controls: { expanded: true },
};

addDecorator(withGlobalStyles);
