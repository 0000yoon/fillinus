import * as React from 'react';

// import Header from './components/Header';
import BannerSliderAd from './BannerSliderAd';
import BestPrd from './BestPrd';
import BestReview from './BestReview';
import NewPrd from './NewPrd';
import WeekEatPrd from './WeekEatPrd';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Main(){
   
    
      return (
        <div>
          <Container sx={{ bgcolor: "#dcdcdc", height: "auto", padding:3 }}>

            
              <BannerSliderAd sx={{padding:3, margin:5}}></BannerSliderAd>
            

           
              <BestPrd sx={{padding:3, margin:5}}></BestPrd>
           

            < div BestReview sx={{ bgcolor: "#dcdcdc", height: "auto", padding:10 }}>
              <BestPrd></BestPrd>
            </div>

            < div NewPrd sx={{ bgcolor: "#dcdcdc", height: "auto", padding:10 }}>
              <NewPrd></NewPrd>
            </div>

            < div WeekEatPrd sx={{margin: 5, padding:10 }}>
              <WeekEatPrd></WeekEatPrd>
            </div>


          </Container>
        </div>
    
      );
}

export default Main;