import { Icon } from '@virtuslab/tetrisly-icons';
import { useMemo } from 'react';

import { InlineMessageProps } from './InlineMessage.props';
import { stylesBuilder } from './stylesBuilder';
import { tet } from '../../tetrisly';

export const InlineMessage = ({
  intent = 'informative',
  title,
  description,
  custom,
  ...rest
}: InlineMessageProps) => {

  const {
    iconContainer: iconContainerStyles,
    icon: iconStyles,
    title: titleStyles,
    description: descriptionStyles,
    ...containerStyles
  } = useMemo(() => stylesBuilder(intent, custom), [intent, custom]);

  return (
    <tet.div {...containerStyles} {...rest} data-testid="inline-message">
      <tet.span {...iconContainerStyles}>
        <Icon {...iconStyles} data-testid="inline-message-icon" />
      </tet.span>
      <tet.span {...titleStyles} data-testid="inline-message-title">
        {title}
      </tet.span>
      {description && (
        <tet.span
          {...descriptionStyles}
          data-testid="inline-message-description"
        >
          {description}
        </tet.span>
      )}
    </tet.div>
  );
};