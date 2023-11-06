import { FC } from 'react';

import { Logo } from './Logo';
import { TetrislyMark } from './TetrislyMark';

import { tet } from '@/tetrisly';

type HeroProps = {
  component: string;
  description: string | null;
  docs: string | null;
};

export const Hero: FC<HeroProps> = ({ component, description, docs }) => (
  <tet.section
    p={{
      xs: '$space-component-padding-xLarge',
      md: '$space-component-padding-3xLarge',
    }}
    display="flex"
    flexDirection="column"
  >
    <tet.div
      px={{ md: '$dimension-600', sm: '$dimension-400', _: '$dimension-200' }}
      py={{ md: '$dimension-1000', sm: '$dimension-600', _: '$dimension-400' }}
      background="linear-gradient(225deg, #FEF1E7 0%, #DDF3F9 100%);"
      borderRadius="$border-radius-xLarge"
    >
      <tet.div
        display="flex"
        flexDirection={{
          sm: 'row',
          _: 'column-reverse',
        }}
        gap="$dimension-200"
        justifyContent="space-between"
      >
        <tet.div
          display="flex"
          gap="$space-component-gap-medium"
          alignItems="center"
        >
          <TetrislyMark />
          <tet.span
            text={{ md: '$typo-body-small', _: '$typo-body-xSmall' }}
            color="$color-content-secondary"
          >
            Components
          </tet.span>
        </tet.div>
        <tet.a
          href="https://tetrisly.com/"
          target="_blank"
          display={{
            sm: 'block',
            _: 'none',
          }}
        >
          <Logo />
        </tet.a>
      </tet.div>
      <tet.div
        my="$space-component-gap-xLarge"
        display="flex"
        gap="$space-component-gap-large"
        flexDirection="column"
      >
        <tet.h1
          text={{
            md: '$typo-hero-medium',
            sm: '$typo-header-3xLarge',
            _: '$typo-header-large',
          }}
        >
          {component}
        </tet.h1>
        {description && (
          <tet.p
            color="$color-content-secondary"
            text={{ md: '$typo-body-large', _: '$typo-body-small' }}
          >
            {description}
          </tet.p>
        )}
      </tet.div>
      {docs && (
        <tet.a
          href={docs}
          target="_blank"
          rel="noreferrer"
          color="$color-action-primary-normal"
          text={{ md: '$typo-body-medium', _: '$typo-body-small' }}
        >
          View documentation
        </tet.a>
      )}
    </tet.div>
  </tet.section>
);
