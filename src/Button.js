import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #555555;
  :disabled {
    cursor: not-allowed;
  }
  :focus {
    outline: none;
    border-color: #0058e1 !important;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export const PrimaryButton = styled(Button)`
  ${'' /* background-color: #4ca3ff; */} background-color: #76a3d2;
  border-color: transparent;
  color: white;
  :disabled {
    background-color: #f1f3f7;
    color: #555555;
  }
  :focus {
    box-shadow: inset 0 0 0 0.07142857em white, 0 0 0 0.07142857em #4c9aff !important;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  :hover {
    background-color: #fefefe;
    border-color: #d9d9d9;
  }
  :disabled {
    background-color: transparent;
    border-color: transparent;
    color: #999999;
  }
`;

export const PermanentMarkerButton = styled(Button)`
  font-family: 'Permanent Marker';
  border-radius: 1px;
  border-color: #000000;
  color: #000000;
  margin: 0px;
`;

export default Button;
