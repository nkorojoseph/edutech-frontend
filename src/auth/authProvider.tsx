import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const AuthProviderWithHistory = ({ children }:any) => {
  const domain = String (process.env.REACT_APP_AUTH0_DOMAIN);
  const clientId = String (process.env.REACT_APP_AUTH0_CLIENT_ID);
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  const history = useNavigate();

  const onRedirectCallback = (appState:any) => {
    history(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProviderWithHistory;