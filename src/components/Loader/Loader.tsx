import { styled, tet } from '../../tetrisly/tetrisly';
import { MarginProps } from '../../types/MarginProps';

const Loader = (props: MarginProps) => (
  <tet.svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <circle cx="16" cy="16" r="13" stroke="#F0F3F5" strokeWidth="2" />
    <path
      d="M3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3"
      stroke="#3062D4"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </tet.svg>
);

const StyledLoader = styled(Loader)`
  animation: spin 1s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export { StyledLoader as Loader };
