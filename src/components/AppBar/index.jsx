import { AuthNav } from 'components/AuthNav';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'components/hooks/useAuth';

import Toolbar from '@mui/material/Toolbar';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Toolbar
        sx={{
          backgroundColor: '#ccc',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </header>
  );
};