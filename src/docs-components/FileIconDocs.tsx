import { FileIcon } from '@/components/File Icon/FileIcon';
import { tet } from '@/tetrisly';

const iconTypes = [
  'Sketch',
  'Photoshop',
  'Excel',
  'Word',
  'Pdf',
  'Spreadsheet',
  'Document',
  'File',
  'Archive',
  'Figma',
] as const;

export const FileIconDocs = () => (
  <tet.section py="$space-component-padding-4xLarge">
    <tet.div px="$dimension-1000" py="$dimension-500">
      <tet.div display="flex" gap="30px 50px" flexWrap="wrap">
        {iconTypes.map((iconType) => (
          <tet.div
            display="flex"
            flexDirection="column"
            alignItems="center"
            w="64px"
          >
            <tet.div marginBottom="5px" color="rgb(85, 95, 109)">
              {iconType}
            </tet.div>
            <tet.div
              key={iconType}
              display="flex"
              flexDirection="column"
              flexShrink="0"
              flexGrow="1"
              w="64px"
              h="128px"
              border="1.2px dashed"
              borderColor="rgba(151, 71, 255, 1)"
              borderRadius="8px"
              opacity="0px"
              padding="16px"
              gap="16px"
            >
              <FileIcon iconType={iconType} size="Large" />
              <FileIcon iconType={iconType} size="Medium" />
            </tet.div>
          </tet.div>
        ))}
      </tet.div>
    </tet.div>
  </tet.section>
);
