import { TetrislyProvider } from '@virtuslab/tetrisly-react';

import { SignInForm } from './SignInForm';

const App = () => (
  <TetrislyProvider>
    <SignInForm />
  </TetrislyProvider>
);

export default App;
