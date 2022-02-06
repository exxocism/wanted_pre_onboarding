import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const ToggleWrapper = styled.div`
  width: 50px;
  height: 24px;
  border-radius: 30px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  background: linear-gradient(to left, #8b8b8b 50%, darkviolet 50%) right;
  background-size: 200%;
  transition: 0.5s ease-out;
  background-position: ${({ isOn }) => (isOn ? 'left' : 'right')};
  padding: 2px;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffffff;
  animation: ${({ isOn }) => (isOn ? 'ToggleOn' : 'ToggleOff')} 0.5s ease-out forwards;

  @keyframes ToggleOn {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(25px);
    }
  }

  @keyframes ToggleOff {
    0% {
      transform: translateX(25px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const Desc = styled.div`
  margin-top: 10px;
`;

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Container>
      <ToggleWrapper isOn={isOn} onClick={() => setIsOn(!isOn)}>
        <Circle isOn={isOn} />
      </ToggleWrapper>
      <Desc>Toggle Switch {isOn ? 'ON' : 'OFF'}</Desc>
    </Container>
  );
};

export default Toggle;
