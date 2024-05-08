import { useState } from 'react';

import { SectionHeader } from './common/SectionHeader';
import { Tag } from '..';

import { TagInput } from '@/components/TagInput';
import { tet } from '@/tetrisly';

export const TagInputDocs = () => {
  const [noValidationErrorTags, setNoValidationErrorTags] = useState([
    'Tag1',
    'Tag2',
  ]);
  const [validationErrorTags, setValidationErrorTags] = useState([
    'Tag1',
    'Tag2',
  ]);

  return (
    <>
      <tet.section px="$dimension-1000" key="noValidationError">
        <SectionHeader variant="H1" as="h2" py="$dimension-400">
          Validation Error: No
        </SectionHeader>

        <TagInput label="Label" helperText="Helper text">
          {noValidationErrorTags.map((tagLabel) => (
            <Tag
              label={tagLabel}
              key={tagLabel}
              onCloseClick={(e) => {
                setNoValidationErrorTags((tags) =>
                  tags.filter((tag) => tag !== tagLabel),
                );
                e.preventDefault();
              }}
            />
          ))}
        </TagInput>
      </tet.section>

      <tet.section
        px="$dimension-1000"
        key="validationError"
        py="$dimension-800"
      >
        <SectionHeader variant="H1" as="h2" py="$dimension-400">
          Validation Error: Yes
        </SectionHeader>
        <TagInput isValidationError label="Label" helperText="Helper text">
          {validationErrorTags.map((tagLabel) => (
            <Tag
              label={tagLabel}
              key={tagLabel}
              onCloseClick={(e) => {
                setValidationErrorTags((tags) =>
                  tags.filter((tag) => tag !== tagLabel),
                );
                e.preventDefault();
              }}
            />
          ))}
        </TagInput>
      </tet.section>
    </>
  );
};
