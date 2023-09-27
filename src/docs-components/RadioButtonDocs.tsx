import { FC } from 'react';

import { SectionHeader } from './common/SectionHeader';
import { States } from './common/States';

import { RadioButton, RadioButtonProps } from '@/components/RadioButton';
import { tet } from '@/tetrisly';

const getYesNo = (yes: boolean) => (yes ? 'Yes' : 'No');

const getLabels = (label: boolean, helperText: boolean) => [
  `Label: ${getYesNo(label)}`,
  `Helper Text: ${getYesNo(helperText)}`,
];

export const RadioButtonDocs: FC = () => (
  <tet.div>
    {['Unchecked', 'Checked'].map((state) => (
      <tet.section key={state} py="500">
        <SectionHeader variant="H1" as="h2" px="1000" py="500">
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
                <RadioButton
                  isChecked={state === 'Checked'}
                  mt="500"
                  {...({
                    label: label ? 'Checkbox Label' : undefined,
                    helperText: helperText ? 'Helper Text' : undefined,
                  } as RadioButtonProps)}
                />
              </tet.div>
              <tet.div flexBasis="130px" flexGrow="1" flexShrink="0">
                <RadioButton
                  isChecked={state === 'Checked'}
                  state="disabled"
                  mt="500"
                  {...({
                    label: label ? 'Checkbox Label' : undefined,
                    helperText: helperText ? 'Helper Text' : undefined,
                  } as RadioButtonProps)}
                />
              </tet.div>
              <tet.div flexBasis="130px" flexGrow="1" flexShrink="0">
                <RadioButton
                  isChecked={state === 'Checked'}
                  state="alert"
                  mt="500"
                  {...({
                    label: label ? 'Checkbox Label' : undefined,
                    helperText: helperText ? 'Helper Text' : undefined,
                  } as RadioButtonProps)}
                />
              </tet.div>
            </tet.div>
          </tet.div>
        ))}
      </tet.section>
    ))}
  </tet.div>
);
