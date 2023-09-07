import { FC } from 'react';

import { Logo } from './Logo';
import { TetrislyMark } from './TetrislyMark';

import { tet } from '@/tetrisly';

type HeroProps = {
  component: string;
  description: string;
  docs: string | null;
};

export const Hero: FC<HeroProps> = ({ component, description, docs }) => (
  <tet.section
    p="component-padding-3xLarge"
    display="flex"
    flexDirection="column"
  >
    <tet.div
      p="component-padding-6xLarge"
      background="linear-gradient(225deg, #FEF1E7 0%, #DDF3F9 100%);"
      borderRadius="xLarge"
    >
      <tet.div display="flex" justifyContent="space-between">
        <tet.div display="flex" gap="component-gap-medium" alignItems="center">
          <TetrislyMark />
          <tet.span text="body-small" color="content-secondary">
            Components
          </tet.span>
        </tet.div>
        <tet.a href="https://tetrisly.com/" target="_blank">
          <Logo />
        </tet.a>
      </tet.div>
      <tet.div
        my="component-gap-xLarge"
        display="flex"
        gap="component-gap-large"
        flexDirection="column"
      >
        <tet.h1 text="hero-medium">{component}</tet.h1>
        <tet.p color="content-secondary" text="body-large">
          {description}
        </tet.p>
      </tet.div>
      {docs && (
        <tet.a
          href={docs}
          target="_blank"
          rel="noreferrer"
          color="action-primary-normal"
        >
          View documentation
        </tet.a>
      )}
    </tet.div>
  </tet.section>
);
