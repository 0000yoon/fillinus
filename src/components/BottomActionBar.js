import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function BottomActionBar(){
   return(

      <Container sx = {{ bgcolor: '#343434', height: 'auto' }}>
      <Typography variant="h5" component="h6">
          BottomActionBar Area
          </Typography>
  </Container>
   );
}

export default BottomActionBar;