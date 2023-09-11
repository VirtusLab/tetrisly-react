import { Icon } from '@virtuslab/tetrisly-icons';
import { FC, useMemo } from 'react';

import { InlineMessageProps } from './InlineMessage.props';
import { resolveIconName } from './InlineMessage.styles';
import { stylesBuilder } from './stylesBuilder';
import { tet } from '../../tetrisly';

import { MarginProps } from '@/types/MarginProps';

export const InlineMessage: FC<InlineMessageProps & MarginProps> = ({
  intent = 'informative',
  title,
  description,
  custom,
  ...restProps
}) => {
  const styles = useMemo(() => stylesBuilder(intent, custom), [intent, custom]);
  const name = resolveIconName(intent);

  return (
    <tet.div {...styles.container} data-testid="inline-message" {...restProps}>
      <tet.span
        {...styles.iconContainer}
        data-testid="inline-message-iconContainer"
      >
        <Icon name={name} data-testid="inline-message-icon" />
      </tet.span>
      <tet.span>
        <tet.span {...styles.title} data-testid="inline-message-title">
          {title}
        </tet.span>
        {description && (
          <tet.div
            {...styles.description}
            data-testid="inline-message-description"
          >
            {description}
          </tet.div>
        )}
      </tet.span>
    </tet.div>
  );
};
