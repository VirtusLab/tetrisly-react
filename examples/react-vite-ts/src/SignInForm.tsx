import { Button, Label, TextInput, tet } from '@virtuslab/tetrisly-react';
import { useState, FormEvent, MouseEvent } from 'react';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleOnFakeSubmit = (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      setPassword('');
    }, 3000);
  };

  const handleOnEyeClick = (e: MouseEvent) => {
    e.preventDefault();

    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <tet.div
      backgroundImage="url(/background.svg)"
      backgroundSize="cover"
      display="flex"
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <tet.form
        w="408px"
        backgroundColor="$color-background-default"
        p="$space-component-padding-4xLarge"
        borderRadius="$border-radius-xLarge"
        border="1px solid"
        borderColor="$color-border-defaultA"
        onSubmit={handleOnFakeSubmit}
        boxShadow="$elevation-bottom-200"
      >
        <tet.div display="flex" justifyContent="center" mb="$dimension-500">
          <tet.img src="/tetrisly.svg" alt="Tetrisly" />
        </tet.div>
        <tet.h1
          text="$typo-header-3xLarge"
          textAlign="center"
          mb="$dimension-400"
        >
          Login to Tetrisly Demo
        </tet.h1>
        <tet.div
          display="flex"
          flexDirection="column"
          gap="$space-component-gap-xSmall"
          mb="$dimension-300"
        >
          <Label label="E-mail" />
          <TextInput
            required
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </tet.div>
        <tet.div
          display="flex"
          flexDirection="column"
          gap="$space-component-gap-xSmall"
          boxShadow="var(--x-ring-shadow,0 0 #0000), var(--x-shadow,0 0 #0000)"
        >
          <Label label="Password" />
          <TextInput
            type={isPasswordVisible ? 'text' : 'password'}
            required
            autoComplete="current-password"
            value={password}
            afterComponent={{
              type: 'IconButton',
              props: {
                icon: isPasswordVisible ? '20-eye-off' : '20-eye',
                onClick: handleOnEyeClick,
              },
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </tet.div>

        <Button
          label="Log in"
          variant="default"
          appearance="primary"
          mt="$dimension-400"
          custom={{ default: { w: '100%' } }}
          state={isLoading ? 'loading' : undefined}
        />
      </tet.form>
    </tet.div>
  );
};
