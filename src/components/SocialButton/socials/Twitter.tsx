import { SocialProps } from './SocialProps';
import { WithLoader } from './WithLoader';

export const Twitter: React.FC<SocialProps> = ({ fill, loading }) => (
  <WithLoader loading={loading}>
    <svg
      data-testid="x-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M15.1761 2H17.9362L11.9061 8.89195L19 18.2703H13.4456L9.09512 12.5824L4.11723 18.2703H1.35544L7.80517 10.8986L1 2H6.69545L10.6279 7.199L15.1761 2ZM14.2073 16.6183H15.7368L5.86441 3.56529H4.2232L14.2073 16.6183Z"
        fill={fill}
      />
    </svg>
  </WithLoader>
);
