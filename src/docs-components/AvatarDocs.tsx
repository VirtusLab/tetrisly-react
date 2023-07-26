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
                      src: 'https://s3-alpha-sig.figma.com/img/cb99/66a9/febdebc9b4448067c48c4c3ec18e1b11?Expires=1690761600&Signature=DLwDbJ0lgvoDbeKHt39jxTn0PYgIE9n9fBw7GQiL4i90ZFkShisjffyiGFAQejpGiuR4Z7R1DxKEThE3JdeNW2XOn~a5Ebt73WGSAy122OpxUbD4QwMDpFv5kx4BYNRKAlm6JatDiwMzjKkK~1oURn0AlsXLKoj64M3hVpMBRlJ4VrGbyach4FVRPpqXhyJy0Xgb6htBEHw31ZLdcRHCsat~jqmEdDWxTScUaUiXo3jgQiAH9cipn5lZreJ2jwXKjaCLIUjqYTPWs1a8SHob4zyI5Yh9t5T9uU3Ou7oamEGmsu157cpLA3Ad9kp6Y5l3tRo9VnS3LG3J3NJUhxObWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
