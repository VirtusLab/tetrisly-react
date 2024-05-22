import { InputHTMLAttributes } from 'react';
import type { TagInputConfig } from './TagInput.styles';
import { HelperTextProps } from '../HelperText';
import { LabelProps } from '../Label';
import { BasicInputState } from '../../types';
export type TagInputProps = {
    custom?: TagInputConfig;
    state?: BasicInputState;
    isValidationError?: boolean;
    label?: Pick<LabelProps, 'label' | 'action' | 'optional'>;
    helperText?: Pick<HelperTextProps, 'text' | 'intent' | 'hasBeforeIcon'>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'disabled' | 'color' | 'type'>;
