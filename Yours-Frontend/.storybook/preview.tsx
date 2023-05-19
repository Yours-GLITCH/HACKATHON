import React from "react";
import type { Preview } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { withRouter } from 'storybook-addon-react-router-v6';
import 'reflect-metadata';
import '../src/style/init.scss';
import '../src/style/font.scss';
import '../src/style/flex.scss';
import '../src/style/input.scss';
import '../src/style/color.scss';
import '../src/style/animation.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: '#222222',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
          <div
            style={{width: "100%"}}
          >
            <div
              style={{maxWidth: "430px", margin: "auto"}}
            >
              <Story />
            </div>
          </div>
      </Provider>
    ),
    withRouter
  ]
};

export default preview;
