import { FC, SVGProps } from 'react';

import { Apple } from './Apple';
import { Facebook } from './Facebook';
import { Figma } from './Figma';
import { Github } from './Github';
import { Google } from './Google';
import { Twitter } from './Twitter';
import { SocialButtonProps } from '../SocialButton.props';

export const socials = {
  Apple: {
    Icon: Apple,
    color: '#000',
  },
  Facebook: {
    Icon: Facebook,
    color: '#1977F3',
  },
  Figma: {
    Icon: Figma,
    color: '#000',
  },
  Github: {
    Icon: Github,
    color: '#000',
  },
  Google: {
    Icon: Google,
    color: '#468BEF',
  },
  'X (Twitter)': {
    Icon: Twitter,
    color: '#000',
  },
} as const satisfies Record<
  SocialButtonProps['platform'],
  {
    Icon: FC<{ fill: SVGProps<SVGSVGElement>['fill'] }>;
    color: string;
  }
>;
