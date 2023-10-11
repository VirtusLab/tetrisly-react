import { SectionHeader } from './common/SectionHeader';

import { RadioButtonGroup } from '@/components/RadioButtonGroup';
import { tet } from '@/tetrisly';

export const RadioButtonGroupDocs = () => (
  <>
    <tet.section display="flex" flexDirection="column" justifyContent="center">
      <SectionHeader
        variant="H1"
        as="h2"
        px="$dimension-1000"
        py="$dimension-500"
      >
        Horizontal Group
      </SectionHeader>
      <RadioButtonGroup
        my="$dimension-500"
        mx="auto"
        label="Label"
        name="my-radio-group"
        helperText="Helper text"
        column={4}
      >
        <RadioButtonGroup.Item label="Checkbox Label 1" />
        <RadioButtonGroup.Item label="Checkbox Label 2" />
        <RadioButtonGroup.Item label="Checkbox Label 3" />
        <RadioButtonGroup.Item label="Checkbox Label 4" />
        <RadioButtonGroup.Item label="Checkbox Label 5" />
        <RadioButtonGroup.Item label="Checkbox Label 6" />
        <RadioButtonGroup.Item label="Checkbox Label 7" />
        <RadioButtonGroup.Item label="Checkbox Label 8" />
      </RadioButtonGroup>
    </tet.section>

    <tet.section display="flex" flexDirection="column" justifyContent="center">
      <SectionHeader
        variant="H1"
        as="h2"
        px="$dimension-1000"
        py="$dimension-500"
      >
        Vertical Group
      </SectionHeader>
      <RadioButtonGroup
        my="$dimension-500"
        mx="auto"
        label="Label"
        name="another-radio-group"
        helperText="Helper text"
        column={1}
      >
        <RadioButtonGroup.Item label="Checkbox Label 1" />
        <RadioButtonGroup.Item label="Checkbox Label 2" />
        <RadioButtonGroup.Item label="Checkbox Label 3" />
        <RadioButtonGroup.Item label="Checkbox Label 4" />
        <RadioButtonGroup.Item label="Checkbox Label 5" />
        <RadioButtonGroup.Item label="Checkbox Label 6" />
        <RadioButtonGroup.Item label="Checkbox Label 7" />
        <RadioButtonGroup.Item label="Checkbox Label 8" />
      </RadioButtonGroup>
    </tet.section>
  </>
);
