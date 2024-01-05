import { useAuth } from 'components/hooks';
import { logOut } from 'components/redux/auth/operation';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div  sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Typography
        variant="h6"
        component="div"
        sx={{fontWeight: 'bold', flexGrow: 1, color: '#43404d' }}
      >
        <p>Welcom, {user.name}</p>
      </Typography>
      <Button
        sx={{ fontWeight: 'bold', color: '#676767' }}
        email={user.email}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </div>
  );
};