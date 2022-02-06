import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.div`
  display: inline-block;
  width: 150px;
  height: 30px;
  border: 1px #bbb solid;
  border-radius: 10px;
  margin-left: 1rem;

  & span {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const InputEdit = styled.input`
  text-align: center;
  width: 150px;
  height: 30px;
`;

export const InputView = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  margin-top: 3rem;

  div.view {
    margin-top: 3rem;
  }
`;

export const MyInput = ({ value, handleValueChange }) => {
  const inputEl = useRef(null);
  const [isEditMode, setEditMode] = useState(false);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    if (isEditMode) {
      inputEl.current.focus();
    }
  }, [isEditMode]);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const handleClick = () => {
    // TODO : isEditMode 상태를 변경합니다.
    setEditMode(!isEditMode);
  };

  const handleBlur = () => {
    // TODO : Edit가 불가능한 상태로 변경합니다.
    setEditMode(false);
    handleValueChange(newValue);
  };

  const handleInputChange = (e) => {
    // TODO : 저장된 value를 업데이트합니다.
    setNewValue(e.target.value);
  };

  return (
    <InputBox>
      {isEditMode ? (
        <InputEdit
          type="text"
          value={newValue}
          ref={inputEl}
          // TODO : 포커스를 잃으면 Edit가 불가능한 상태로 변경되는 메소드가 실행되어야 합니다.
          onBlur={handleBlur}
          // TODO : 변경 사항이 감지되면 저장된 value를 업데이트 되는 메소드가 실행되어야 합니다.
          onChange={handleInputChange}
        />
      ) : (
        <span
          onClick={handleClick}
          // TODO : 클릭하면 Edit가 가능한 상태로 변경되어야 합니다.
        >
          {newValue}
        </span>
      )}
    </InputBox>
  );
};

const cache = {
  name: '김코딩',
  age: 20,
};

const ClickToEdit = () => {
  const [name, setName] = useState(cache.name);
  const [age, setAge] = useState(cache.age);

  return (
    <Wrapper>
      <InputView>
        <label>이름</label>
        <MyInput value={name} handleValueChange={(newValue) => setName(newValue)} />
      </InputView>
      <InputView>
        <label>나이</label>
        <MyInput value={age} handleValueChange={(newValue) => setAge(newValue)} />
      </InputView>
      <InputView>
        <div className="view">
          이름 {name} 나이 {age}
        </div>
      </InputView>
    </Wrapper>
  );
};

export default ClickToEdit;
