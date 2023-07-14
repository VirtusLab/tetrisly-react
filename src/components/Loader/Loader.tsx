import { styled, tet } from '../../tetrisly/tetrisly';
import { MarginProps } from '../../types/MarginProps';

const Loader = (props: MarginProps) => (
  <tet.svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <circle cx="10" cy="10" r="7" stroke="#F0F3F5" strokeWidth="2" />
    <path
      d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3"
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
