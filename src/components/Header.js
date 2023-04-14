import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Header(){
    return(
        <Container sx = {{ bgcolor: '#cfe8fc', height: 'auto' }}>
            <Typography variant="h5" component="h6">
                Header
                </Typography>
        </Container>
        
    );
}

export default Header;