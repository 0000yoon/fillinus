import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';

function BottomNavi(){

   const [value, setValue] = React.useState('recents');

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

   return(
      <BottomNavigation sx={{ width:400 }} value={value} onChange={handleChange}>
         <BottomNavigationAction
         label="메뉴"
         value="menu"
         icon={<MenuIcon />}
         />
         <BottomNavigationAction
         label="검색"
         value="search"
         icon={<SearchIcon />}
         />
         <BottomNavigationAction
         label="홈"
         value="home"
         icon={<HomeIcon />}
         />
         <BottomNavigationAction 
         label="스토어" 
         value="store" 
         icon={<StoreIcon />} />

         <BottomNavigationAction 
         label="마이페이지" 
         value="mypage" 
         icon={<PersonIcon />} />
    </BottomNavigation>
  );
}

//       <Container sx = {{ bgcolor: '#343434', height: 'auto' }}>
//       <Typography variant="h5" component="h6">
//           BottomActionBar Area
//           </Typography>
//   </Container>
//    );
// }

export default BottomNavi;