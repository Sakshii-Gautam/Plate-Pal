export const styles = {
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: '80vh',
  },
  loginRight: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '2rem', sm: '4rem' },
    border: '1px solid #a9a9a9',
    padding: { xs: '3rem', md: '5rem' },
    margin: '1rem',
    borderRadius: '1rem',
  },
  loginInputFields: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  loginInputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  loginInput: {
    padding: '1rem',
    border: 'none',
    borderBottom: '1px solid #a9a9a9',
    outline: 'none',
    fontSize: '1rem',
  },
  errorMessage: {
    fontSize: '1.2rem',
    color: 'red',
  },
  loginButton: {
    border: 'none',
    backgroundColor: '#92c064',
    width: '100%',
    padding: '1rem',
    color: '#ffffff',
    fontWeight: 'bold',
    boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  loginFooterContainer: {
    textAlign: 'center',
  },
  loginFooterLink: {
    cursor: 'pointer',
    color: '#6a983c',
  },
};
