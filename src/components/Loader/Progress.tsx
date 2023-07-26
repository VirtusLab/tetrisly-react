import { Loader } from './Loader';
import { LoaderProps } from './Loader.props';

export const ProgressCircle = () => <Loader shape="circle" />;
export const ProgressBar = () => <Loader shape="bar" />;

export type ProgressProps = Omit<LoaderProps, 'shape'>;
