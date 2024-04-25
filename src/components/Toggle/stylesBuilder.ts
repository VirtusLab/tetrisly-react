import { SystemProps } from '@xstyled/styled-components';

import { ToggleConfig, defaultConfig } from './Toggle.styles.ts';

import { HelperTextConfig } from '@/components/HelperText/HelperText.styles.ts';
import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps.ts';

type ToggleStylesBuilder = {
  container: BaseProps;
  toggleOval: BaseProps;
  slider: BaseProps;
  input: SystemProps;
  label: BaseProps;
  helperText: HelperTextConfig;
};

export const stylesBuilder = (
  size: 'small' | 'large',
  custom?: ToggleConfig,
): ToggleStylesBuilder => {
  const {
    innerElements: {
      toggle: {
        input,
        slider: { size: sliderSize, ...restSlider },
        toggleOval: { size: toggleOvalSize, ...restToggleOval },
      },
      label,
      helperText,
    },
    ...container
  } = mergeConfigWithCustom({ defaultConfig, custom });
  return {
    container,
    input,
    slider: { ...sliderSize[size], ...restSlider },
    toggleOval: { ...toggleOvalSize[size], ...restToggleOval },
    label,
    helperText,
  };
};
