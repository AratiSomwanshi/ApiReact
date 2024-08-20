// import React, { useState } from 'react';
// import { loginuser } from './services/authServices'; // Adjust the import path to where your loginuser function is defined

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     const result = await loginuser(username, password, role);
    
//     if (result.type === 'USER_LOGIN_SUCCESS') {
//       // Redirect or perform further actions upon successful login
//       console.log('Login successful');
//       // For example, redirect to home page or user dashboard
//       // window.location.href = '/home'; // Adjust as needed
//     } else {
//       setError(result.payload);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="role">Role:</label>
//           <input
//             type="text"
//             id="role"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//         {error && <p className="error-message">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import { loginuser } from './services/authServices';// Adjust the import path according to your project structure
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // React Router hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await loginuser(username, password, role);
      if (result.type === 'USER_LOGIN_SUCCESS') {
        setSuccess('Login successful!');
        setError('');
        
        // Redirect based on role
        if (username === 'Admin10' && password === 'Admin10@123' && role === 'ADMIN') {
          navigate('/admin-dashboard'); // Redirect to Admin dashboard
        } else {
          console.log(role);
          navigate('/user-dashboard'); // Redirect to User dashboard
        }
      } else {
        setError(result.payload);
        setSuccess('');
      }
    } catch (error) {
      setError('An unexpected error occurred.');
      setSuccess('');
    }
  };

  return (
    <Container className="my-5">
      <h2>Login</h2>
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formRole">
          <Form.Label>Role</Form.Label>
          <Form.Control
            as="select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select your role</option>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
