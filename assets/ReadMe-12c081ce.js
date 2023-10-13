import{j as t}from"./jsx-runtime-ffb262ed.js";import"./chunk-S4VUQJ4A-b715c01a.js";import{M as r,d as s}from"./index-f71982ae.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-39a793b6.js";import"../sb-preview/runtime.js";import"./react-18-38063e1e.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const l=`<img src="https://storybook.tetrisly.com/header.svg" width="100%" alt="css-in-readme">

# Tetrisly React

🧩 Tetrisly offers user-friendly components designed for effortless integration. Plus, it's fully compatible with fully compatible with Tetrisly for Figma with a seamless design and development experience in mind.

If you want to know more about Tetrisly, check out our website: [tetrisly.com](https://tetrisly.com/)

## Tech Stack

- [React 18](https://react.dev/)
- [xstyled](https://xstyled.dev/)

We've desided to use \`xstyled\` for styling our components. If you are interested in our reasoning, check out our article on this topic: [Style Wars: Tailwind vs. CSS-in-JS in Design Systems Implementation](https://medium.com/tetrisly/style-wars-tailwind-vs-css-in-js-in-design-systems-implementation-de6015ee2695)

## Installation

Install \`tetrisly-react\`\` with npm (you can do the same with yarn, pnpm or any other package manager)

\`\`\`bash
  npm install @virtuslab/tetrisly-react
\`\`\`

and dependencies:

\`\`\`bash
  npm install styled-components @xstyled/styled-components
\`\`\`

## Setup

### TetrislyProvider

After installing the package, you need to wrap your application in the \`TetrislyProvider\` component. This will provide the theme and other context to your application.

\`\`\`jsx
import { TetrislyProvider } from '@virtuslab/tetrisly-react';

function App() {
  return (
    <TetrislyProvider>
      <YourApp />
    </TetrislyProvider>
  );
}
\`\`\`

TetrislyProvider accepts optional prop \`theme\` which can be used to override default theme.

\`\`\`jsx
import { TetrislyProvider } from '@virtuslab/tetrisly-react';

function App() {
  return (
    <TetrislyProvider
      theme={{
        colors: {
          '$color-semantic-brand--4': th.color('$color-raspberry--4'),
          '$color-semantic-brand--3': th.color('$color-raspberry--3'),
          '$color-semantic-brand--2': th.color('$color-raspberry--2'),
          '$color-semantic-brand--1': th.color('$color-raspberry--1'),
          '$color-semantic-brand-0': th.color('$color-raspberry-0'),
          '$color-semantic-brand-+1': th.color('$color-raspberry-+1'),
          '$color-semantic-brand-+2': th.color('$color-raspberry-+2'),
          '$color-semantic-brand-+3': th.color('$color-raspberry-+3'),
          '$color-semantic-brand-+4': th.color('$color-raspberry-+4'),
          '$color-semantic-brand-+5': th.color('$color-raspberry-+5'),
          '$color-semantic-brand-+6': th.color('$color-raspberry-+6'),
          '$color-semantic-brand-+7': th.color('$color-raspberry-+7'),
          '$color-semantic-brand-+8': th.color('$color-raspberry-+8'),
        },
      }}
    >
      <YourApp />
    </TetrislyProvider>
  );
}
\`\`\`

### Default theme

Our default theme contains all of fundamental Tetrisly Design Tokens, you can use it with \`xstyled\` props to easy set up
your design. See \`tet.*\` utility [example of use](#tet-utility).

Here you can see the
[default theme](https://github.com/VirtusLab/@tetrisly/react/blob/development/src/theme/defaultTheme.ts) or a complete
list of theme options.

### Default font

Tetrisly uses [Inter](https://fonts.google.com/specimen/Inter) font as default. To add it to your app you should link it
in your root \`.html\` file:

\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;450;600&display=swap"
  rel="stylesheet"
/>
\`\`\`

## \`tet.*\` utility

\`tet\` function is our extension of xstyled \`x.*\` utility. Both has the same API, but we will add some extra features in
near future. You can read more [here](https://xstyled.dev/docs/utility-props/).

### Example of use

\`\`\`jsx
import {
  TetrislyProvider,
  Button,
  theme,
  tet,
} from '@virtuslab/tetrisly-react';

const App = () => (
  <TetrislyProvider>
    <tet.div
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <tet.div>
        <tet.h1
          textAlign="center"
          mb="$dimension-200"
          text="$typo-header-4xLarge"
          color="$color-content-primary"
        >
          Hello world!
        </tet.h1>
        <tet.div display="flex" justifyContent="center" alignItems="center">
          <a
            href="https://storybook.tetrisly.com"
            target="_blank"
            rel="noreferrer"
          >
            <Button label="Go to Storybook" appearance="primary" />
          </a>
        </tet.div>
      </tet.div>
    </tet.div>
  </TetrislyProvider>
);

export default App;
\`\`\`

## Run Locally

Clone the project

\`\`\`bash
  git clone https://github.com/VirtusLab/tetrisly-react
\`\`\`

Go to the project directory

\`\`\`bash
  cd tetrisly-react
\`\`\`

Install dependencies

\`\`\`bash
  yarn install
\`\`\`

Start the storybook server

\`\`\`bash
  yarn storybook
\`\`\`

## Running Tests

To run tests, run the following command

\`\`\`bash
  yarn test
\`\`\`

## Documentation

<img src="https://storybook.tetrisly.com/logo-docs.svg" />

If you want to dive deeper into the components Tetrisly offers, check out our official documentation: [Tetrisly Docs](https://docs.tetrisly.com/)

You can also check out our Storybook, which is our Documentation for React components (now in progress): [Tetrisly Storybook](https://virtuslab.github.io/tetrisly-react/?path=/docs/alertbanner--docs)

### Useful links

- [Tetrisly Storybook](https://storybook.tetrisly.com/)
- [Tetrisly Figma Docs](https://docs.tetrisly.com/)
- [Tetrisly Figma Preview](https://tetrisly.com/preview)
- [xstyled Docs](https://xstyled.dev/)

## Getting Help

If at any point you need help, feel lost, or have some feedback for us, you can create issues on our GitHub repository, or reach out to us on out Discord Server: [Tetrisly Discord](https://discord.gg/MPefZwUZUu)

## Testimonials

If you want to share with us your thoughts on Tetrisly, or showcase what you have built with it (it could be any aspect of our product, not only the React library), you can do it here: [Tetrisly Testimonials Form](https://senja.io/p/tetrisly/r/NfsRmn)

## License

We are using the [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/) for our library of components

## VirtusLab

<img src="https://storybook.tetrisly.com/logo-virtuslab.svg" />

Meet [VirtusLab](https://virtuslab.com/), the visionary team behind Tetrisly for React and the Tetrisly design system. Trusted by clients, they excel in product design, design systems and front-end engineering, creating mission-critical solutions across the product lifecycle.
`;function o(e){return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Docs/ReadMe"}),`
`,t.jsx(s,{children:l})]})}function T(e={}){const{wrapper:n}=Object.assign({},i(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o()}export{T as default};
//# sourceMappingURL=ReadMe-12c081ce.js.map
