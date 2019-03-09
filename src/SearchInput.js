import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 0px 5px 0px 10px;
  display: flex;
  &:before {
    content: '🔍';
  }
`;

const Input = styled.input`
  min-width: 400px;
  border: none;
  &:focus {
    outline: none;
  }
  font-size: 14px;
`;

const SearchInput = props => {
  return (
    <InputWrapper>
      <Input {...props} />
    </InputWrapper>
  );
};

export default SearchInput;
