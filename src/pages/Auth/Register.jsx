import React from 'react';

const Register = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Inscription</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Nom" style={{ padding: '8px' }} />
        <input type="email" placeholder="Email" style={{ padding: '8px' }} />
        <input type="password" placeholder="Mot de passe" style={{ padding: '8px' }} />
        <button type="button" style={{ padding: '10px', background: '#28a745', color: 'white', border: 'none' }}>S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
