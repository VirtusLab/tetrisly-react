import { BaseProps } from '../../types';
export type IconType = 'Sketch' | 'Photoshop' | 'Excel' | 'Word' | 'Pdf' | 'Spreadsheet' | 'Document' | 'File' | 'Archive' | 'Figma';
export type Size = 'Large' | 'Medium';
export type FileIconProps = {
    iconType: IconType;
    size?: Size;
    custom?: BaseProps;
};
