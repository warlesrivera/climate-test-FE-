import { createContext, useEffect, useReducer } from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { IToken } from '../types/authentication';
import { setToken } from '../slices';

interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
}

interface AuthContextValue extends State {
  // eslint-disable-next-line no-unused-vars
  login: (accessToken: IToken) => Promise<void>;
  logout: () => Promise<void>;
  // eslint-disable-next-line no-unused-vars
}

interface AuthProviderProps {
  children: ReactNode;
}

type InitializeAction = {
  type: 'INITIALIZE';
  payload: {
    isAuthenticated: boolean;
  };
};

type LogoutAction = {
  type: 'LOGOUT';
};

type BasicLoginAction = {
  type: 'LOGIN';
};

type Action =
  | InitializeAction
  | LogoutAction
  | BasicLoginAction;

const initialState: State = {
  isAuthenticated: false,
  isInitialized: false,
};

// eslint-disable-next-line no-unused-vars
const handlers: Record<string, (state: State, action: Action) => State> = {

  LOGOUT: (state: State): State => ({
    ...state,
    isAuthenticated: false,
  }),
  BASIC_LOGIN: (state: State): State => ({
    ...state,
    isAuthenticated: true,
  }),
};

const reducer = (state: State, action: Action): State =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext<AuthContextValue>({
  ...initialState,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const reduxDispatch = useDispatch();

  useEffect(() => {
    const initialize = async (): Promise<void> => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');

        if (accessToken) {
          //Decode JWT token from authentication response

          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
            },
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
          },
        });
      }
    };

    initialize();
  }, []);

  

  const logout = async (): Promise<void> => {
    localStorage.removeItem('accessToken');
    dispatch({ type: 'LOGOUT' });
  };

  const register = async (
    email: string,
    name: string,
    password: string
  ): Promise<void> => {

  };

  const login = async (token: IToken, ): Promise<void> => {
    localStorage.setItem('accessToken', token.accessToken);
    reduxDispatch(
      setToken(token)
    );
    dispatch({
      type: 'LOGIN',
      
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
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
