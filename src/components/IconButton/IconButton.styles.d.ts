import { IconButtonAppearance } from './IconButtonAppearance.type';
import { IconButtonIntent } from './IconButtonIntent.type';
import { IconButtonSize } from './IconButtonSize.type';
import { ButtonVariant } from '../Button/types/ButtonType.type';
import { BaseProps } from '../../types/BaseProps';
type Sizes = Partial<Record<IconButtonSize, BaseProps & {
    dropdownIndicator: BaseProps;
}>>;
export type Intents<TAppearance extends IconButtonAppearance> = {
    [TIntent in IconButtonIntent<TAppearance>]: BaseProps;
};
export type IconButtonConfig = {
    variants: {
        [TVariant in ButtonVariant]: {
            appearances: {
                [TAppearance in IconButtonAppearance<TVariant>]: {
                    intents?: Intents<TAppearance>;
                } & BaseProps;
            };
            sizes?: Sizes;
        } & BaseProps;
    };
} & BaseProps;
export declare const iconButtonConfig: IconButtonConfig;
export {};
