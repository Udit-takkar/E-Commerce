/* eslint-disable react/jsx-boolean-value */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const BackdropLoader = () => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: 1500 }} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackdropLoader;
