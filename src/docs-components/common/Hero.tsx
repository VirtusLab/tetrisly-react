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
      xs: 'component-padding-xLarge',
      md: 'component-padding-3xLarge',
    }}
    display="flex"
    flexDirection="column"
  >
    <tet.div
      px={{ md: '600', sm: '400', _: '200' }}
      py={{ md: '1000', sm: '600', _: '400' }}
      background="linear-gradient(225deg, #FEF1E7 0%, #DDF3F9 100%);"
      borderRadius="xLarge"
    >
      <tet.div
        display="flex"
        flexDirection={{
          sm: 'row',
          _: 'column-reverse',
        }}
        gap="200"
        justifyContent="space-between"
      >
        <tet.div display="flex" gap="component-gap-medium" alignItems="center">
          <TetrislyMark />
          <tet.span
            text={{ md: 'body-small', _: 'body-xSmall' }}
            color="content-secondary"
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
        my="component-gap-xLarge"
        display="flex"
        gap="component-gap-large"
        flexDirection="column"
      >
        <tet.h1
          text={{ md: 'hero-medium', sm: 'header-3xLarge', _: 'header-large' }}
        >
          {component}
        </tet.h1>
        {description && (
          <tet.p
            color="content-secondary"
            text={{ md: 'body-large', _: 'body-small' }}
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
          color="action-primary-normal"
          text={{ md: 'body-medium', _: 'body-small' }}
        >
          View documentation
        </tet.a>
      )}
    </tet.div>
  </tet.section>
);
