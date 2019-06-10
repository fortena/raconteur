import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchIcon from './SearchIcon';

const InputWrapper = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 0px 5px 0px 10px;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;

const Input = styled.input`
  min-width: 400px;
  border: none;
  &:focus {
    outline: none;
  }
  font-size: 14px;
  height: 23px;
  @media (max-width: 400px) {
    min-width: unset;
    width: 100%;
  }
`;

const SearchInput = ({ value, ...props }) => {
  return (
    <InputWrapper>
      <SearchIcon color={value === '' ? '#757575' : '#000000'} />
      <Input value={value} {...props} />
    </InputWrapper>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string
};

SearchInput.defaultProps = {
  value: ''
};

export default SearchInput;
