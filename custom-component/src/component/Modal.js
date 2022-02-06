import { useState, useRef } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const ModalBackground = styled.div`
  position: absolute;
  width: ${({ size }) => size.offsetWidth}px;
  height: ${({ size }) => size.offsetHeight}px;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
  animation: fadeInModal 0.5s ease-out forwards;

  @keyframes fadeInModal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalPopup = styled.div`
  width: 30%;
  height: 50%;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: purple;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
`;

const ModalCloseBtn = styled.div`
  margin-bottom: 1rem;
  width: 1rem;
  text-align: center;
  color: black;
  cursor: pointer;
`;

const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  cursor: grab;
`;

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fatherRef = useRef(null);

  const toggleClose = (e) => {
    fatherRef.current.previousElementSibling.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 500,
      fill: 'forwards',
      easing: 'ease-out',
    });
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <>
      {isOpen && (
        <ModalBackground size={fatherRef.current.parentElement} onClick={toggleClose}>
          <ModalPopup onClick={(e) => e.stopPropagation()}>
            <ModalCloseBtn onClick={toggleClose}>x</ModalCloseBtn>
            HELLO CODESTATES!
          </ModalPopup>
        </ModalBackground>
      )}
      <ModalContainer ref={fatherRef}>
        <ModalBtn onClick={() => setIsOpen(true)}>{isOpen ? 'Opened!' : 'Open Modal'}</ModalBtn>
      </ModalContainer>
    </>
  );
};

export default Modal;
