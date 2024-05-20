import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Link, Stack, IconButton, InputAdornment } from '@mui/material';
//Import useAuth hook
 import { useAuth } from 'Auth';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export function SignIn() {
  const { login } = useAuth(); // Access login function from useAuth hook
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const initialValues = {
    email: '',
    password: '',
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      // Call login function from useAuth hook
      await login(values);
      // Assuming login is a placeholder, remove the above line and add your actual login logic

      // Clear error state if successful login
      setError('');
    } catch (error) {
      // Handle login error
      setError(error.message);
    }
    setSubmitting(false);
  };

  return (
    <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
      <div style={{ width: '334px', height: '334px', padding: '16px' }}>
        <Typography variant="h5" sx={{ fontSize: "28px", marginBottom: '20px' }}>
          Log in to your account
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {(formik) => (
            <Form>
              <div style={{ marginBottom: '16px' }}>
                <label htmlFor="email" style={{ fontSize: '20px' }}>Email Address</label>
                <Field
                  as={TextField}
                  id="email"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={formik.touched.email && !!formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label htmlFor="password">Password</label>
                <Field
                  as={TextField}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  size="small"
                  fullWidth
                  error={formik.touched.password && !!formik.errors.password}
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                          <Typography variant='h3'>{showPassword ? "Show" : "Hide"}</Typography>
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ textTransform: "none" }}>
                Login
              </Button>
              <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <Link href="#" underline="none" color="#50555E">Forgot your password? Reset here</Link>
              </div>
              {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </Stack>
  );
}
