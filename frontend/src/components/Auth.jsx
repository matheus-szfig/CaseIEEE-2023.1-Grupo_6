import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const authAtom = atom({
  key:'auth',
  default:false
});

const readyAtom = atom({
  key:'authReady',
  default:false
});

export const authPermissions = selector({
  key:'AuthPermissions',
  get({get}) {
    const authP = get(authAtom);
    return authP.permissions;
  }
})

export const authReady = selector({
  key:'isAuthReady',
  get({get}) {
    const isReady = get(readyAtom);
    return isReady;
  }
})

export const authSelector = selector({
  key:'isAuth',
  get({get}) {
    const isAuth = get(authAtom);
    return isAuth;
  }
})

export function AuthContext ({children}) {

  const [_a, setAuth] = useRecoilState(authAtom);
  const [_r, setReady] = useRecoilState(readyAtom);

  async function AuthUser () {
    try{
      const api = useApi();
      const {data} = await api.get('/user/auth');
      const authBool = data.data;

      setAuth(authBool);
    }catch(e){
      setAuth(false);
    }finally{
      setReady(true);
    }
  }

  useEffect(() => {
    AuthUser ();
  });

  return (
    <>
      {children}
    </>
  )

}

export function AuthPage ({permissions, redirect}) {
  const isAuth = useRecoilValue(authSelector);
  const isReady = useRecoilValue(authReady);
  const authPerm = useRecoilValue(authPermissions);

  function HasPermissions () {

    if(!permissions || permissions.length === 0) return false;

    return authPerm.reduce((acc, v) => {
      return acc || permissions.includes(v);
    }, false);
  }

  useEffect(() => {
    if(!!isReady && !isAuth || HasPermissions()){
      window.location.href = redirect;
    }
  }, [isReady])
  
  return (
    <>
    </>
  )
}

export function AuthComponent ({permissions, children}) {
  const isAuth = useRecoilValue(authSelector);
  const isReady = useRecoilValue(authReady);
  const authPerm = useRecoilValue(authPermissions);

  function HasPermissions () {

    if(!permissions || permissions.length === 0) return false;

    return authPerm.reduce((acc, v) => {
      return acc || permissions.includes(v);
    }, false);
  }

	return (
		<>
			{(!!isAuth && !!isReady && HasPermissions()) ? (children || null) : null}
		</>
	);
};
