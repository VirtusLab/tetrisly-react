import { DragAndDropFieldProps } from './DragAndDropField.props';
import { defaultConfig } from './DragAndDropField.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type DragAndDropFieldStylesBuilder = {
  container: BaseProps;
  icon: BaseProps;
  title: BaseProps;
  description: BaseProps;
};

export const stylesBuilder = (
  props: DragAndDropFieldProps,
): DragAndDropFieldStylesBuilder => {
  const { extended, notExtended, innerElements, ...container } =
    mergeConfigWithCustom({
      defaultConfig,
      custom: props.custom,
    });

  const {
    common: withExtensionStyles,
    dragOver,
    ...extendedStyles
  } = props.isExtended ? extended : notExtended;
  const withStateStyles = extendedStyles[props.state ?? 'default'];
  const withDragOverStyles = props.isDragOver ? dragOver : {};

  return {
    container: {
      ...container,
      ...withExtensionStyles,
      ...withStateStyles,
      ...withDragOverStyles,
    },
    icon: innerElements.icon,
    title: innerElements.title,
    description: innerElements.description,
  };
};
