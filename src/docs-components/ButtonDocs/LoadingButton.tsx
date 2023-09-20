import { useLoading } from '../hooks/useLoading';

import { Button, ButtonProps } from '@/components/Button';

export const LoadingButton = (props: ButtonProps) => {
  const [isLoading, startLoading] = useLoading();
  return (
    <Button
      {...props}
      state={isLoading ? 'loading' : undefined}
      onClick={startLoading}
    />
  );
};
