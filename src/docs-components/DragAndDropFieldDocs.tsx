import { SectionHeader } from './common/SectionHeader';

import { DragAndDropField } from '@/components/DragAndDropField';
import { tet } from '@/tetrisly';

const extendedVariants = [false, true] as const;
const states = [
  'normal',
  'hover',
  'dragover',
  'focus',
  'alert',
  'alertfocus',
  'disabled',
] as const;
const caption = 'JPG, GIF or PNG. Max size of 800K';

export const DragAndDropFieldDocs = () => (
  <tet.div>
    {extendedVariants.map((variant) => (
      <tet.section
        key={`extended-${variant}`}
        display="flex"
        pt="$dimension-500"
        flexDirection="column"
      >
        <SectionHeader
          px="$dimension-1000"
          variant="H3"
          as="h4"
          pt="$dimension-500"
        >
          Extended: {variant ? 'True' : 'False'}
        </SectionHeader>
        <tet.div px="$dimension-1000" py="$dimension-500">
          <tet.div display="flex" gap={30} flexWrap="wrap">
            {states.map((state) => (
              <tet.div
                key={state}
                gap={40}
                display="flex"
                flexDirection="column"
                flexWrap="wrap"
              >
                <tet.div flexShrink="0" flexGrow="1">
                  <tet.span text="$typo-body-medium">
                    <tet.mark
                      borderRadius="$border-radius-small"
                      bg="$color-nonSemantic-orange-background-onSubtle"
                      px="$space-component-padding-2xSmall"
                      color="$color-content-primary"
                    >
                      {state}
                    </tet.mark>
                  </tet.span>
                </tet.div>

                <tet.div
                  key={state}
                  display="flex"
                  flexBasis="100px"
                  flexShrink="0"
                  flexGrow="1"
                  flexWrap="wrap"
                >
                  <DragAndDropField
                    extended={variant}
                    state={state}
                    caption={caption}
                  />
                </tet.div>
              </tet.div>
            ))}
          </tet.div>
        </tet.div>
      </tet.section>
    ))}
  </tet.div>
);
