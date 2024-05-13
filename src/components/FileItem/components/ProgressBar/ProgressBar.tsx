import { FC } from 'react';

import { ProgressBarProps } from './ProgressBar.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';

export const ProgressBar: FC<ProgressBarProps> = ({
  custom,
  isInverted,
  progressPercentage = 0,
}) => {
  const styles = stylesBuilder(custom, isInverted);

  return (
    <tet.div {...styles.container}>
      <tet.div {...styles.track}>
        <tet.div w={`${progressPercentage}%`} {...styles.progress} />
      </tet.div>
    </tet.div>
  );
};
