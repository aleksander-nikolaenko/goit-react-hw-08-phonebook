import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { routesPaths } from 'routerSettings/routesPaths';

const theme = createTheme();

export default function SignIn() {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    checkedRemember: false,
  });

  React.useEffect(() => {
    if (localStorage.getItem('savedUser')) {
      const receivedData = JSON.parse(localStorage.getItem('savedUser'));
      const { email, password, checkedRemember } = receivedData;
      setValues({
        ...values,
        email,
        password,
        checkedRemember,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleRememberChange = event => {
    setValues({ ...values, checkedRemember: event.target.checked });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get('email'),
      password: data.get('password'),
    };
    const savedData = JSON.stringify({
      ...userData,
      checkedRemember: values.checkedRemember,
    });
    values.checkedRemember
      ? localStorage.setItem('savedUser', savedData)
      : localStorage.removeItem('savedUser');
    console.log(userData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ my: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              value={values.email}
              label="Email Address"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              value={values.password}
              type="password"
              label="Password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.checkedRemember}
                  onChange={handleRememberChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                  value="remember"
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to={routesPaths.registerPage}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
