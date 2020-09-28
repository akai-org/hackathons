import styled, { keyframes } from 'react-emotion';

const spin = keyframes`
0% {
  transform: rotateY(0deg);
}
50% {
  transform: rotateY(360deg);
}
100% {
  transform: rotateY(0deg);
} 
`;

const Logo = styled('img')`
  animation: ${spin} infinite 5s linear;
  height: 80px;
`;

export default Logo;
