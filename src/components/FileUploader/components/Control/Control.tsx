import { FC } from 'react';

import { ControlProps } from './Control.props';
import { stylesBuilder } from './stylesBuilder';

import { HelperText } from '@/components/HelperText';
import { Label } from '@/components/Label';
import { tet } from '@/tetrisly';

export const Control: FC<ControlProps> = ({
  children,
  custom,
  label,
  helperText,
}) => {
  const styles = stylesBuilder(custom);

  return (
    <tet.div {...styles.container}>
      {label && (
        <tet.div>
          <Label {...label} />
        </tet.div>
      )}

      {children}

      {helperText && (
        <tet.div>
          <HelperText {...helperText} />
        </tet.div>
      )}
    </tet.div>
  );
};
