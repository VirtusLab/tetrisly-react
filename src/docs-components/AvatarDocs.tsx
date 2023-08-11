import { Hero } from './common/Hero';
import { Avatar } from '../components/Avatar/Avatar';
import { AvatarProps } from '../components/Avatar/Avatar.props';
import { avatarAppearances } from '../components/Avatar/AvatarAppearances';

import { TetrislyProvider, tet } from '@/tetrisly';

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
  <tet.div display="flex" gap="component-gap-xLarge" alignItems="center">
    {sizes.map((size) => (
      <Avatar {...props} size={size} />
    ))}
  </tet.div>
);

export const AvatarDocs = () => (
  <TetrislyProvider>
    <Hero
      component="Avatar"
      description="A visual representation of a user's identity, often displayed as a small image or icon. Avatars can be personalized with user-uploaded photos or auto-generated images and are commonly used in profile sections, comments, and messaging interfaces."
      docs="https://docs.tetrisly.com/components/list/avatar"
    />

    {emphasises.map((emphasis) => (
      <tet.section pb="component-padding-4xLarge">
        <tet.h2 px="1000" py="500" text="header-3xLarge">
          {capitalize(emphasis)} Emphasis
        </tet.h2>
        <tet.div display="flex" justifyContent="space-around">
          {shapes.map((shape) => (
            <tet.div display="flex" flexDirection="column">
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
                {avatarAppearances.map((appearance) => (
                  <RowAvatar
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
  </TetrislyProvider>
);

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
