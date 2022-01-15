import React, { useContext } from 'react';

export const AuthContext = React.createContext({ loggedIn: false });//we will use this custom hook for auth purposes

export function useAuth() {
  return useContext(AuthContext);
}
