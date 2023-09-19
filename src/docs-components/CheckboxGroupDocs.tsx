import { SectionHeader } from './common/SectionHeader';

import { CheckboxGroup } from '@/components/CheckboxGroup';
import { tet } from '@/tetrisly';

export const CheckboxGroupDocs = () => (
  <>
    <tet.section display="flex" flexDirection="column" justifyContent="center">
      <SectionHeader variant="H1" as="h2">
        Horizontal Group
      </SectionHeader>
      <CheckboxGroup
        my="500"
        mx="auto"
        label="Label"
        helperText="Helper text"
        column={4}
      >
        <CheckboxGroup.Item label="Checkbox Label 1" />
        <CheckboxGroup.Item label="Checkbox Label 2" />
        <CheckboxGroup.Item label="Checkbox Label 3" />
        <CheckboxGroup.Item label="Checkbox Label 4" />
        <CheckboxGroup.Item label="Checkbox Label 5" />
        <CheckboxGroup.Item label="Checkbox Label 6" />
        <CheckboxGroup.Item label="Checkbox Label 7" />
        <CheckboxGroup.Item label="Checkbox Label 8" />
      </CheckboxGroup>
    </tet.section>

    <tet.section display="flex" flexDirection="column" justifyContent="center">
      <SectionHeader variant="H1" as="h2">
        Vertical Group
      </SectionHeader>
      <CheckboxGroup
        my="500"
        mx="auto"
        label="Label"
        helperText="Helper text"
        column={1}
      >
        <CheckboxGroup.Item label="Checkbox Label 1" />
        <CheckboxGroup.Item label="Checkbox Label 2" />
        <CheckboxGroup.Item label="Checkbox Label 3" />
        <CheckboxGroup.Item label="Checkbox Label 4" />
        <CheckboxGroup.Item label="Checkbox Label 5" />
        <CheckboxGroup.Item label="Checkbox Label 6" />
        <CheckboxGroup.Item label="Checkbox Label 7" />
        <CheckboxGroup.Item label="Checkbox Label 8" />
      </CheckboxGroup>
    </tet.section>
  </>
);
