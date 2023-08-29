import { SvgProps } from '@xstyled/styled-components';
import { FC, HtmlHTMLAttributes, SVGAttributes, SVGProps } from 'react';

import { SocialButtonProps } from './SocialButton.props';
import { socialButtonConfig } from './SocialButton.styles';
import { iconButtonConfig } from '../IconButton/IconButton.styles';

import { tet } from '@/tetrisly';

const socials = {
  Apple: {
    Icon: ({ fill }: { fill: SVGProps<SVGSVGElement>['fill'] }) => (
      <tet.svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M17.1858 7.1362C17.0814 7.2172 15.2382 8.2558 15.2382 10.5652C15.2382 13.2364 17.5836 14.1814 17.6538 14.2048C17.643 14.2624 17.2812 15.499 16.4172 16.759C15.6468 17.8678 14.8422 18.9748 13.6182 18.9748C12.3942 18.9748 12.0792 18.2638 10.6662 18.2638C9.2892 18.2638 8.7996 18.9982 7.68 18.9982C6.5604 18.9982 5.7792 17.9722 4.881 16.7122C3.8406 15.2326 3 12.934 3 10.7524C3 7.2532 5.2752 5.3974 7.5144 5.3974C8.7042 5.3974 9.696 6.1786 10.443 6.1786C11.154 6.1786 12.2628 5.3506 13.6164 5.3506C14.1294 5.3506 15.9726 5.3974 17.1858 7.1362ZM12.9738 3.8692C13.5336 3.205 13.9296 2.2834 13.9296 1.3618C13.9296 1.234 13.9188 1.1044 13.8954 1C12.9846 1.0342 11.901 1.6066 11.2476 2.3644C10.7346 2.9476 10.2558 3.8692 10.2558 4.8034C10.2558 4.9438 10.2792 5.0842 10.29 5.1292C10.3476 5.14 10.4412 5.1526 10.5348 5.1526C11.352 5.1526 12.3798 4.6054 12.9738 3.8692Z"
          fill={fill}
        />
      </tet.svg>
    ),
    color: '#000',
  },
  Facebook: {
    Icon: ({ fill }: { fill: SVGProps<SVGSVGElement>['fill'] }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M10.4061 17.8908V11.6021H12.5033L12.902 8.99995H10.4061V7.31158C10.4061 6.60029 10.7542 5.90545 11.873 5.90545H13.0083V3.69057C13.0083 3.69057 11.9781 3.51465 10.9934 3.51465C8.93797 3.51465 7.59386 4.76004 7.59386 7.01669V8.99995H5.30811V11.6021H7.59386V17.8908C3.2912 17.2157 0 13.4922 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.4922 14.7088 17.2157 10.4061 17.8908Z"
          fill={fill}
        />
      </svg>
    ),
    color: '#1977F3',
  },
  Figma: {
    Icon: ({ fill }: { fill: SVGProps<SVGSVGElement>['fill'] }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="20"
        viewBox="0 0 14 20"
        fill={fill === 'white' ? 'black' : 'white'}
      >
        <path
          d="M3.99999 19C5.65599 19 6.99999 17.656 6.99999 16V13H3.99999C2.344 13 1 14.344 1 16C1 17.656 2.344 19 3.99999 19Z"
          stroke={fill}
          strokeWidth="1.5"
        />
        <path
          d="M1 9.99975C1 8.34375 2.344 6.99976 3.99999 6.99976H6.99999V12.9997H3.99999C2.344 12.9997 1 11.6557 1 9.99975Z"
          stroke={fill}
          strokeWidth="1.5"
        />
        <path
          d="M1 3.99999C1 2.344 2.344 1 3.99999 1H6.99999V6.99999H3.99999C2.344 6.99999 1 5.65599 1 3.99999Z"
          stroke={fill}
          strokeWidth="1.5"
        />
        <path
          d="M7 1H9.99999C11.656 1 13 2.344 13 3.99999C13 5.65599 11.656 6.99999 9.99999 6.99999H7V1Z"
          stroke={fill}
          strokeWidth="1.5"
        />
        <path
          d="M13 9.99975C13 11.6557 11.656 12.9997 9.99999 12.9997C8.344 12.9997 7 11.6557 7 9.99975C7 8.34375 8.344 6.99976 9.99999 6.99976C11.656 6.99976 13 8.34375 13 9.99975Z"
          stroke={fill}
          strokeWidth="1.5"
        />
      </svg>
    ),
    color: '#000',
  },
  Github: {
    Icon: ({ fill }: { fill: SVGProps<SVGSVGElement>['fill'] }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 1C5.0275 1 1 5.0275 1 10C1 13.9825 3.57625 17.3463 7.15375 18.5387C7.60375 18.6175 7.7725 18.3475 7.7725 18.1112C7.7725 17.8975 7.76125 17.1888 7.76125 16.435C5.5 16.8513 4.915 15.8837 4.735 15.3775C4.63375 15.1187 4.195 14.32 3.8125 14.1062C3.4975 13.9375 3.0475 13.5212 3.80125 13.51C4.51 13.4987 5.01625 14.1625 5.185 14.4325C5.995 15.7937 7.28875 15.4113 7.80625 15.175C7.885 14.59 8.12125 14.1962 8.38 13.9712C6.3775 13.7463 4.285 12.97 4.285 9.5275C4.285 8.54875 4.63375 7.73875 5.2075 7.10875C5.1175 6.88375 4.8025 5.96125 5.2975 4.72375C5.2975 4.72375 6.05125 4.4875 7.7725 5.64625C8.4925 5.44375 9.2575 5.3425 10.0225 5.3425C10.7875 5.3425 11.5525 5.44375 12.2725 5.64625C13.9938 4.47625 14.7475 4.72375 14.7475 4.72375C15.2425 5.96125 14.9275 6.88375 14.8375 7.10875C15.4113 7.73875 15.76 8.5375 15.76 9.5275C15.76 12.9812 13.6562 13.7463 11.6538 13.9712C11.98 14.2525 12.2613 14.7925 12.2613 15.6363C12.2613 16.84 12.25 17.8075 12.25 18.1112C12.25 18.3475 12.4187 18.6287 12.8688 18.5387C16.4237 17.3463 19 13.9712 19 10C19 5.0275 14.9725 1 10 1Z"
          fill={fill}
        />
      </svg>
    ),
    color: '#000',
  },
  Google: {
    Icon: ({ fill: _ }: { fill: SVGProps<SVGSVGElement>['fill'] }) => (
      <tet.div
        ml="-10px"
        display="flex"
        padding="100"
        justifyContent="center"
        alignItems="center"
        borderRadius="medium"
        bg="action-inverted-normal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M17.6175 9.20274C17.6175 8.61024 17.565 8.04774 17.475 7.50024H9V10.8827H13.8525C13.635 11.9927 12.9975 12.9302 12.0525 13.5677V15.8177H14.9475C16.6425 14.2502 17.6175 11.9402 17.6175 9.20274Z"
            fill="#4285F4"
          />
          <path
            d="M9.00027 17.9998C11.4303 17.9998 13.4628 17.1898 14.9478 15.8173L12.0528 13.5673C11.2428 14.1073 10.2153 14.4373 9.00027 14.4373C6.65277 14.4373 4.66527 12.8548 3.95277 10.7173H0.967773V13.0348C2.44527 15.9748 5.48277 17.9998 9.00027 17.9998Z"
            fill="#34A853"
          />
          <path
            d="M3.9525 10.7173C3.765 10.1773 3.6675 9.59984 3.6675 8.99984C3.6675 8.39984 3.7725 7.82234 3.9525 7.28234V4.96484H0.967499C0.352499 6.17984 0 7.54484 0 8.99984C0 10.4548 0.352499 11.8198 0.967499 13.0348L3.9525 10.7173Z"
            fill="#FBBC05"
          />
          <path
            d="M9.00027 3.5625C10.3278 3.5625 11.5128 4.02 12.4503 4.9125L15.0153 2.3475C13.4628 0.892501 11.4303 0 9.00027 0C5.48277 0 2.44527 2.025 0.967773 4.965L3.95277 7.2825C4.66527 5.145 6.65277 3.5625 9.00027 3.5625Z"
            fill="#EA4335"
          />
        </svg>
      </tet.div>
    ),
    color: '#468BEF',
  },
  'X (Twitter)': {
    Icon: ({ fill }: { fill: SVGProps<SVGSVGElement>['fill'] }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M15.1761 2H17.9362L11.9061 8.89195L19 18.2703H13.4456L9.09512 12.5824L4.11723 18.2703H1.35544L7.80517 10.8986L1 2H6.69545L10.6279 7.199L15.1761 2ZM14.2073 16.6183H15.7368L5.86441 3.56529H4.2232L14.2073 16.6183Z"
          fill={fill}
        />
      </svg>
    ),
    color: '#000',
  },
} as const satisfies Record<
  SocialButtonProps['platform'],
  {
    Icon: FC<{ fill: SVGProps<SVGSVGElement>['fill'] }>;
    color: string;
  }
>;

export const SocialButton: FC<SocialButtonProps> = ({
  platform,
  appearance = 'primary',
}) => {
  const social = socials[platform];

  const { appearances, ...styles } = socialButtonConfig;
  const appearancesStyles = appearances[appearance] ?? {};
  return (
    <tet.button
      {...styles}
      {...appearancesStyles}
      bg={appearance === 'primary' ? social.color : 'action-inverted-normal'}
    >
      <social.Icon fill={appearance === 'primary' ? 'white' : social.color} />
      <tet.span
        color={
          appearance === 'primary'
            ? 'content-primary-inverted'
            : 'action-neutral-normal'
        }
      >
        Sign in with {platform}
      </tet.span>
    </tet.button>
  );
};
