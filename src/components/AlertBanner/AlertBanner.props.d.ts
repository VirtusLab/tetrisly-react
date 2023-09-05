import { MouseEvent } from 'react';
import { AlertBannerConfig } from './AlertBanner.styles';
import { AlertBannerIntent } from './types';
import { ActionProp } from '../../types';
export type AlertBannerProps = {
    text: string;
    intent?: AlertBannerIntent;
    action?: ActionProp;
    onCloseClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    custom?: AlertBannerConfig;
};
