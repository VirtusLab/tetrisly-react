import { MarginProps } from '@xstyled/styled-components';
import { FC, useMemo } from 'react';

import { HeaderProps } from './Header.props';
import { stylesBuilder } from './stylesBuilder';
import { Button } from '../Button';
import { Counter } from '../Counter';
import { CounterConfig } from '../Counter/Counter.styles';
import { InlineSearchInput } from '../InlineSearchInput';
import { SelectablePill } from '../SelectablePill';

import { useAction } from '@/hooks';
import { tet } from '@/tetrisly';

export const Header: FC<HeaderProps & MarginProps> = ({
  bottomBar,
  counter,
  description,
  title,
  type = 'complex',
  action,
  custom,
  ...restProps
}) => {
  const styles = useMemo(() => stylesBuilder(type, custom), [custom, type]);

  const [firstAction, secondAction] = useAction(action);

  const isComplexType = type === 'complex';
  const customSearchStyle = { innerElements: { input: { w: '100%' } } };

  return (
    <tet.div {...styles.container} data-testid="header" {...restProps}>
      <tet.div {...styles.table} data-testid="header-table">
        <tet.div
          {...styles.titleAndDescriptionContainer}
          data-testid="header-title-and-description-container"
        >
          <tet.div
            {...styles.titleContainer}
            data-testid="header-title-container"
          >
            <tet.span data-testid="header-title">{title}</tet.span>
            {!(counter === undefined) && (
              <Counter
                data-testid="header-counter"
                number={counter}
                custom={styles.counter as CounterConfig}
              />
            )}
          </tet.div>

          {!!description && (
            <tet.div {...styles.description} data-testid="header-description">
              {description}
            </tet.div>
          )}
        </tet.div>
        {firstAction && (
          <tet.div
            {...styles.actionContainer}
            data-testid="header-action-container"
          >
            {/* should it always be like this - first button is primary and second secondary or user decides about it? */}
            {secondAction && (
              <Button
                variant="default"
                appearance="secondary"
                size={isComplexType ? 'medium' : 'small'}
                {...secondAction}
              />
            )}
            <Button
              variant="default"
              appearance="primary"
              size={isComplexType ? 'medium' : 'small'}
              {...firstAction}
            />
          </tet.div>
        )}
      </tet.div>
      {!!bottomBar && (
        <tet.div {...styles.bottomBar} data-testId="header-bottom-bar">
          {type === 'complex' && (
            <>
              {/* not sure how it should work, if and how user passes a data about inside components */}
              <SelectablePill text="Name" />
              <SelectablePill text="E-mail" />
              <SelectablePill text="Date added" />
              <Button label="Filters" size="small" />
            </>
          )}
          <InlineSearchInput
            {...styles.search}
            placeholder="Search..."
            custom={customSearchStyle}
            data-testId="header-search"
          />
        </tet.div>
      )}
    </tet.div>
  );
};
