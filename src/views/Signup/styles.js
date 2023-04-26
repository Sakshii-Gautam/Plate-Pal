export const styles = {
  signupContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: '80vh',
  },
  signupRight: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '2rem', sm: '4rem' },
    border: '1px solid #a9a9a9',
    padding: { xs: '3rem', md: '5rem' },
    margin: '1rem',
    borderRadius: '1rem',
  },
  signupInputFields: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  signupInputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  signupInput: {
    padding: '1rem',
    border: 'none',
    borderBottom: '1px solid #a9a9a9',
    outline: 'none',
  },
  errorMessage: {
    fontSize: '1.2rem',
    color: 'red',
  },
  signupButton: {
    border: 'none',
    backgroundColor: '#92c064',
    width: '100%',
    padding: '1rem',
    color: '#ffffff',
    fontWeight: 'bold',
    boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  signupFooterContainer: {
    textAlign: 'center',
  },
  signupFooterLink: {
    cursor: 'pointer',
    color: '#6a983c',
  },
};
