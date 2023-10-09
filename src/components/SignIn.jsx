// src/components/SignIn.js
import { useState } from 'react';
import { auth } from '../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible , setIsVisible] = useState(false);

  const handleSignIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('User signed in successfully');
    } catch (error) {
      console.error('Sign in error:', error);
      setIsVisible(true);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      {isVisible && <p>Invalid Credentials</p>}
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
