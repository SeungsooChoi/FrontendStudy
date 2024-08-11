import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { handleApiError } from '../utils/errorHandler';

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    if (!email.trim()) {
      setError('이메일을 입력해주세요.');
      return false;
    }
    if (!password.trim()) {
      setError('비밀번호를 입력해주세요.');
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!validate()) return;

    setIsLoading(true);

    try {
      const response = await api.login(email, password);
      if (response.status !== 200) throw response;
      sessionStorage.setItem('token', response.data.accessToken);
      setLoggedIn(true);
      navigate('/');
    } catch (error) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading} required />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          required
        />
      </div>
      <button type="submit">Login</button>
      <div>
        계정이 없으신가요? <Link to="/join">회원가입</Link>
      </div>
    </form>
  );
};

export default Login;
