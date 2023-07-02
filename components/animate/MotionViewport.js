import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box } from '@mui/material';
// hooks
//
import { varContainer } from './variants';

// ----------------------------------------------------------------------

MotionViewport.propTypes = {
  children: PropTypes.node,
  disableAnimatedMobile: PropTypes.bool,
};

export default function MotionViewport({ children, ...other }) {


  return (
    <Box
      component={m.div}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}
