import { IconButtonStyleProps } from './IconButton.props';
import { IconButtonAppearance } from './IconButtonAppearance.type';
import { ButtonVariant } from '../Button/types/ButtonType.type';
import { BaseProps } from '../../types/BaseProps';
export declare function styleBuilder<TVariant extends ButtonVariant, TAppearance extends IconButtonAppearance<TVariant>>(props: Required<Omit<IconButtonStyleProps<TVariant, TAppearance>, 'icon'>>): BaseProps;
