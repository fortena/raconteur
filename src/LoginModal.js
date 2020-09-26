import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { PermanentMarkerButton } from './Button';
import { setState, resetState } from './actions';
import { useStateValue } from './state';

const ModalWrapper = styled.div`
  margin: 100px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  margin: 10px 20px;
  width: fit-content;
`;

const LoginModal = () => {
  const [state, dispatch] = useStateValue();
  const authorization = window.localStorage.getItem('Authorization');
  return (
    <Popup
      modal
      trigger={
        <PermanentMarkerButton>
          {authorization ? 'Logout' : 'Login'}
        </PermanentMarkerButton>
      }
      closeOnDocumentClick
      contentStyle={{ maxWidth: '500px' }}
    >
      <ModalWrapper>
        <ButtonWrapper>
          {authorization ? (
            <GoogleLogout
              clientId={process.env.REACT_APP_GCID}
              buttonText="Logout"
              onLogoutSuccess={response => {
                resetState({ key: 'profile', dispatch });
                window.localStorage.removeItem('Authorization');
                console.log('response', response);
              }}
            />
          ) : (
            <GoogleLogin
              clientId={process.env.REACT_APP_GCID}
              onSuccess={response => {
                console.log('response', response);
                const { profileObj, tokenObj, tokenId } = response;
                window.localStorage.setItem(
                  'Authorization',
                  `Bearer ${tokenId}`
                );
                setState({ key: 'profile', dispatch, payload: profileObj });
              }}
              onFailure={resonse => console.log('response', resonse)}
              cookiePolicy="single_host_origin"
            />
          )}
        </ButtonWrapper>
      </ModalWrapper>
    </Popup>
  );
};

export default LoginModal;
