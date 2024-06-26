import { capitalize } from 'lodash';

import { Cols } from './common/Cols';
import { SectionHeader } from './common/SectionHeader';

import { Loader } from '@/components/Loader';
import { LoaderAppearance, LoaderShape } from '@/components/Loader/types';
import { tet } from '@/tetrisly';

const shapes = ['bar', 'circle'] satisfies LoaderShape[];
const appearances = [
  'primary',
  'inverted',
  'white',
  'greyscale',
] satisfies LoaderAppearance[];

const bgMap = {
  primary: undefined,
  inverted: '$color-background-neutral-subtle',
  white: '$color-background-inverted',
  greyscale: undefined,
} as const;

export const LoaderDocs = () => (
  <>
    {shapes.map((shape) => (
      <tet.section key={shape}>
        <tet.div>
          <SectionHeader variant="Hero" as="h2" px="$dimension-1000">
            Shape: {capitalize(shape)}
          </SectionHeader>
          {appearances.map((appearance) => {
            const progress = Math.random();
            return (
              <tet.div
                key={`${shape}${appearance}`}
                bg={bgMap[appearance]}
                px="$dimension-1000"
                py="$dimension-500"
              >
                <SectionHeader
                  variant="H1"
                  as="h2"
                  py="$dimension-500"
                  inverted={appearance === 'white'}
                >
                  {capitalize(appearance)}
                </SectionHeader>
                <Cols>
                  <tet.div>
                    <SectionHeader
                      variant="H2"
                      as="h4"
                      inverted={appearance === 'white'}
                      py="$dimension-500"
                    >
                      Progress: No
                    </SectionHeader>
                    <Loader
                      shape={shape}
                      appearance={appearance}
                      my="$dimension-500"
                    />
                  </tet.div>
                  <tet.div>
                    <SectionHeader
                      variant="H2"
                      as="h4"
                      inverted={appearance === 'white'}
                      py="$dimension-500"
                    >
                      Progress: Yes ({Math.floor(progress * 100)}%)
                    </SectionHeader>
                    <Loader
                      shape={shape}
                      appearance={appearance}
                      progress={progress}
                      my="$dimension-500"
                    />
                  </tet.div>
                </Cols>
              </tet.div>
            );
          })}
        </tet.div>
      </tet.section>
    ))}
  </>
);
