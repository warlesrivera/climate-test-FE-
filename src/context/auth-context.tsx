import { createContext, useEffect, useReducer } from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logoutUser, useLogoutUserApiMutation } from '../slices';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
interface State {
  isInitialized: boolean;
  isAuthenticate: boolean;

}

interface AuthContextValue extends State {
  // eslint-disable-next-line no-unused-vars
  logout: () => Promise<void>;
  basicLogin: (accessToken: string) => Promise<void>;
  isAuthenticated: () => Promise<void>;

}

interface AuthProviderProps {
  children: ReactNode;
}

type InitializeAction = {
  type: 'INITIALIZE';
  payload: {
    isAuthenticate: boolean;
  };
};

type BasicLoginAction = {
  type: 'BASIC_LOGIN';
};
type LogoutAction = {
  type: 'LOGOUT';
};


type Action =
  | InitializeAction
  | BasicLoginAction
  | LogoutAction;

const initialState: State = {
  isAuthenticate: false,
  isInitialized: false,
};

// eslint-disable-next-line no-unused-vars
const handlers: Record<string, (state: State, action: Action) => State> = {
  BASIC_LOGIN: (state: State): State => ({
    ...state,
    isAuthenticate: true,
  }),
  LOGOUT: (state: State): State => ({
    ...state,
    isAuthenticate: false,
  }),

};

const reducer = (state: State, action: Action): State =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext<AuthContextValue>({
  ...initialState,
  logout: () => Promise.resolve(),
  basicLogin: () => Promise.resolve(),
  isAuthenticated: () => Promise.resolve(),

});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const reduxDispatch = useDispatch();
  const router = useRouter();
  const [
    logoutUserApi,
  ] = useLogoutUserApiMutation();


  useEffect(() => {
    const initialize = async (): Promise<void> => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');

        if (accessToken) {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticate: true,
            },
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticate: false,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticate: false,
          },
        });
      }
    };

    initialize();
  }, []);


  const logout = async (): Promise<void> => {
    logoutUserApi();
    localStorage.removeItem('accessToken');
    Cookies.remove('accessToken');
    reduxDispatch(logoutUser)
    dispatch({ type: 'LOGOUT' });
  };

  const isAuthenticated = async (): Promise<void> => {
    const localAccessToken = window.localStorage.getItem('accessToken');
    const cookieAccessToken = Cookies.get('accessToken');
    console.log(localAccessToken, cookieAccessToken)
    if (localAccessToken && cookieAccessToken ) {
      dispatch({
        type: 'INITIALIZE',
        payload: {
          isAuthenticate: true,
        },
      });
    } else {
      dispatch({
        type: 'INITIALIZE',
        payload: {
          isAuthenticate: false,
        },
      });
    }
  };
  const basicLogin = async (accessToken: string): Promise<void> => {
    localStorage.setItem('accessToken', accessToken);
    Cookies.set('accessToken', accessToken);
    dispatch({
      type: 'BASIC_LOGIN',
    });
      router.replace('/home');
  };



  return (
    <AuthContext.Provider
      value={{
        ...state,
        logout,
        basicLogin,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
