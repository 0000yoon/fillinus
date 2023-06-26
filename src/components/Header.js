import * as React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function Header(){
    return(
        <Container sx={{ bgcolor: "#f1f1f1", height: "auto", padding:3 }}>
      <div style={{ textAlign: "center", color: "#FF71A4" }}>
        <img src = "img/logo_text.png" alt="textlogo"></img>
      </div>

      <center>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          
          <InputBase sx={{ ml: 1, flex: 1 }}
            placeholder = "검색어를 입력해주세요" inputProps=
            {{ "aria-label": "검색어입력ㄱㄱㄱ" }}>
          </InputBase>
          <IconButton>
            <SearchIcon>"searchicon"</SearchIcon>
          </IconButton>

          {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
        </Paper>
      </center>
    </Container>
    );
}

export default Header;