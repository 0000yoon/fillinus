import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Main(){
    return(
        <Container sx = {{ bgcolor: '#f23fe3', height: 'auto' }}>
            <Typography variant="h1" component="h2">
                main 
                </Typography>
        </Container>
    );
}

export default Main;