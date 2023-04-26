import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app, database } from '../../firebaseConfig';
import { styles } from './styles';
import {
  SearchOutlined,
  Person2Outlined,
  ExitToAppOutlined,
} from '@mui/icons-material/';
import { Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [userAuth, setUserAuth] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      setUserAuth(userAuth);
    });

    // Cleanup function to unsubscribe the onAuthStateChanged listener
    return unsubscribe;
  }, [auth]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUserAuth(null);
      localStorage.clear();
      navigate('/login');
      toast.success('Successfully Logged Out!');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <header style={styles.header}>
      <div style={styles.brandLogo}>
        <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          PlatePal
        </h1>
      </div>
      <Box sx={styles.headerIconsContainer}>
        {userAuth && (
          <SearchOutlined
            fontSize='medium'
            onClick={() => navigate('/search')}
          />
        )}

        <Person2Outlined
          fontSize='medium'
          onClick={() => (userAuth ? navigate('/profile') : navigate('/login'))}
        />

        {userAuth && (
          <ExitToAppOutlined fontSize='medium' onClick={handleSignOut} />
        )}
        <ToastContainer
          position='top-center'
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
        />
      </Box>
    </header>
  );
};

export default Header;
