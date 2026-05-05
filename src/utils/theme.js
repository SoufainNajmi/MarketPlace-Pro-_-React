export const baseThemeOptions = {
  bgDark: '#0f172a', // Dark root background
  bgCard: 'rgba(255, 255, 255, 0.03)', // Glassmorphism cards
  textMain: '#ffffff', // White text
  textMuted: '#94a3b8', // Muted white
  border: 'rgba(255, 255, 255, 0.1)',
  radius: '16px',
  shadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
};

export const clientTheme = {
  ...baseThemeOptions,
  primary: '#4f46e5', // Indigo
  primaryHover: '#4338ca',
  secondary: '#10b981',
};

export const fournisseurTheme = {
  ...baseThemeOptions,
  primary: '#10b981', // Emerald
  primaryHover: '#059669',
  secondary: '#4f46e5',
  warning: '#f59e0b',
  danger: '#ef4444', 
};

export const getStyles = (theme) => ({
  buttonPrimary: {
    padding: '12px 24px', background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.primaryHover} 100%)`, color: 'white', border: 'none',
    borderRadius: '12px', fontWeight: '600', cursor: 'pointer', outline: 'none',
    boxShadow: `0 10px 20px -5px ${theme.primary}80`, fontSize: '14px', transition: 'all 0.2s',
  },
  buttonOutline: {
    padding: '12px 24px', background: 'rgba(255, 255, 255, 0.05)', color: 'white', border: `1px solid ${theme.border}`,
    borderRadius: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', transition: 'all 0.2s',
    backdropFilter: 'blur(10px)'
  },
  buttonDanger: {
    padding: '8px 16px', background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.3)',
    borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', transition: 'all 0.2s'
  },
  input: {
    padding: '14px 16px', borderRadius: '12px', border: `1px solid ${theme.border}`,
    fontSize: '14px', width: '100%', color: 'white', background: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)'
  },
  card: {
    background: theme.bgCard, borderRadius: theme.radius, padding: '32px',
    boxShadow: theme.shadow, border: `1px solid ${theme.border}`, marginBottom: '24px',
    backdropFilter: 'blur(20px)'
  }
});
