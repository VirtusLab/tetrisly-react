import{j as t}from"./jsx-runtime-ffb262ed.js";import"./chunk-S4VUQJ4A-3e5f25fb.js";import{M as r,d as s}from"./index-525b0908.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d66e8cb6.js";import"../sb-preview/runtime.js";import"./react-18-38063e1e.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const a=`<img src="./public/header.svg" width="100%" alt="css-in-readme">

# Tetrisly React

🧩 Tetrisly offers user-friendly components designed for effortless integration. Plus, it's fully compatible with fully compatible with Tetrisly for Figma with a seamless design and development experience in mind.

If you want to know more about Tetrisly, check out our website: [tetrisly.com](https://tetrisly.com/)

## Tech Stack

- [React 18](https://react.dev/)
- [xstyled](https://xstyled.dev/)

We've desided to use \`xstyled\` for styling our components. If you are interested in our reasoning, check out our article on this topic: [Style Wars: Tailwind vs. CSS-in-JS in Design Systems Implementation](https://medium.com/tetrisly/style-wars-tailwind-vs-css-in-js-in-design-systems-implementation-de6015ee2695)

## Installation

Install tetrisly-react with npm (you can do the same with yarn, pnpm or any other package manager)

\`\`\`bash
  npm install @virtuslab/tetrisly-react
\`\`\`

## Setup

After installing the package, you need to wrap your application in the \`TetrislyProvider\` component. This will provide the theme and other context to your application.

\`\`\`typescript
import { TetrislyProvider } from '@virtuslab/tetrisly-react';

function App() {
  return (
    <TetrislyProvider>
      <YourApp />
    </TetrislyProvider>
  )
}
\`\`\`

TetrislyProvider accepts optional prop \`theme\` which can be used to override default theme.

You can check out how this object looks like here: [Tetrisly Theme](src/theme/theme.ts)

\`\`\`typescript
import { TetrislyProvider } from '@virtuslab/tetrisly-react';

function App() {
  return (
    <TetrislyProvider theme={{ colors: { primary: 'red' } }}>
      <YourApp />
    </TetrislyProvider>
  )
}
\`\`\`

## Usage/Examples

\`\`\`typescript
import { Button } from '@virtuslab/tetrisly-react';

function App() {
  return <Button label="Hello Tetrisly" />
}
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

<img src="./public/logo_docs.svg" />

If you want to dive deeper into the components Tetrisly offers, check out our official documentation: [Tetrisly Docs](https://docs.tetrisly.com/)

You can also check out our Storybook, which is our Documentation for React components (now in progress): [Tetrisly Storybook](https://virtuslab.github.io/tetrisly-react/?path=/docs/alertbanner--docs)

## Getting Help

If at any point you need help, feel lost, or have some feedback for us, you can create issues on our GitHub repository, or reach out to us on out Discord Server: [Tetrisly Discord](https://discord.gg/MPefZwUZUu)

## Testimonials

If you want to share with us your thoughts on Tetrisly, or showcase what you have built with it (it could be any aspect of our product, not only the React library), you can do it here: [Tetrisly Testimonials Form](https://senja.io/p/tetrisly/r/NfsRmn)

## License

We are using the [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/) for our library of components
`;function o(e){return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Docs/ReadMe"}),`
`,t.jsx(s,{children:a.replaceAll("./public","")})]})}function w(e={}){const{wrapper:n}=Object.assign({},i(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o()}export{w as default};
//# sourceMappingURL=ReadMe-f8141821.js.map
