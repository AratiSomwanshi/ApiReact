import React, { useState } from 'react';
import { registerUser } from '../services/authServices'; // Correct import here
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Form, Button } from 'react-bootstrap'; // Import React Bootstrap components

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate(); // Initialize useNavigate

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        const newUser = {
            username,
            email,
            role: 'USER',
            address,
            password
        };

        setLoading(true);
        try {
            const response = await registerUser(newUser);
            if (response.isRegistered) {
                setMessage('User registered successfully!');
                navigate('/login'); // Redirect to login page
            } else {
                setMessage('Registration failed. Please try again.');
            }
        } catch (error) {
            setMessage('Registration failed. Please try again.');
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button type="submit" variant="primary" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </Button>
            </Form>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
}

export default Register;
