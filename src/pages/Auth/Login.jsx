import React from 'react';

const Login = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Connexion</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="email" placeholder="Email" style={{ padding: '8px' }} />
        <input type="password" placeholder="Mot de passe" style={{ padding: '8px' }} />
        <button type="button" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none' }}>Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
