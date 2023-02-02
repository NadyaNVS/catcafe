import { ThemeProvider } from "styled-components";
import { defaultTheme } from "/src/thems/default";

export const decorators = [
  Story => (
        <ThemeProvider theme={defaultTheme}>
          <Story />
        </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

