import { Avatar } from '../components/Avatar/Avatar';
import { AvatarProps } from '../components/Avatar/Avatar.props';
import { appearances } from '../types/Appearance';

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
      <tet.section key={emphasis} pb="component-padding-4xLarge" px="1000">
        <tet.h2 py="500" text="header-3xLarge">
          {capitalize(emphasis)} Emphasis
        </tet.h2>
        <tet.div display="flex" gap="80px" justifyContent="space-between">
          {shapes.map((shape) => (
            <tet.div key={shape} display="flex" flexDirection="column">
              <tet.h3
                py="component-padding-2xLarge"
                color="content-secondary"
                text="body-large"
                borderBottomWidth="1px"
                borderBottomColor="border-default"
              >
                {shape === 'rounded'
                  ? 'Shape: Rounded (Default)'
                  : 'Shape: Square'}
              </tet.h3>
              <tet.hr />
              <tet.div
                display="flex"
                flexDirection="column"
                gap="component-gap-xLarge"
                py="component-padding-2xLarge"
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
                {appearances.map((appearance) => (
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
        </tet.div>
      </tet.section>
    ))}
  </>
);

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
