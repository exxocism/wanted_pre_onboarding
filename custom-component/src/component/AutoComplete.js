import { useState, useEffect } from 'react';
import styled from 'styled-components';

const deselectedOptions = [
  'rustic',
  'antique',
  'vinyl',
  'vintage',
  'refurbished',
  '신품',
  '빈티지',
  '중고A급',
  '중고B급',
  '골동품',
];

const boxShadow = '0 4px 6px rgb(32 33 36 / 28%)';
const activeBorderRadius = '1rem 1rem 0 0';
const inactiveBorderRadius = '1rem 1rem 1rem 1rem';

const AutocompleteWrapper = styled.div`
  padding: 0 5rem;
`;

const InputContainer = styled.div`
  margin-top: 8rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid rgb(223, 225, 229);
  border-radius: ${inactiveBorderRadius};
  z-index: 3;
  box-shadow: 0;

  &:focus-within {
    box-shadow: ${boxShadow};
  }

  > input {
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
  }

  > div.delete-button {
    cursor: pointer;
  }
`;

const DropDownContainer = styled.ul`
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  box-shadow: ${boxShadow};
  z-index: 3;

  > li {
    padding: 0 1rem;
  }
`;

const Autocomplete = () => {
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);

  useEffect(() => {
    if (inputValue === '') {
      setHasText(false);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    const filteredOptions = deselectedOptions.filter((text) => {
      const text_check = text.slice(0, event.target.value.length);
      return text_check === event.target.value;
    });
    setOptions(filteredOptions);
    setHasText(true);
    setInputValue(event.target.value);
  };

  const handleDropDownClick = (clickedOption) => {
    setInputValue(options[clickedOption]);
    const filteredOptions = deselectedOptions.filter((text) => {
      const text_check = text.slice(0, options[clickedOption].length);
      return text_check === options[clickedOption];
    });
    setOptions(filteredOptions);
  };

  const handleDeleteButtonClick = () => setInputValue('');

  return (
    <AutocompleteWrapper>
      <InputContainer>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <div className="delete-button" onClick={handleDeleteButtonClick}>
          &times;
        </div>
      </InputContainer>
      {hasText ? <DropDown options={options} handleComboBox={handleDropDownClick} /> : false}
    </AutocompleteWrapper>
  );
};

const DropDown = ({ options, handleComboBox }) => {
  return (
    <DropDownContainer>
      {options.map((option, id) => {
        return (
          <li
            key={id}
            onClick={() => {
              handleComboBox(id);
            }}
          >
            {option}
          </li>
        );
      })}
    </DropDownContainer>
  );
};

export default Autocomplete;
