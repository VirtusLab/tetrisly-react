import type { FC } from 'react';

import { SectionHeader } from './common/SectionHeader';
import { States } from './common/States';

import { Toggle } from '@/components/Toggle';
import { tet } from '@/tetrisly';

const getYesNo = (yes: boolean) => (yes ? 'Yes' : 'No');

const getLabels = (label: boolean, helperText: boolean) => [
  `Label: ${getYesNo(label)}`,
  `Helper Text: ${getYesNo(helperText)}`,
];

export const ToggleDocs: FC = () => (
  <tet.div>
    {['Unchecked', 'Checked', 'Indeterminate'].map((state) => (
      <tet.section key={state} py="$dimension-500">
        <SectionHeader
          variant="H1"
          as="h2"
          px="$dimension-1000"
          py="$dimension-500"
        >
          {state}
        </SectionHeader>

        {[
          { label: false, helperText: false },
          { label: true, helperText: false },
          { label: true, helperText: true },
        ].map(({ label, helperText }) => (
          <tet.div
            px="$dimension-1000"
            pb="$dimension-500"
            key={`${label}${helperText}`}
          >
            <SectionHeader
              variant="H2"
              as="h3"
              py="$dimension-500"
              labels={getLabels(label, helperText)}
            />
            <States
              states={[':normal', ':disabled']}
              flexBasis="130px"
              gap="$dimension-500"
            />
            <tet.div
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="$dimension-500"
            >
              <tet.div flexBasis="130px" flexGrow="1" flexShrink="0">
                <tet.div
                  display="flex"
                  flexDirection="column"
                  gap="$space-component-gap-2xLarge"
                >
                  {label ? (
                    <Toggle
                      isIndeterminate={state === 'Indeterminate'}
                      isChecked={state === 'Checked'}
                      mt="$dimension-500"
                      label="Label"
                      helperText={
                        helperText ? { text: 'Helper Text' } : undefined
                      }
                      size="large"
                    />
                  ) : (
                    <Toggle
                      isIndeterminate={state === 'Indeterminate'}
                      isChecked={state === 'Checked'}
                      mt="$dimension-500"
                      size="large"
                    />
                  )}
                  {label ? (
                    <Toggle
                      isIndeterminate={state === 'Indeterminate'}
                      isChecked={state === 'Checked'}
                      mt="$dimension-500"
                      label="Label"
                      helperText={
                        helperText ? { text: 'Helper Text' } : undefined
                      }
                    />
                  ) : (
                    <Toggle
                      isIndeterminate={state === 'Indeterminate'}
                      isChecked={state === 'Checked'}
                      mt="$dimension-500"
                    />
                  )}
                </tet.div>
              </tet.div>
              <tet.div flexBasis="130px" flexGrow="1" flexShrink="0">
                <tet.div
                  display="flex"
                  flexDirection="column"
                  gap="$space-component-gap-2xLarge"
                >
                  {label ? (
                    <Toggle
                      isIndeterminate={state === 'Indeterminate'}
                      isChecked={state === 'Checked'}
                      mt="$dimension-500"
                      state="disabled"
                      label="Label"
                      helperText={
                        helperText ? { text: 'Helper Text' } : undefined
                      }
                      size="large"
                    />
                  ) : (
                    <Toggle
                      isIndeterminate={state === 'Indeterminate'}
                      isChecked={state === 'Checked'}
                      mt="$dimension-500"
                      state="disabled"
                      size="large"
                    />
                  )}
                  {label ? (
                    <Toggle
                      isIndeterminate={state === 'Indeterminate'}
                      isChecked={state === 'Checked'}
                      state="disabled"
                      mt="$dimension-500"
                      label="Label"
                      helperText={
                        helperText ? { text: 'Helper Text' } : undefined
                      }
                    />
                  ) : (
                    <Toggle
                      isIndeterminate={state === 'Indeterminate'}
                      isChecked={state === 'Checked'}
                      state="disabled"
                      mt="$dimension-500"
                    />
                  )}
                </tet.div>
              </tet.div>
            </tet.div>
          </tet.div>
        ))}
      </tet.section>
    ))}
  </tet.div>
);
