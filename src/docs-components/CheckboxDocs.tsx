import { FC } from 'react';

import { SectionHeader } from './common/SectionHeader';
import { States } from './common/States';

import { Checkbox, CheckboxProps } from '@/components/Checkbox';
import { tet } from '@/tetrisly';

const getYesNo = (yes: boolean) => (yes ? 'Yes' : 'No');

const getLabels = (label: boolean, helperText: boolean) => [
  `Label: ${getYesNo(label)}`,
  `Helper Text: ${getYesNo(helperText)}`,
];

export const CheckboxDocs: FC = () => (
  <tet.div>
    {['Unchecked', 'Checked', 'Indeterminate'].map((state) => (
      <tet.section
        key={state}
        borderBottomWidth="1px"
        borderBottomColor="#9747FF"
        py="500"
      >
        <SectionHeader variant="H1" as="h2">
          {state}
        </SectionHeader>

        {[
          { label: false, helperText: false },
          { label: true, helperText: false },
          { label: true, helperText: true },
        ].map(({ label, helperText }) => (
          <tet.div px="1000" pb="500" key={`${label}${helperText}`}>
            <SectionHeader
              variant="H2"
              as="h3"
              py="500"
              labels={getLabels(label, helperText)}
            />
            <States
              states={['normal', 'disabled', 'alert']}
              flexBasis="130px"
              gap="500"
            />
            <tet.div
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="500"
            >
              <tet.div flexBasis="130px" flexGrow="1" flexShrink="0">
                <Checkbox
                  isChecked={state === 'Checked'}
                  isIndeterminate={state === 'Indeterminate'}
                  mt="500"
                  {...({
                    label: label ? 'Checkbox Label' : undefined,
                    helperText: helperText ? 'Helper Text' : undefined,
                  } as CheckboxProps)}
                />
              </tet.div>
              <tet.div flexBasis="130px" flexGrow="1" flexShrink="0">
                <Checkbox
                  isChecked={state === 'Checked'}
                  isIndeterminate={state === 'Indeterminate'}
                  state="disabled"
                  mt="500"
                  {...({
                    label: label ? 'Checkbox Label' : undefined,
                    helperText: helperText ? 'Helper Text' : undefined,
                  } as CheckboxProps)}
                />
              </tet.div>
              <tet.div flexBasis="130px" flexGrow="1" flexShrink="0">
                <Checkbox
                  isChecked={state === 'Checked'}
                  isIndeterminate={state === 'Indeterminate'}
                  state="alert"
                  mt="500"
                  {...({
                    label: label ? 'Checkbox Label' : undefined,
                    helperText: helperText ? 'Helper Text' : undefined,
                  } as CheckboxProps)}
                />
              </tet.div>
            </tet.div>
          </tet.div>
        ))}
      </tet.section>
    ))}
  </tet.div>
);
