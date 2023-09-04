import { Icon } from '@virtuslab/tetrisly-icons';
import { FC, useMemo } from 'react';

import { AlertBannerProps } from './AlertBanner.props';
import { resolveIconName } from './AlertBanner.styles';
import { stylesBuilder } from './stylesBuilder';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

export const AlertBanner: FC<AlertBannerProps & MarginProps> = ({
  text,
  intent = 'none',
  custom,
  action,
  onCloseClick,
  ...restProps
}) => {
  const styles = useMemo(() => stylesBuilder(intent, custom), [intent, custom]);
  const name = resolveIconName(intent);

  const [firstAction, secondAction] = Array.isArray(action)
    ? action
    : [action, undefined];

  return (
    <tet.div {...styles.container} {...restProps}>
      <Icon name={name} />
      {text}
      {/* {firstAction && (
        <tet.div {...actionContainerStyles}>
          <Button variant="bare" {...actionProps} {...firstAction} />
          {secondAction && (
            <>
              <tet.div {...middleDotStyles}>&middot;</tet.div>
              <Button variant="bare" {...actionProps} {...secondAction} />
            </>
          )}
        </tet.div>
      )} */}
      {!!onCloseClick && (
        <IconButton
          size="small"
          variant="ghost"
          intent="none"
          icon="20-close"
          onClick={onCloseClick}
        />
      )}
    </tet.div>
  );
};
