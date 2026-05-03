export const baseThemeOptions = {
  bgDark: '#1e293b',
  bgCard: '#ffffff',
  textMain: '#0f172a',
  textMuted: '#64748b',
  border: '#e2e8f0',
  radius: '12px',
  shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
  shadowHover: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
};

export const clientTheme = {
  ...baseThemeOptions,
  primary: '#4f46e5',
  primaryHover: '#4338ca',
  secondary: '#10b981',
};

export const fournisseurTheme = {
  ...baseThemeOptions,
  primary: '#10b981',
  primaryHover: '#059669',
  secondary: '#4f46e5',
  warning: '#f59e0b',
  danger: '#ef4444', 
};

export const getStyles = (theme) => ({
  buttonPrimary: {
    padding: '10px 20px', background: theme.primary, color: 'white', border: 'none',
    borderRadius: '8px', fontWeight: '500', cursor: 'pointer', outline: 'none',
    boxShadow: `0 2px 4px ${theme.primary}33`, fontSize: '14px'
  },
  buttonOutline: {
    padding: '10px 20px', background: 'transparent', color: theme.primary, border: `1px solid ${theme.border}`,
    borderRadius: '8px', fontWeight: '500', cursor: 'pointer', fontSize: '14px',
    backgroundColor: '#f8fafc'
  },
  buttonDanger: {
    padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none',
    borderRadius: '8px', fontWeight: '500', cursor: 'pointer', fontSize: '14px'
  },
  input: {
    padding: '12px 16px', borderRadius: '8px', border: `1px solid ${theme.border}`,
    fontSize: '14px', width: '100%', color: theme.textMain, background: '#f8fafc'
  },
  card: {
    background: theme.bgCard, borderRadius: theme.radius, padding: '24px',
    boxShadow: theme.shadow, border: `1px solid ${theme.border}`, marginBottom: '24px'
  }
});
