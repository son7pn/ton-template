import styled, { keyframes } from "styled-components";

export const Card = styled.div`
  padding: 18px 20px;
  border-radius: 8px;
  background-color: rgb(51, 52, 54);;

  @media (prefers-color-scheme: dark) {
    background-color: #111;
  }
`;

export const FlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const FlexBoxCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.disabled ? "#6e6e6e" : "var(--tg-theme-button-color)"};
  border: 0;
  border-radius: 8px;
  padding: 10px 20px;
  color: var(--tg-theme-button-text-color);
  font-weight: 700;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "inherit")};
`;

export const Ellipsis = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Input = styled("input")`
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #c2c2c2;

  @media (prefers-color-scheme: dark) {
    border: 1px solid #fefefe;
  }
`;

export const Title = styled.h3`
  color: white;
  font-size: 32px;
  font-weight: 500;
  margin: 12px 0;
`
export const riseAndFade = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -180%) scale(1.5);
    opacity: 0;
  }
`;
  
export const BoxClickCoin = styled.div<{ avatar?: string }>`
  width: 100%;
  position: relative;
  cursor: pointer;
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  transition: 0.6s ease-out;
  
  &:before {
    content: '';
    width: 160px;
    height: 180px;
    background-image: url(${(props) => (props.avatar)});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1; /* Ensures the image is behind the content */
  }

  .number-animation {
    position: absolute;
    font-size: 18px;
    font-weight: 600;
    color: #FFF; 
    opacity: 1;
    pointer-events: none;
    user-select: none;
    transform: translate(-50%, -50%);
  }

  .animate {
    animation: ${riseAndFade} 1s ease-out forwards;
  }
`;