import { capitalize } from 'lodash';

import { Cols } from './common/Cols';
import { SectionHeader } from './common/SectionHeader';
import { Avatar } from '../components/Avatar/Avatar';
import { AvatarProps } from '../components/Avatar/Avatar.props';
import { appearances } from '../types/Appearance';

import { avatarAppearanceColors } from '@/components/Avatar/types/AvatarAppearance.type';
import { tet } from '@/tetrisly';

const sizes = [
  'large',
  'medium',
  'small',
  'xSmall',
  '2xSmall',
] satisfies AvatarProps['size'][];
const shapes = ['rounded', 'square'] as const;
const emphasises = ['low', 'high'] as const;

const RowAvatar = ({ size: _, ...props }: AvatarProps) => (
  <tet.div display="flex" gap="40px" alignItems="center">
    {sizes.map((size) => (
      <Avatar key={size} {...props} size={size} />
    ))}
  </tet.div>
);

export const AvatarDocs = () => (
  <>
    {emphasises.map((emphasis) => (
      <tet.section
        key={emphasis}
        pb="$space-component-padding-4xLarge"
        py="$dimension-500"
      >
        <SectionHeader
          px={{ md: '$dimension-1000', _: '$dimension-500' }}
          variant="H1"
          as="h2"
        >
          {capitalize(emphasis)} Emphasis
        </SectionHeader>
        <Cols gap="80px" px={{ md: '$dimension-1000', _: '$dimension-500' }}>
          {shapes.map((shape) => (
            <tet.div key={shape} display="flex" flexDirection="column">
              <SectionHeader variant="H2" as="h3" py="$dimension-500">
                {shape === 'rounded'
                  ? 'Shape: Rounded (Default)'
                  : 'Shape: Square'}
              </SectionHeader>
              <tet.hr />
              <tet.div
                display="flex"
                flexDirection="column"
                gap="$space-component-gap-xLarge"
                py="$space-component-padding-2xLarge"
              >
                {emphasis === 'low' && (
                  <RowAvatar
                    appearance="image"
                    shape={shape}
                    img={{
                      src: 'https://thispersondoesnotexist.com/',
                    }}
                  />
                )}
                {avatarAppearanceColors.map((appearance) => (
                  <RowAvatar
                    key={`${appearance}${shape}${emphasis}`}
                    appearance={appearance}
                    shape={shape}
                    emphasis={emphasis}
                    initials="M"
                  />
                ))}
              </tet.div>
            </tet.div>
          ))}
        </Cols>
      </tet.section>
    ))}
  </>
);
