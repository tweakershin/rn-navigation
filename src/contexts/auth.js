import React from 'react'

export const AuthContext = React.createContext({
  token: null,
  isLogined: false,
  login: () => { },
  logout: () => { }
});


// 상태관리(Store) [Redux vs Mobx]
//  