import { useContext } from 'react';
import { AuthContext } from '../contexts/login-context';

export const useAuth = () => useContext(AuthContext);
