import * as React from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slideBanner = {
    // dot: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
  };

function BannerSliderAd() {
    return(
        <div>
    
       
    
          <Slider {...slideBanner}>
            <div>
              <img src="https://s.pstatic.net/static/www/mobile/edit/20230328_1095/upload_1679982124122x0mBM.png" />
            </div>
            <div>
              <img src="https://s.pstatic.net/static/www/mobile/edit/20230405_1095/upload_16806811709957knt3.jpeg" />
            </div>
            <div>
              <img src="https://s.pstatic.net/static/www/mobile/edit/20230404_1095/upload_1680583275230UKDAh.jpg" />
            </div>
            <div>
              <img src="https://s.pstatic.net/static/www/mobile/edit/20230406_1095/upload_1680763385576rKHaq.png" />
            </div>
            <div>
              <img src="https://s.pstatic.net/static/www/mobile/edit/20230330_1095/upload_1680168288271OjmUj.png" />
            </div>
          </Slider>

          </div>

    );
}

export default BannerSliderAd;