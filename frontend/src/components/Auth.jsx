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
    return !!isAuth;
  }
})

export const authInfo = selector({
  key:'authInfo',
  get({get}) {
    const auth = get(authAtom);
    return {
      id:auth.id,
      nome:auth.nome,
      email:auth.email,
      notify:auth.notify
    };
  }
})

export function AuthContext ({children}) {

  const [_a, setAuth] = useRecoilState(authAtom);
  const [_r, setReady] = useRecoilState(readyAtom);

  async function AuthUser () {
    try{
      const api = useApi();

      const {data} = await api.get('/user/auth');
      const authData = data.data;
      setAuth(authData);
    }catch(e){
      console.log(e)
      setAuth(false);
    }
    setReady(true);
  }

  useEffect(() => {
    AuthUser();
  }, []);

  return (
    <>
      {children}
    </>
  )

}

export function AuthComponent ({permissions, redirect, children}) {

  const [hasPerm, setHasPerm] = useState(false);

  const isAuth = useRecoilValue(authSelector);
  const isReady = useRecoilValue(authReady);
  const authPerm = useRecoilValue(authPermissions);

  function HasPermissions () {
    
    const hPerm = !!permissions ? authPerm?.reduce((acc, v) => {
      return acc || permissions?.includes(v);
    }, false) : true;

    setHasPerm(hPerm);

    if(!!isReady && (!isAuth || !hPerm)){
      if(redirect) window.location.href = redirect;
    }
  }

  useEffect(() => {
    HasPermissions ();
  }, [isReady]);

	return (
		<>
			{(!!isAuth && !!isReady && hasPerm) ? (children || null) : null}
		</>
	);
};
