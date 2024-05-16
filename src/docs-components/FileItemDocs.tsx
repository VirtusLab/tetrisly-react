import { action } from '@storybook/addon-actions';
import { capitalize } from 'lodash';

import { SectionHeader } from './common/SectionHeader';
import { States } from './common/States';

import { FileItem } from '@/components/FileItem';
import { mockTextFile, mockImageFile } from '@/components/FileItem/mocks';
import { tet } from '@/tetrisly';

type Variants = {
  inverted: boolean;
  extended: boolean;
  thumbnail: 'none' | 'file' | 'photo';
};

const sections: Variants[] = [
  { inverted: false, extended: false, thumbnail: 'none' },
  { inverted: true, extended: false, thumbnail: 'none' },
  { inverted: false, extended: true, thumbnail: 'none' },
  { inverted: true, extended: true, thumbnail: 'none' },
  { inverted: false, extended: true, thumbnail: 'file' },
  { inverted: true, extended: true, thumbnail: 'file' },
  { inverted: false, extended: true, thumbnail: 'photo' },
  { inverted: true, extended: true, thumbnail: 'photo' },
];

export const FileItemDocs = () => (
  <tet.section display="flex" flexDirection="column">
    {sections.map((variants) => {
      const labels = Object.entries(variants).map(
        ([name, value]) => `${capitalize(name)}: ${getVariantLabel(value)}`,
      );

      const file =
        variants.thumbnail === 'photo' ? mockImageFile() : mockTextFile();

      return (
        <tet.div key={labels.join()}>
          <SectionHeader
            variant="H2"
            as="h3"
            paddingBottom="$dimension-250"
            labels={labels}
          />

          <tet.div
            py="$dimension-250"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <tet.div>
              <States
                states={[':uploading', ':uploaded']}
                gap="$dimension-500"
                flexBasis="50%"
              />

              <tet.div display="flex" gap="$dimension-500" py="$dimension-250">
                <tet.div flexShrink="0" flexGrow="1" flexBasis="50%">
                  <FileItem
                    file={file}
                    state="uploading"
                    isInverted={variants.inverted}
                    isExtended={variants.extended}
                    thumbnail={variants.thumbnail}
                    uploadedPercentage={44}
                    timeLeftText="7 seconds left"
                    onReplaceClick={action('onReplaceClick')}
                    onRetryClick={action('onRetryClick')}
                    onCloseClick={action('onCloseClick')}
                  />
                </tet.div>

                <tet.div flexShrink="0" flexGrow="1" flexBasis="50%">
                  <FileItem
                    file={file}
                    state="uploaded"
                    isInverted={variants.inverted}
                    isExtended={variants.extended}
                    thumbnail={variants.thumbnail}
                    onReplaceClick={action('onReplaceClick')}
                    onRetryClick={action('onRetryClick')}
                    onCloseClick={action('onCloseClick')}
                  />
                </tet.div>
              </tet.div>
            </tet.div>

            <tet.div>
              <States
                states={[':replaceable', ':alert']}
                gap="$dimension-500"
                flexBasis="50%"
              />

              <tet.div display="flex" gap="$dimension-500" py="$dimension-250">
                <tet.div flexShrink="0" flexGrow="1" flexBasis="50%">
                  <FileItem
                    file={file}
                    state="replaceable"
                    isInverted={variants.inverted}
                    isExtended={variants.extended}
                    thumbnail={variants.thumbnail}
                    onReplaceClick={action('onReplaceClick')}
                    onRetryClick={action('onRetryClick')}
                    onCloseClick={action('onCloseClick')}
                  />
                </tet.div>

                <tet.div flexShrink="0" flexGrow="1" flexBasis="50%">
                  <FileItem
                    file={file}
                    state="alert"
                    isInverted={variants.inverted}
                    isExtended={variants.extended}
                    thumbnail={variants.thumbnail}
                    alertText="Short alert Text"
                    onReplaceClick={action('onReplaceClick')}
                    onRetryClick={action('onRetryClick')}
                    onCloseClick={action('onCloseClick')}
                  />
                </tet.div>
              </tet.div>
            </tet.div>
          </tet.div>
        </tet.div>
      );
    })}
  </tet.section>
);

const getVariantLabel = (value: Variants[keyof Variants]): string => {
  switch (value) {
    case true:
      return 'Yes';
    case 'file':
      return 'File';
    case 'photo':
      return 'Photo';
    default:
      return 'No';
  }
};
