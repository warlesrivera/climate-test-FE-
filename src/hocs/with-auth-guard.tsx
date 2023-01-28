import { AuthGuard } from '../components/authentication/auth-guard';

// eslint-disable-next-line react/display-name
export const withAuthGuard = (Component) => (props) => (
  <AuthGuard>
    <Component {...props} />
  </AuthGuard>
);
