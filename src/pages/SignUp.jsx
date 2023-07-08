import { useState } from 'react';
import { storeSession } from 'util/auth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (res.ok) {
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        storeSession(data.data, data.token);

        setName('');
        setEmail('');
        setPassword('');

        navigate('/');
      }
    } else {
      setError('Oops something went wrong. Try again.');
    }
  };

  return (
    <div className="auth_container">
      <form onSubmit={handleSubmit} className="auth_form">
        <h1 className="text-xl font-black mb-5">Sign Up</h1>
        {error && <div className="bg-red-300 p-4">{error}</div>}
        <input type="text" className="form_input" onChange={(element) => setName(element.target.value)} placeholder="Name" value={name} required />

        <input type="email" className="form_input" onChange={(element) => setEmail(element.target.value)} placeholder="Email" value={email} required />

        <input type="password" className="form_input" onChange={(element) => setPassword(element.target.value)} placeholder="Password" value={password} required />

        <div className="flex justify-between items-center">
          <button className="outline_btn" type="submit">Sign Up</button>
          <div className="alt">
            Already have an account?&nbsp;
            <a href="/login" className="text-primary">
              Login
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
