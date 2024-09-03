import { FileUploaderConfig } from './FileUploader.styles';

// export type FileUploaderProps = {
//   label?: LabelProps;
//   helperText?: HelperTextProps;
//   multiple?: boolean; // default to false;
//   state?: "default" | "alert" | "disabled";
//   custom?: FileUploaderConfig
//   // anything that goes to the input type="file" element
// } & (
//   | {
//       variant: "drag&drop";
//       isExtended?: boolean; // default to true
//       icon?: IconName<20>;
//       text?: string; // defaults to what is on Figma (with the blue "choose file") if provided, than override with simple text
//       caption?: string;
//     }
//   | {
//       variant: "button";
//     }
// );
export type FileUploaderProps = {
  custom?: FileUploaderConfig;
};
