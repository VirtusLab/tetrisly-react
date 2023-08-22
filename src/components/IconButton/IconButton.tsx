import { IconButtonProps } from './IconButton.props';
import { iconButtonConfig } from './IconButton.styles';
import { IconButtonAppearance } from './IconButtonAppearance.type';
import { IconButtonIntent } from './IconButtonIntent.type';
import { IconButtonSize } from './IconButtonSize.type';
import { ButtonVariant } from '../Button/types/ButtonType.type';

export const IconButton = <
  TVariant extends ButtonVariant,
  TAppearance extends IconButtonAppearance<TVariant>,
>({
  intent = 'none' as IconButtonIntent<TAppearance>,
  variant = 'default' as TVariant,
  appearance = 'primary' as TAppearance,
  size = 'medium' as IconButtonSize<TVariant>,
}: IconButtonProps<TVariant, TAppearance>) => {
  const styles = iconButtonConfig;
  return (
    <div>
      IconButton with props:
      <ul>
        <li>appearance: {appearance}</li>
        <li>intent: {intent}</li>
        <li>variant: {variant}</li>
        <li>size: {size}</li>
        {JSON.stringify(styles)}
      </ul>
    </div>
  );
};
