import { useEffect, useState } from 'react';

export const useIconChecked = (isChecked: boolean | undefined) => {
  const [isIconChecked, setIsIconChecked] = useState(isChecked);

  useEffect(() => {
    setIsIconChecked(isChecked);
  }, [isChecked]);

  return [isIconChecked, setIsIconChecked] as const;
};
